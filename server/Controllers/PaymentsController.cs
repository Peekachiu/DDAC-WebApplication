using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace DDAC_WebApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PaymentsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public PaymentsController(IConfiguration configuration)
        {
            _configuration = configuration;
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"];
        }

        // -------------------------------------------------------------
        // CREATE PAYMENT INTENT
        // -------------------------------------------------------------
        [HttpPost("create-payment-intent")]
        public async Task<ActionResult> CreatePaymentIntent([FromBody] PaymentRequest request)
        {
            var options = new PaymentIntentCreateOptions
            {
                Amount = (long)(request.Amount * 100),
                Currency = "myr",

                PaymentMethodTypes = new List<string>
                {
                    "card",
                    "fpx",
                    "grabpay"
                },

                // FORCE 3DS REDIRECT FOR CARD
                PaymentMethodOptions = new PaymentIntentPaymentMethodOptionsOptions
                {
                    Card = new PaymentIntentPaymentMethodOptionsCardOptions
                    {
                        RequestThreeDSecure = "any"
                    }
                }
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


        // -------------------------------------------------------------
        // RETRIEVE FULL PAYMENT INTENT (EXPANDED)
        // -------------------------------------------------------------
        [HttpGet("payment-intent/{id}")]
        public async Task<ActionResult> GetPaymentIntent(string id)
        {
            try
            {
                var service = new PaymentIntentService();

                var options = new PaymentIntentGetOptions
                {
                    Expand = new List<string>
                    {
                        "charges",
                        "charges.data.payment_method_details"
                    }
                };

                var intent = await service.GetAsync(id, options);

                return Ok(intent);
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