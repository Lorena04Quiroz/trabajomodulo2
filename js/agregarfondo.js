$("#formulario-agregar").submit((event)=>{
    event.preventDefault();
  // alert('voy agregar esto '+$("#txtagregar").val());
  const txtmnonto = $("#txtagregar").val();
  if (txtmnonto=='') 
  {
    toogleFormularioagrega(true);     
  }
  else {
    toogleFormularioagrega (false);
    const resultado=sumarmonto(txtmnonto);  
   $("#div-agrega").text(resultado).fadeIn();
  } 
}); 

function toogleFormularioagrega(muestraError){

    if(muestraError){
        $("#formulario-agregar").addClass("was-validated");
        $("#txtagregar").addClass("is-invalid");
        
    }else{
        $("#formulario-agregar").removeClass("was-validated");
        $("#txtagregar").removeClass("is-invalid");
       
    }

}
function sumarmonto(txtmonto){

    if(!isNaN(txtmonto)){        
        return 'A ingresado exitosamente el monto de $'+txtmonto+' a su cuenta ';
    } else{
        return 'Debe ingresar un monto válido';
    }

}