$("#formulario-transferir").submit((event)=>{
    event.preventDefault();
  // alert('voy agregar esto '+$("#txtagregar").val());
  const txtnombre = $("#txtnombre").val();
  const txtcuenta = $("#txtcuenta").val();
  const txtbanco = $("#banco").val();
  const txtcorreo = $("#txtcorreo").val();
  const txtmonto = $("#txtcantidad").val();
  if (txtnombre=='' || txtcuenta==''|| txtbanco==''|| txtcorreo==''|| txtmonto=='' ) 
  {
    toogleFormulariotransfiere(true);     
  }
  else {
    toogleFormulariotransfiere (false);
    const resultado=transfieremonto(txtnombre,txtcuenta,txtbanco,txtcorreo,txtmonto);  
   $("#div-transferir").text(resultado).fadeIn();
  } 
});

function toogleFormulariotransfiere(muestraError){

    if(muestraError){
        $("#formulario-transferir").addClass("was-validated");
        $("#txtnombre").addClass("is-invalid");
        $("#txtcuenta").addClass("is-invalid");
        $("#banco").addClass("is-invalid");
        $("#txtcorreo").addClass("is-invalid");
        $("#txtcantidad").addClass("is-invalid");
        
    }else{
        $("#formulario-transferir").removeClass("was-validated");
        $("#txtnombre").removeClass("is-invalid");
        $("#txtcuenta").removeClass("is-invalid");
        $("#banco").removeClass("is-invalid");
        $("#txtcorreo").removeClass("is-invalid");
        $("#txtcantidad").removeClass("is-invalid");
    }

}

function transfieremonto(txtnombre,txtcuenta,txtbanco,txtcorreo,txtmonto){
   

    if(!isNaN(txtmonto)){
        if (txtmonto>20000) {
            return 'No dispone de saldo suficiente';
        } else {
            return 'Se a tranferido el monto $'+ txtmonto+' al cliente '+ txtnombre+' del banco'+ txtbanco;
        }        
    } else{
        return 'Debe ingresar un monto válido';
    }

}

