var porta = location.port;
if (porta == "4200"){
    porta="8080"
}

//Local
//export const URL_API = 'http://localhost:8080/api';
var url = location.protocol + '//' + location.hostname + ':'+ porta + '/api';
export const URL_API = url;

