$("#formulario-login").submit((event)=>{
    event.preventDefault();
    console.log('submit formulario');

    const txtCorreo = $("#txtcorreo").val();
    const txtPass = $("#txtpass").val();
    if(txtCorreo == ''){
        toogleFormularioError(true);
    }else {
        if(txtPass == ''){
            toogleFormularioError(true);
        }else{
            toogleFormularioError(false);
            const resultado=ValidoLogin(txtCorreo,txtPass);           
            $("#div-mensaje").text(resultado).fadeIn();
        }     

    }

});


$('#botonAgregar').click(function() { 
agregarfondo();   
    });

$('#botonRetirarr').click(function() { 
retirarfondo();   
});

$('#botonTransferir').click(function() { 
transferencia();   
});


               