/**
 * 
 * @param {String} sTo
 * @param {String} sFromAccount - The account configured on the node side to send the email from.
 * @param {String} sReplyTo
 * @param {String} sSubject
 * @param {String} sMessage
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"26EDD589-112D-41C1-84F1-15B2F544A4BE"}
 */
function mailTo(sTo,sFromAccount,sReplyTo,sSubject,sMessage)
{
	var properties = new Array()
	properties[0] = 'mail.smtp.host=myserver.com';
	properties[1] = 'mail.smtp.port=86';
	return plugins.mail.sendMail(sTo, sFromAccount, sSubject, sMessage, null, null, null, properties);
}