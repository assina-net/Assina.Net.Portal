/*----------------------------------------------------------------------------*/
/* validação de CPF                                                           */
/*----------------------------------------------------------------------------*/

/**
 * seta o foco no elemento informado.
 */
function setarFocus(elementId) {
   if (!isEmpty(elementId)) {
       var field = document.getElementById(elementId);
       if (!isEmpty(field)) {
           setTimeout(function () {
               field.focus();
               field.select();
           }, 500)
       }
   }
}

function isEmpty(obj) {
   return (obj === undefined || obj === null);
}

function validar_cpf( cpf ) {

   cpf = cpf.replace(/[^\d]+/g,'');
   if(cpf == '') return false;
   // Elimina CPFs invalidos conhecidos
   if (cpf.length != 11 ||
       cpf == "00000000000" ||
       cpf == "11111111111" ||
       cpf == "22222222222" ||
       cpf == "33333333333" ||
       cpf == "44444444444" ||
       cpf == "55555555555" ||
       cpf == "66666666666" ||
       cpf == "77777777777" ||
       cpf == "88888888888" ||
       cpf == "99999999999")
           return false;
   // Valida 1o digito
   add = 0;
   for (i=0; i < 9; i ++)
       add += parseInt(cpf.charAt(i)) * (10 - i);
       rev = 11 - (add % 11);
       if (rev == 10 || rev == 11)
           rev = 0;
       if (rev != parseInt(cpf.charAt(9)))
           return false;
   // Valida 2o digito
   add = 0;
   for (i = 0; i < 10; i ++)
       add += parseInt(cpf.charAt(i)) * (11 - i);
   rev = 11 - (add % 11);
   if (rev == 10 || rev == 11)
       rev = 0;
   if (rev != parseInt(cpf.charAt(10)))
       return false;
   return true;
}

/*----------------------------------------------------------------------------*/
/* validação de CNPJ                                                          */
/*----------------------------------------------------------------------------*/
function validar_cnpj( cnpj ) {

   cnpj = cnpj.replace(/[^\d]+/g,'');

   if(cnpj == '') return false;

   if (cnpj.length != 14)
       return false;

   // Elimina CNPJs invalidos conhecidos
   if (cnpj == "00000000000000" ||
       cnpj == "11111111111111" ||
       cnpj == "22222222222222" ||
       cnpj == "33333333333333" ||
       cnpj == "44444444444444" ||
       cnpj == "55555555555555" ||
       cnpj == "66666666666666" ||
       cnpj == "77777777777777" ||
       cnpj == "88888888888888" ||
       cnpj == "99999999999999")
       return false;

   // Valida DVs
   tamanho = cnpj.length - 2;
   numeros = cnpj.substring(0,tamanho);
   digitos = cnpj.substring(tamanho);
   soma = 0;
   pos = tamanho - 7;
   for (i = tamanho; i >= 1; i--) {
     soma += numeros.charAt(tamanho - i) * pos--;
     if (pos < 2)
           pos = 9;
   }
   resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
   if (resultado != digitos.charAt(0))
       return false;

   tamanho = tamanho + 1;
   numeros = cnpj.substring(0,tamanho);
   soma = 0;
   pos = tamanho - 7;
   for (i = tamanho; i >= 1; i--) {
     soma += numeros.charAt(tamanho - i) * pos--;
     if (pos < 2)
           pos = 9;
   }
   resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
   if (resultado != digitos.charAt(1))
         return false;

   return true;

}

/*----------------------------------------------------------------------------*/
/* Formatar CNPJ e CPF                                                        */
/*----------------------------------------------------------------------------*/
function formata_cpf_cnpj( tipoPessoa, valor ) {

   // O valor formatado
   var formatado = false;

   // Garante que o valor é uma string
   valor = valor.toString();

   // Remove caracteres inválidos do valor
   valor = valor.replace(/[^0-9]/g, '');

   // Valida CPF
   if ( tipoPessoa == 'F' ) {

       // Verifica se o CPF é válido
       if ( validar_cpf( valor ) ) {

           // Formata o CPF ###.###.###-##
           formatado  = valor.substr( 0, 3 ) + '.';
           formatado += valor.substr( 3, 3 ) + '.';
           formatado += valor.substr( 6, 3 ) + '-';
           formatado += valor.substr( 9, 2 ) + '';

       }

   }
   // Valida CNPJ
   else if ( tipoPessoa == 'J' ) {

       // Verifica se o CNPJ é válido
       if ( validar_cnpj( valor ) ) {

           // Formata o CNPJ ##.###.###/####-##
           formatado  = valor.substr( 0,  2 ) + '.';
           formatado += valor.substr( 2,  3 ) + '.';
           formatado += valor.substr( 5,  3 ) + '/';
           formatado += valor.substr( 8,  4 ) + '-';
           formatado += valor.substr( 12, 14 ) + '';

       }

   }

   // Retorna o valor
   return formatado;

} // formata_cpf_cnpj

