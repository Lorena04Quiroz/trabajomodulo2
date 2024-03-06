$("#formulario-retirar").submit((event)=>{
    event.preventDefault();
  // alert('voy agregar esto '+$("#txtagregar").val());
  const txtmnonto = $("#txtretirar").val();
  if (txtmnonto=='') 
  {
    toogleFormularioretira(true);     
  }
  else {
    toogleFormularioretira (false);
    const resultado=retirarmonto(txtmnonto);  
   $("#div-retirar").text(resultado).fadeIn();
  } 
});   

function toogleFormularioretira(muestraError){

    if(muestraError){
        $("#formulario-retirar").addClass("was-validated");
        $("#txtretirar").addClass("is-invalid");
        
    }else{
        $("#formulario-retirar").removeClass("was-validated");
        $("#txtretirar").removeClass("is-invalid");
       
    }

}

function retirarmonto(txtmonto){

    if(!isNaN(txtmonto)){
        if (txtmonto>20000) {
            return 'No dispone de saldo suficiente';
        } else {
            return 'A retirado exitosamente el monto de $'+txtmonto+' a su cuenta ';
        }        
    } else{
        return 'Debe ingresar un monto válido';
    }

}