using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InsurancePoc.AppLayer
{
    public class AuthenticateCommand
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
