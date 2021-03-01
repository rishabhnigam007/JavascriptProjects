//show password
$(document).ready(function(){
    $("#pw").focus(function(){
        this.type = "text";
    }).blur(function(){
        this.type = "password";
    })   
});

//Placeholder fixed for Internet Explorer
$(function() {
	var input = document.createElement("input");
	if(('placeholder' in input)==false) { 
		$('[placeholder]').focus(function() {
			var i = $(this);
			if(i.val() == i.attr('placeholder')) {
				i.val('').removeClass('placeholder');
				if(i.hasClass('password')) {
					i.removeClass('password');
					this.type='password';
				}			
			}
		}).blur(function() {
			var i = $(this);	
			if(i.val() == '' || i.val() == i.attr('placeholder')) {
				if(this.type=='password') {
					i.addClass('password');
					this.type='text';
				}
				i.addClass('placeholder').val(i.attr('placeholder'));
			}
		}).blur().parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var i = $(this);
				if(i.val() == i.attr('placeholder'))
					i.val('');
			})
		});
	}
	});
	
	function valid()
	{
		var fname=document.getElementById('fnameid').value;
		var lname=document.getElementById('lnameid').value;
		var onlychar=/^[A-Za-z ]+$/;
		
		var email=document.getElementById("emailid").value;
		
		var mob=document.getElementById("mobid").value;
		
		var pw=document.getElementById("pwid").value;
		
		var cnpw=document.getElementById("cnpwid").value;
		
		
		if(fname.length<3||fname.length>30)
		{
			document.getElementById("fnamespan").innerHTML="Name must be between 3 to 30 characters";
			return false;
		}
		if(!(fname.match(onlychar)))
		{
			document.getElementById("fnamespan").innerHTML="Only alphabet characters are allowed";
			return false ;
		}
			document.getElementById("fnamespan").innerHTML="";
			
			
		if(lname.length<3||lname.length>30)
		{
			document.getElementById("lnamespan").innerHTML="Name must be between 3 to 30 characters";
			return false;
		}
		if(!(lname.match(onlychar)))
		{
			document.getElementById("lnamespan").innerHTML="Only alphabet characters are allowed";
			return false ;
		}
		document.getElementById("lnamespan").innerHTML="";
		
		
		if(email.indexOf('@')<=0)
		{
			document.getElementById("emailspan").innerHTML="Please enter a valid Email Id";
			return false;
		}
		if((email.lastIndexOf('.')!=email.length-4)&&(email.lastIndexOf('.')!=email.length-3))
		{
			document.getElementById("emailspan").innerHTML="Please enter a valid Email Id";
			return false;
		}
		document.getElementById("emailspan").innerHTML="";
		
		if(mob.length!=10)
		{
			document.getElementById("mobspan").innerHTML="Please enter a valid mobile number length";
			return false;
		}
		if(mob.charAt(0)<=5)
		{
			document.getElementById("mobspan").innerHTML="Please enter a valid mobile number";
			return false;
		}
		if(isNaN(mob))
		{
			document.getElementById("mobspan").innerHTML="Please enter only digits";
			return false;
		}
		document.getElementById("mobspan").innerHTML="";
		
		if(pw.length<6)
		{
			document.getElementById("pwspan").innerHTML="Password length must be atleast 6 characters";
			return false;
		}
		if(pw.length>30)
		{
			document.getElementById("pwspan").innerHTML="Password length must be maximum 30 characters";
			return false;
		}
		if(pw!=cnpw)
		{
			document.getElementById("cnpwspan").innerHTML="Password fields are not matching";
			return false;
		}
		
	}