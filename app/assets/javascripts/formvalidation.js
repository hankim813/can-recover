function processForm()
{	
	var myform=document.getElementById("form1");
	if (myform.fname.value=="")
	{
		$("#the-name").show("fast").delay(4000).hide("slow")
    myform.fname.focus();
    return;
	}
	else if (myform.femail.value=="")
	{
		$("#the-email").show("fast").delay(4000).hide("slow")
		myform.femail.focus();
		return;
	}

	else if (myform.fmessage.value=="")
	{
		$("#the-message").show("fast").delay(4000).hide("slow")
		myform.fmessage.focus();
		return;
	}
	else
	{
		myform.submit();
	}
};
