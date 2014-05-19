using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using InsurancePoc.AppLayer;
using System.Web.Security;

namespace InsurancePoc.Web.Controllers
{
    public class AuthController : Controller
    {
        [HttpPost]
        public JsonResult Logout() {
            var cookie =  Request.Cookies[FormsAuthentication.FormsCookieName];
            cookie.Expires = DateTime.Now.AddDays(- 1);
            Response.Cookies.Add(cookie);
            return Json(new { }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Authenticate(AuthenticateCommand command)
        {
            dynamic data;

            if (command.Username == "keagan" && command.Password == "keaganp")
            {
                data = new
                {
                    Status = "successful",
                    Message = "",
                    Roles = new string[] { "" }
                };
                _addAuthTicket(command.Username);
            }
            else
                data = new
                {
                    Status = "failed",
                    Message = "Invalid username and/or password.",
                    Roles = new string[0]
                };

            return Json(data,JsonRequestBehavior.AllowGet);
        }

        public JsonResult IsAuthenticated(){
            var username = _getUserFromTicket();
            var data = new {
                IsAuthenticated = username != null,
                Roles = _getRolesForUser(username)
            };
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        private void _addAuthTicket(string username) {
            var ticket = new FormsAuthenticationTicket(1,username,DateTime.Now,DateTime.Now.AddMinutes(30),
               false, username, FormsAuthentication.FormsCookiePath);

            Response.Cookies.Add(new HttpCookie(FormsAuthentication.FormsCookieName, FormsAuthentication.Encrypt(ticket)));
        }

        private string _getUserFromTicket() {
            var cookie = Request.Cookies[FormsAuthentication.FormsCookieName];
            if (cookie == null)
                return null;

            var ticketInfo = FormsAuthentication.Decrypt(cookie.Value);
            return ticketInfo.UserData;            
        }

        private string[] _getRolesForUser(string username) {

            return new[] {
                "policy admin",
                "report viewer",
                "dashboard viewer",
                "collections admin",
                "inventory admin"
            };
        }
    }
}
