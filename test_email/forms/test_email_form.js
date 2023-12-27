
/**
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"FF2112CD-6652-45D7-B9DA-29BE3F10DE8B"}
 */
function testEmail(event)
{
	var to = 'aijazalidadu5@gmail.com';
	var from = 'aijazalee889@gmail.com';
	var reply_to = 'mohammadmustansir52@gmail.com';
	var subject = 'test';
	var msgText = '<html><body><p>This is a test email.</p></body></html>';
	
	var properties = new Array();
	properties[0] = 'mail.smtp.host=smtp.gmail.com';
	properties[1] = 'mail.smtp.auth=true';
	properties[2] = 'mail.smtp.starttls.enable=true';
	properties[3] = 'mail.smtp.port=587';
	properties[4] = 'mail.smtp.username=aijazalee889@gmail.com';
	properties[5] = 'mail.smtp.password='; // use here App Password
	

	from = reply_to != '' && reply_to != null ? from+','+reply_to:from;
	
	
	
	sendEmail(to, from, subject, msgText, properties);
}

/**
 * @properties={typeid:24,uuid:"13050D06-DDB6-46E4-93BC-BF2E7E150077"}
 */
function sendEmail(to, fromField, subject, msgText, properties)
{
	var success = plugins.mail.sendMail(to, fromField, subject, msgText, null, null, null, properties);
	
	if(success)
	{
	   	application.output("Test email has been sent successfully!");
	}
	else
	{
	   	application.output("Test email has been failed to sent!");
	}

}