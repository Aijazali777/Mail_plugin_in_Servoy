
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FF2112CD-6652-45D7-B9DA-29BE3F10DE8B"}
 */
function testEmail(event)
{
	var msgText = '<html><body><p>This is a test email.</p></body></html>';
	
	var properties = new Array();
	properties[0] = 'mail.smtp.host=smtp.gmail.com';
	properties[1] = 'mail.smtp.auth=true';
	properties[2] = 'mail.smtp.starttls.enable=true';
	properties[3] = 'mail.smtp.port=587';
	properties[4] = 'mail.smtp.username=aijazalee889@gmail.com';
	properties[5] = 'mail.smtp.password=jgtiotxukxumpycn';

	var success = plugins.mail.sendMail('aijazalidadu5@gmail.com', 'aijazalee889@gmail.com,mohammadmustansir52@gmail.com', 'test', msgText, null, null, null, properties);
	
	if(success)
	{
	   	application.output("Test email has been sent successfully!");
	}
	else
	{
	   	application.output("Test email has been failed to sent!");
	}

}
