using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    // --- Shared DTOs ---
    public class RecentActivityDto
    {
        public int Id { get; set; }
        public string Type { get; set; } = string.Empty; // "resident", "payment", "visitor", "complaint", "booking"
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime Time { get; set; }
        public string Status { get; set; } = string.Empty;
    }

    // --- Admin DTOs ---
    public class DashboardStatsDto
    {
        public int TotalResidents { get; set; }
        public int ActiveVisitors { get; set; }
        public int PendingRequests { get; set; }
        public decimal MonthlyRevenue { get; set; }
        public List<BuildingOccupancyDto> Occupancy { get; set; } = new();
        public List<RecentActivityDto> RecentActivities { get; set; } = new();
        public List<PendingApprovalDto> PendingApprovals { get; set; } = new();
    }

    public class BuildingOccupancyDto
    {
        public string Building { get; set; } = string.Empty;
        public int Total { get; set; }
        public int Occupied { get; set; }
        public double Percentage { get; set; }
    }

    public class PendingApprovalDto
    {
        public int Id { get; set; }
        public string Type { get; set; } = string.Empty;
        public string Item { get; set; } = string.Empty;
        public string Requester { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string Priority { get; set; } = string.Empty;
    }

    // --- Resident DTOs ---
    public class ResidentDashboardDto
    {
        public int UpcomingBookings { get; set; }
        public decimal PendingPayments { get; set; }
        public int ActiveVisitors { get; set; }
        public int OpenRequests { get; set; }
        public List<RecentActivityDto> RecentActivities { get; set; } = new();
        public List<UpcomingEventDto> UpcomingEvents { get; set; } = new();
    }

    public class UpcomingEventDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string Time { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly ResidentProDbContext _context;

        public DashboardController(ResidentProDbContext context)
        {
            _context = context;
        }

        // ================= ADMIN DASHBOARD =================
        [HttpGet("stats")]
        public async Task<ActionResult<DashboardStatsDto>> GetDashboardStats()
        {
            // 1. Basic Counters
            var totalResidents = await _context.Users.CountAsync(u => u.Role == 1);
            var activeVisitors = await _context.Visitors.CountAsync(v => v.Status == 0);
            var pendingRequests = await _context.Reports.CountAsync(r => r.ReportStatus == 0);

            var startOfMonth = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1);
            var monthlyRevenue = await _context.ManagementFees
                .Where(m => m.Status == 1 && m.PaymentDate >= startOfMonth)
                .SumAsync(m => m.Amount);

            // 2. Occupancy
            var allProperties = await _context.Properties.ToListAsync();
            var occupiedIds = await _context.Users.Select(u => u.PropertyID).Distinct().ToListAsync();

            var occupancy = allProperties
                .GroupBy(p => p.Block)
                .Select(g => new BuildingOccupancyDto
                {
                    Building = $"Block {g.Key}",
                    Total = g.Count(),
                    Occupied = g.Count(p => occupiedIds.Contains(p.PropertyID)),
                    Percentage = g.Any() ? Math.Round((double)g.Count(p => occupiedIds.Contains(p.PropertyID)) / g.Count() * 100, 1) : 0
                })
                .OrderBy(x => x.Building)
                .ToList();

            // 3. Recent Activity (Admin View)
            var activities = new List<RecentActivityDto>();

            // New Users
            var newUsers = await _context.Users.Include(u => u.Property)
                .Where(u => u.Role == 1).OrderByDescending(u => u.UserID).Take(3).ToListAsync();
            activities.AddRange(newUsers.Select(u => new RecentActivityDto {
                Id = u.UserID, Type = "resident", Title = "New Resident",
                Description = $"{u.FirstName} {u.LastName} - {u.Property?.Unit ?? "No Unit"}",
                Time = DateTime.Now, Status = "success"
            }));

            // Recent Payments
            var payments = await _context.ManagementFees.Include(m => m.Property)
                .Where(m => m.Status == 1).OrderByDescending(m => m.PaymentDate).Take(3).ToListAsync();
            activities.AddRange(payments.Select(p => new RecentActivityDto {
                Id = p.PaymentID, Type = "payment", Title = "Fee Payment",
                Description = $"Unit {p.Property?.Unit ?? "Unknown"} - ${p.Amount}",
                Time = p.PaymentDate ?? DateTime.Now, Status = "success"
            }));

            // Recent Reports
            var reports = await _context.Reports.Include(r => r.User).ThenInclude(u => u!.Property)
                .OrderByDescending(r => r.SubmittedDate).Take(3).ToListAsync();
            activities.AddRange(reports.Select(r => new RecentActivityDto {
                Id = r.ReportID, Type = "complaint", Title = r.Subject,
                Description = r.Description.Length > 30 ? r.Description.Substring(0, 30) + "..." : r.Description,
                Time = r.SubmittedDate, Status = r.Priority == "high" ? "urgent" : "info"
            }));

            // 4. Pending Approvals
            var approvals = new List<PendingApprovalDto>();

            var bookings = await _context.SportFacilities.Include(s => s.User).ThenInclude(u => u!.Property)
                .Where(s => s.Status == 0).Take(3).ToListAsync();
            approvals.AddRange(bookings.Select(b => new PendingApprovalDto {
                Id = b.SBookingID, Type = "Booking", Item = b.SportName,
                Requester = b.User?.FirstName ?? "Unknown", Date = b.BookingDate.ToShortDateString(), Priority = "medium"
            }));

            var reqs = await _context.Reports.Include(r => r.User).ThenInclude(u => u!.Property)
                .Where(r => r.ReportStatus == 0).Take(3).ToListAsync();
            approvals.AddRange(reqs.Select(r => new PendingApprovalDto {
                Id = r.ReportID, Type = "Request", Item = r.Subject,
                Requester = r.User?.FirstName ?? "Unknown", Date = r.SubmittedDate.ToShortDateString(), Priority = r.Priority
            }));

            return Ok(new DashboardStatsDto
            {
                TotalResidents = totalResidents,
                ActiveVisitors = activeVisitors,
                PendingRequests = pendingRequests,
                MonthlyRevenue = monthlyRevenue,
                Occupancy = occupancy,
                RecentActivities = activities.OrderByDescending(a => a.Time).Take(5).ToList(),
                PendingApprovals = approvals
            });
        }

        // ================= RESIDENT DASHBOARD =================
        [HttpGet("resident-stats/{userId}")]
        public async Task<ActionResult<ResidentDashboardDto>> GetResidentStats(int userId)
        {
            var user = await _context.Users.Include(u => u.Property).FirstOrDefaultAsync(u => u.UserID == userId);
            if (user == null) return NotFound("User not found");

            // 1. Calculate Stats
            var today = DateTime.Today;
            
            // Count future sport + event bookings
            var sportCount = await _context.SportFacilities.CountAsync(s => s.UserID == userId && s.BookingDate >= today);
            var eventCount = await _context.EventHalls.CountAsync(e => e.UserID == userId && e.BookingDate >= today);
            var upcomingBookings = sportCount + eventCount;

            // Sum unpaid fees
            var pendingPayments = 0m;
            if (user.PropertyID != 0)
            {
                pendingPayments = await _context.ManagementFees
                    .Where(m => m.PropertyID == user.PropertyID && m.Status == 0) // 0 = Pending
                    .SumAsync(m => (decimal)m.Amount);
            }

            // Active visitors (checked in)
            var activeVisitors = await _context.Visitors.CountAsync(v => v.UserID == userId && v.Status == 0);

            // Open reports (not resolved/rejected)
            var openRequests = await _context.Reports.CountAsync(r => r.UserID == userId && r.ReportStatus != 2 && r.ReportStatus != 3);

            // 2. Recent Activity (User specific)
            var activities = new List<RecentActivityDto>();

            // User's recent payments
            if (user.PropertyID != 0)
            {
                var myPayments = await _context.ManagementFees
                    .Where(m => m.PropertyID == user.PropertyID && m.Status == 1)
                    .OrderByDescending(m => m.PaymentDate).Take(2).ToListAsync();
                
                activities.AddRange(myPayments.Select(p => new RecentActivityDto {
                    Id = p.PaymentID, Type = "payment", Title = "Fee Paid",
                    Description = $"Amount: ${p.Amount}", Time = p.PaymentDate ?? DateTime.Now, Status = "success"
                }));
            }

            // User's recent reports
            var myReports = await _context.Reports
                .Where(r => r.UserID == userId)
                .OrderByDescending(r => r.SubmittedDate).Take(2).ToListAsync();
            
            activities.AddRange(myReports.Select(r => new RecentActivityDto {
                Id = r.ReportID, Type = "complaint", Title = "Request Update",
                Description = r.Subject, Time = r.SubmittedDate, Status = "progress"
            }));

            // User's recent visitors
            var myVisitors = await _context.Visitors
                .Where(v => v.UserID == userId)
                .OrderByDescending(v => v.VisitDate).Take(2).ToListAsync();
            
            activities.AddRange(myVisitors.Select(v => new RecentActivityDto {
                Id = v.VisitorID, Type = "visitor", Title = "Visitor Entry",
                Description = v.VisitorName, Time = v.VisitDate.Add(v.VisitTime), Status = "info"
            }));

            // 3. Upcoming Events (User bookings + General Announcements)
            var eventsList = new List<UpcomingEventDto>();

            // Add User's Sport Bookings
            var mySportBookings = await _context.SportFacilities
                .Where(s => s.UserID == userId && s.BookingDate >= today)
                .OrderBy(s => s.BookingDate).Take(2).ToListAsync();
            
            eventsList.AddRange(mySportBookings.Select(s => new UpcomingEventDto {
                Id = s.SBookingID, Title = s.SportName, Location = "Sports Center",
                Date = s.BookingDate.ToString("MMM dd, yyyy"),
                Time = DateTime.Today.Add(s.StartTime).ToString("h:mm tt")
            }));

            // Add User's Event Hall Bookings
            var myEventBookings = await _context.EventHalls
                .Include(e => e.Venue)
                .Where(e => e.UserID == userId && e.BookingDate >= today)
                .OrderBy(e => e.BookingDate).Take(2).ToListAsync();

            eventsList.AddRange(myEventBookings.Select(e => new UpcomingEventDto {
                Id = e.HBookingID, Title = "Hall Booking", Location = e.Venue?.VenueDescription ?? "Event Hall",
                Date = e.BookingDate.ToString("MMM dd, yyyy"),
                Time = DateTime.Today.Add(e.StartTime).ToString("h:mm tt")
            }));

            // Add Public Event Announcements
            var announcements = await _context.Announcements
                .Where(a => a.Type == "event" && a.ScheduledDate >= today)
                .OrderBy(a => a.ScheduledDate).Take(2).ToListAsync();

            eventsList.AddRange(announcements.Select(a => new UpcomingEventDto {
                Id = a.AnnouncementID, Title = a.Title, Location = "Community",
                Date = a.ScheduledDate.ToString("MMM dd, yyyy"),
                Time = "All Day"
            }));

            return Ok(new ResidentDashboardDto
            {
                UpcomingBookings = upcomingBookings,
                PendingPayments = pendingPayments,
                ActiveVisitors = activeVisitors,
                OpenRequests = openRequests,
                RecentActivities = activities.OrderByDescending(a => a.Time).Take(4).ToList(),
                UpcomingEvents = eventsList.OrderBy(e => e.Date).Take(3).ToList()
            });
        }
    }
}