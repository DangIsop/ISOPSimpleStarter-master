//const soap = require('node-soap-api');
import soap from 'node-soap-api';

export const AUTH = 'authenticate';

const auth_wsdl = 'http://devsappo.dangote-group.com:50000/dir/wsdl?p=sa/1056838088b53fc0a6c848599f1c7fd2';

export function logon(values) {

	client.setSecurity(new soap.BasicAuthSecurity('devuser','user@200'));

	const request = soap.createClient(auth_wsdl).then(client => {
		return client.si_full_auth_abs(values);
	}).then((result) => {
		console.log(result);
	});

	  // const request2 = soap.createClient(auth_wsdl, function(err, client) {
	  //     client.si_full_auth_abs(values, function(err, result) {
	  //         console.log(result);
	  //     });
	  // });

	// return {
	// 	type: AUTH,
	// 	payload: request
	// };
}