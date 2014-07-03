function processForm()
{	
	var myform=document.getElementById("form1");
	if (myform.fname.value=="")
	{
    alert("Name is required");
    myform.fname.focus();
    return;
	}
	else if (myform.femail.value=="")
	{
		alert("Email is required");
		myform.femail.focus();
		return;
	}

	else if (myform.fmessage.value=="")
	{
		alert("Message is required");
		myform.fmessage.focus();
		return;
	}
	else
	{
		myform.submit();
	}
};
