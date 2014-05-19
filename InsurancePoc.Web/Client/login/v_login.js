define(['fader', 'jquery', 'text!login/tpl.html', 'msg_error', 'commands_auth', 'blocker', 'auth'], 
    function (fader, $, tpl, msg_error, command, blocker, auth) {

    var render = function () {
        fader.Fade($('#main_content'), tpl, templateLoaded);
    };

    var templateLoaded = function () {
        setupValidation();
        $('#btnLogin').click(onLoginClicked);

        blocker.Unblock();
    };

    var setupValidation = function () {
        $('#frmLogin').validate({
            rules: {
                username: "required",
                password: "required",
            },
            messages: {
			username: "",
            password: ""
            }
        });
    }



    var onLoginClicked = function () {
        msg_error.Close();
        var usernameValid = $('#txtUsername').valid();
        var passwordValid = $('#txtPassword').valid();

        if(!usernameValid && !passwordValid){
            showErrorMsg('<b>Login Failed:</b> </br>No username and password supplied. Please enter your username and password.');
            return;
        }

        if(!usernameValid){
            showErrorMsg('<b>Login Failed:</b> </br>No Username supplied. Please enter your username.');
            return;
        }
        
        if(!passwordValid){
            showErrorMsg('<b>Login Failed:</b> </br>No Password supplied. Please enter your password.');
            return;
        }

        blocker.Block();

        var data = {
            Username: $('#txtUsername').val(),
            Password: $('#txtPassword').val()
        };

        command.Authenticate(data, onAuthResult);
    };

    var onAuthResult = function(result){
        if(result.Status != 'successful'){
            showErrorMsg('<b>Login Failed:</b> </br>' + result.Message);
            blocker.Unblock();
            return;
        }

        auth.Authenticate(result.Roles);
        window.location = '/#/'
        location.reload();
    }



    var showErrorMsg = function (msg) {
        msg_error.Render($('#error_msg'), msg);
    };

    var dispose = function () {
    };

    return {
        Render: render
    }
});