/*----------------------------------------------------------------------------*/
/* Formatar Telefone		                                                   */
/*----------------------------------------------------------------------------*/
function formata_telefone( valor ) {

   // O valor formatado
   var formatado = false;

   // Garante que o valor é uma string
   valor = valor.toString();

   // Remove caracteres inválidos do valor
   valor = valor.replace(/[^0-9]/g, '');

   // 10 digitos
   if ( valor.length == 10 ) {

       // Formata (##) ####-####
       formatado  = '(';
       formatado += valor.substr( 0, 2 ) + ') ';
       formatado += valor.substr( 2, 4 ) + '-';
       formatado += valor.substr( 6, 4 ) + '';

   }
   // 11 digitos
   else if ( valor.length == 11 ) {

       // Formata (##) #####-####
      formatado  = '(';
       formatado += valor.substr( 0, 2 ) + ') ';
       formatado += valor.substr( 2, 5 ) + '-';
       formatado += valor.substr( 7, 4 ) + '';

   }

   // Retorna o valor
   return formatado;

} // formata_telefone

/*----------------------------------------------------------------------------*/
/* Formatar CEP		                                                   */
/*----------------------------------------------------------------------------*/
function formata_cep( valor ) {

   // O valor formatado
   var formatado = false;

   // Garante que o valor é uma string
   valor = valor.toString();

   // Remove caracteres inválidos do valor
   valor = valor.replace(/[^0-9]/g, '');

   // 8 digitos
   if ( valor.length == 8 ) {

       // Formata #####-###
      formatado  = valor.substr( 0, 5 ) + '-';
       formatado += valor.substr( 5, 3 ) + '';

   }

   // Retorna o valor
   return formatado;

} // formata_cep

/*----------------------------------------------------------------------------*/
/* validação de Email                                                         */
/*----------------------------------------------------------------------------*/
function validar_email( email ) {
  if(email == '') {
     return false;
  }

  usuario = email.substring(0, email.indexOf("@"));
  dominio = email.substring(email.indexOf("@")+ 1, email.length);

  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
     return true;
  } else {
     return false;
  }
}

function dateToStr(pdata){
   if (!pdata){
      return '';
   }

  if (!isNaN(pdata)) {
     var dia = pdata.getDate();
      if (dia.toString().length == 1)
        dia = "0"+dia;
      var mes = pdata.getMonth()+1;
      if (mes.toString().length == 1)
        mes = "0"+mes;
      var ano = pdata.getFullYear();
      return dia+"/"+mes+"/"+ano;
  }
}

function dateTimeToStr(pdata){
  if (!pdata){
      return '';
   }

   if (!isNaN(pdata)) {
     var dia = pdata.getDate();
      if (dia.toString().length == 1)
        dia = "0"+dia;
      var mes = pdata.getMonth()+1;
      if (mes.toString().length == 1)
        mes = "0"+mes;
      var ano = pdata.getFullYear();

      var hora = lpad(pdata.getHours(),2,'0');
      var minuto = lpad(pdata.getMinutes(),2,'0');
      var segundos = lpad(pdata.getSeconds(),2,'0');

      return dia+"/"+mes+"/"+ano+" "+hora+":"+minuto+":"+segundos;
  }
}

function montaData(str) {
  if (!str){
     return null;
  }

  if (str != undefined) {
     var parts = str.split('/');
       var d = new Date(parts[2], parts[1] - 1, parts[0]);

       return d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
  }
}

function montaDataHora(str) {
  if (!str){
     return null;
  }

  if (str != undefined) {
     var dateTime = str.split(" ");//dateTime[0] = date, dateTime[1] = time

     var date = dateTime[0].split("/");
     var time = dateTime[1].split(":");

     var minuto = null;

     if (!time[2]){
        minuto = 0;
     } else {
        minuto = time[2];
     }

     var data = new Date(date[2],date[1]-1,date[0], time[0], time[1], minuto, 0);

      return data;
  }
}

