function ValidoLogin(correo,pass){

    const getCorreo=correo;
    const getPass=pass;

    if(getCorreo == "lorena@correo.cl" && getPass == "123456"){
        //return 'entre';
        location.href = './index.html';
    } else{
        return 'no entro';
    }
}

function toogleFormularioError(muestraError){

    if(muestraError){
        $("#formulario-login").addClass("was-validated");
        $("#txtcorreo").addClass("is-invalid");
        $("#txtpass").addClass("is-invalid");
    }else{
        $("#formulario-login").removeClass("was-validated");
        $("#txtcorreo").removeClass("is-invalid");
        $("#txtpass").removeClass("is-invalid");
    }

}

function agregarfondo(){
    location.href='./agregarfondo.html';
}

function retirarfondo(){
    location.href='./retirarfondos.html';
}

function transferencia(){
    location.href='./transferencias.html';
}




