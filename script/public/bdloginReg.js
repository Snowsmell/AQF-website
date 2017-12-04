
    function __changeEmail(of) {
        var email = $('#' + of).val();
		if (email == '' || !isEmail(email)) {
			document.getElementById('noticeLR_' + of).innerHTML = '请输入你的邮箱';
			return;
		}
		else {
			document.getElementById('noticeLR_' + of).innerHTML = '';
		}
    }
	
	function __changeUserName(of) {
        var username = $('#' + of).val();
        if (of == 'email') {
            if (username.search(/^[\w\.+-]+@[\w\.+-]+$/) == -1) {
                showTooltips('email_input', '请输入正确的Email地址');
                return;
            }
        } else {
            if (username == '' || !isMobilePhone(username)) {
                document.getElementById('noticeLR_' + of).innerHTML = '请正确填写手机号码';
                return;
            }
            else {
                document.getElementById('noticeLR_' + of).innerHTML = '';
            }
        }
    }

    function __changeRealName(of) {
        var realname = $('#' + of).val();
        if (realname == '') {
            document.getElementById('noticeLR_' + of).innerHTML = '请正确填写用户名';
        } else {
            document.getElementById('noticeLR_' + of).innerHTML = '';
        }
    }

    function __changeRealNameL(of) {
        var realname = $('#' + of).val();
        if (realname == '') {
            document.getElementById('noticeLR_' + of).innerHTML = '请填写手机号或用户名';
        } else {
            document.getElementById('noticeLR_' + of).innerHTML = '';
        }
    }
	
	function __changeRating(of) {
        var rating = $('#' + of).val();
        if (rating == '') {
            document.getElementById('noticeLR_' + of).innerHTML = '请输入你的级别';
        } else {
            document.getElementById('noticeLR_' + of).innerHTML = '';
        }
    }
	
	//login 验证
    function checkPwdL(pwd) {
        var pwdval = $('#' + pwd).val();
        if (pwdval == '') {
            document.getElementById('noticeLR_' + pwd).innerHTML = '请输入密码';
        } else {
			document.getElementById('noticeLR_' + pwd).innerHTML = '';
		}
    }

    function checkPwd1(pwd1) {
        var pwdval = $('#' + pwd1).val();
        var passwordRegex = new RegExp(/^[a-zA-Z0-9]{6,15}$/);
        if (passwordRegex.test(pwdval) == false) {
            document.getElementById('noticeLR_' + pwd1).innerHTML = '请正确填写密码';
        } else {
            var msg = checkPassword(pwdval);
            if (msg == "red") {
                document.getElementById('noticeLR_' + pwd1).innerHTML = "您的密码风险极大，请重新设置。";
            }
            else if (msg == "orange") {
                document.getElementById('noticeLR_' + pwd1).innerHTML = "您的密码过短。请使用8-15位数字加字母的组合方式。";
            }
            else if (msg == "yellow") {
                document.getElementById('noticeLR_' + pwd1).innerHTML = "您的密码过于简单，请使用数字加字母的组合方式。";
            } else {
                document.getElementById('noticeLR_' + pwd1).innerHTML = '';
            }
        }
    }

    function checkEmail(email) {
        if (email.search(/^.+@.+$/) == -1) {
            showTooltips('email_input', '邮箱格式不正确');
        } else {
            hideTooltips('email_input');
        }
    }

    function checkAuthCode(authcode) {
        if (authcode == '' || authcode.length != 6) {
            showTooltips('code_input', '验证码不正确');
        } else {
            hideTooltips('code_input');
        }
    }

    function checkReg(formType) {
        document.getElementById('noticeLR_realname' + formType).innerHTML = '';
        document.getElementById('noticeLR_tel' + formType).innerHTML = '';
        document.getElementById('noticeLR_verifyCode' + formType).innerHTML = '';
        document.getElementById('noticeLR_passwd' + formType).innerHTML = '';
        document.getElementById('noticeLR_verify' + formType).innerHTML = '';
        if ($('#realname' + formType).val() == '') {
            document.getElementById('noticeLR_realname' + formType).innerHTML = '请正确填写真实姓名';
            return false;
        }
        if ($('#tel' + formType).val() == '' || !isMobilePhone($('#tel' + formType).val())) {
            document.getElementById('noticeLR_tel' + formType).innerHTML = '请正确填写手机号码';
            return false;
        }
        if ($('#verifyCode' + formType).val().length != 6 || $('#verifyCode' + formType).val().search(/^[0-9]{6,6}$/) == -1 || $('#verifyCode' + formType).val() != $('#furl').val()) {
            document.getElementById('noticeLR_verifyCode' + formType).innerHTML = "请输入正确的手机验证码";
            return false;
        }
        var passwordRegex = /^[a-zA-Z0-9]{6,15}$/;
        if ($('#passwd' + formType).val() == '' || passwordRegex.test($('#passwd' + formType).val()) == false) {
            document.getElementById('noticeLR_passwd' + formType).innerHTML = '请正确填写密码';
            return false;
        } else {
            var msg = checkPassword($('#passwd' + formType).val());
            if (msg == "red") {
                document.getElementById('noticeLR_passwd' + formType).innerHTML = "您的密码风险极大，请重新设置。";
                return false;
            }
            else if (msg == "orange") {
                document.getElementById('noticeLR_passwd' + formType).innerHTML = "您的密码过短。请使用8-15位数字加字母的组合方式。";
                return false;
            }
            else if (msg == "yellow") {
                document.getElementById('noticeLR_passwd' + formType).innerHTML = "您的密码过于简单，请使用数字加字母的组合方式。";
                return false;
            } else {
                document.getElementById('noticeLR_passwd' + formType).innerHTML = '';
            }
        }
        if ($('#verify' + formType).attr('checked') == false) {
            document.getElementById('noticeLR_verify' + formType).innerHTML = '对不起，您不同意Webluker的《使用协议》无法注册';
            return false;
        } else {
            document.getElementById('form_reg' + formType).submit();
        }
    }

    function checkMobilePhone(telphone) {
        if (telphone == '' || !isMobilePhone(telphone)) {
            showTooltips('mobile_input', '请输入正确的手机号码');
        } else {
            hideTooltips('mobile_input');
        }
    }
	
	function isEmail(value) {
        if (value.search(/^[\w\.+-]+@[\w\.+-]+$/) == -1)
            return false;
        else
            return true;
    }

    function isMobilePhone(value) {
        if (value.search(/^1[3|4|5|8|7][0-9]\d{8}$/) == -1)
            return false;
        else
            return true;
    }


function reg() {
    document.getElementById("loginDialog").style.display = "none";
    document.getElementById("regDialog").style.display = "block";
}
function closereg() {
    document.getElementById("regDialog").style.display = "none";
}
function login() {
    document.getElementById("regDialog").style.display = "none";
    document.getElementById("loginDialog").style.display = "block";
}
function closelogin() {

    document.getElementById("loginDialog").style.display = "none";
}

//登录 to 注册
function LtR(){
	document.getElementById("topregister").style.display = "block";
    document.getElementById("toplogin").style.display = "none";
}
//注册 to 登录 
function RtL(){
	document.getElementById("topregister").style.display = "none";
    document.getElementById("toplogin").style.display = "block";
}

