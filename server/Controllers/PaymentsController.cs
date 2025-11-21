using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace DDAC_WebApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public PaymentsController(IConfiguration configuration)
        {
            _configuration = configuration;
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"];
        }

        [HttpPost("create-payment-intent")]
        public async Task<ActionResult> CreatePaymentIntent([FromBody] PaymentRequest request)
        {
            var options = new PaymentIntentCreateOptions
            {
                // Stripe expects amount in the smallest currency unit (e.g., cents for USD/MYR)
                // RM 10.00 -> 1000 cents
                Amount = (long)(request.Amount * 100),
                Currency = "myr",
                PaymentMethodTypes = new List<string>
                {
                    "card",
                    "fpx",
                    "grabpay"
                },
            };

            var service = new PaymentIntentService();
            try
            {
                var intent = await service.CreateAsync(options);
                return Ok(new { clientSecret = intent.ClientSecret });
            }
            catch (StripeException e)
            {
                return BadRequest(new { error = e.StripeError.Message });
            }
        }
    }

    public class PaymentRequest
    {
        public decimal Amount { get; set; }
    }
}