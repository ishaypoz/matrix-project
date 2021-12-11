using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Matrix.Api
{
    public class AuthMiddleware
    {
        private readonly RequestDelegate _next;

        public AuthMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {

            string authToken = context.Request.Headers["Token"];
            if (!string.IsNullOrEmpty(authToken))
            {
                bool isHeaderValid = validateToken(authToken);
                if (isHeaderValid)
                {
                    await _next.Invoke(context);
                    return;
                }

            }
            context.Response.StatusCode = 401;
            await context.Response.WriteAsync("Unauthorized");
        }

        private bool validateToken(string token)
        {
            try
            {
                if (token == "1234")
                {
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }
    }
}