function mostraData(str) {
  if (!str){
     return null;
  }

  var ano = str.substring(0, 4);
  var mes = str.substring(6, 8);
  var dia = str.substring(9, 10);

  var data;

  data = mes;
  data += "-";
  data += dia;
  data += "-";
  data += ano;

  return data;
}

function dataValida(str) {
  var data = str;
   var dia = data.substring(0, 2);
   var mes = data.substring(3, 5);
   var ano = data.substring(6, 10);

   //Criando um objeto Date usando os valores ano, mes e dia.
   var novaData = new Date(ano,(mes-1),dia);

   var mesmoDia = parseInt(dia,10) == parseInt(novaData.getDate());
   var mesmoMes = parseInt(mes,10) == parseInt(novaData.getMonth())+1;
   var mesmoAno = parseInt(ano) == parseInt(novaData.getFullYear());

   if (!((mesmoDia) && (mesmoMes) && (mesmoAno))){
       return false;
   }

   return true;
}

function mesAnoValido(str) {
   data = montaData("01/" + str);
   return !isNaN(data);
}

function lpad(n, width, z) {
 z = z || '0';
 n = n + '';
 return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function strToCurr(str) {
   if (str != undefined) {
       return parseFloat(str.replace('.', '').replace(',', '.'));
   }
}

function currToStr(valor, casas, separador_decimal, separador_milhar){

   var valor_total = parseInt(valor * (Math.pow(10,casas)));
   var inteiros =  parseInt(parseInt(valor * (Math.pow(10,casas))) / parseFloat(Math.pow(10,casas)));
   var centavos = parseInt(parseInt(valor * (Math.pow(10,casas))) % parseFloat(Math.pow(10,casas)));

   if(centavos%10 == 0 && centavos+"".length<2 ){
       centavos = centavos+"0";
   }else if(centavos<10){
       centavos = "0"+centavos;
   }

   var milhares = parseInt(inteiros/1000);
   inteiros = inteiros % 1000;

   var retorno = "";

   if(milhares>0){
       retorno = milhares + "" + separador_milhar + "" + retorno;
       if(inteiros == 0){
           inteiros = "000";
       } else if(inteiros < 10){
           inteiros = "00"+inteiros;
       } else if(inteiros < 100){
           inteiros = "0"+inteiros;
       }
   }
   retorno += inteiros+""+separador_decimal+""+centavos;
   return retorno;
}

function tipoArquivoValido(str) {
   var tipoArq = str.substring(0, 22);
   return (tipoArq == "data:image/jpeg;base64");
}

function pad(n, width, z) {
   z = z || '0';
   n = n + '';
   return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function strToInt(str) {
   if (str != undefined) {
       var vlr = parseInt(str);
       if (isNaN(vlr)) {
           return 0;
       }
       return vlr;
   }
   return 0;
}

function browserUsuario(){

   var b = navigator.appName;
   var ua = navigator.userAgent.toLowerCase();
   var Browser = {};
   Browser.safari = ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1;
   Browser.opera = ua.indexOf('opera') > -1;
   Browser.firefox = ua.indexOf('firefox') > -1;
   Browser.ie = !Browser.opera && b == 'Microsoft Internet Explorer';
   Browser.gecko = ua.indexOf('gecko') > -1;
   delete b;
   delete ua;

  var ret = "outro";
  if (Browser.firefox){ // firefox
     ret = "mozilla";
  } else if (Browser.ie){ //Internet Explorer (do mal)
     ret = "ie";
  } else if (Browser.safari){ //Safari
     ret = "safari";
  } else if (Browser.opera){ // Opera
     ret = "opera";
  }

  return ret;
}

function retornaUltimoDiaMes(data) {
  var mes = data.getMonth();
  var ano = data.getFullYear();

  mes++;

  if(mes > 11){
     mes = 0;
     ano ++;
  }

  var proximoMes = new Date(ano, mes, 1);
  var ultimoDia = new Date(proximoMes.getTime() - (1000 * 3600 * 24));

  return ultimoDia;
}

function getPaceHandle() {
   return Pace;
}

function testPace() {
   var pace = getPaceHandle();
   var paceOptions = {
      document: false, // disabled
      eventLag: true,
      restartOnPushState: true,
      restartOnRequestAfter: true,
      ajax: {
         trackMethods: ['GET', 'POST', 'PUT'],
      }
   };
   pace.stop();
   pace.start(paceOptions);
   pace.restart();
   //UtilService.setProgress(true);
}
