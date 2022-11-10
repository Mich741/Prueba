var inputName = document.getElementById('Nombre');

var inputEmail = document.getElementById("Email");

var inputPrefix = document.getElementById("Prefix");

var inputPhone = document.getElementById("Phone");

var inputRut = document.getElementById("Rut");

var Btn1 = document.getElementById("btn1");

var register = document.getElementById("comp-l2tja7hk");



function ver() {
    if (inputName.value == "" || inputEmail.value == "" || inputPhone.value == "" || inputRut.value == "" ){

    }else{
        texto();
    }
}
function texto(){
    document.querySelector("#comp-l2tja7hk").style.visibility="visible";
    setTimeout(quitar,5000);
}
function quitar(){
    document.querySelector("#comp-l2tja7hk").style.visibility="hidden";
    location.reload();    
}

Btn1.addEventListener('click', ver);


function capturarD(){
    var nombre =  document.getElementById('Nombre').value;
    var email =  document.getElementById('Email').value;
    var phone = document.getElementById('Phone').value;
    var rut = document.getElementById('Rut').value;
    var prefix = document.getElementById('Prefix').value;


    if(nombre == ""){
        alert("Hay campos vacios, rellenelos");
        document.getElementById('Nombre').focus();
    }
    else{
        if(email == ""){
            document.getElementById('Email').focus();
        }
        if(phone == ""){
            document.getElementById('Phone').focus();
        }
        if(rut == ""){
            document.getElementById('Rut').focus();
        }
        if(prefix == ""){
            document.getElementById('Prefix').focus();
        }
        
        else{
            console.log(nombre + "   " + email+ `${prefix}`+ phone +"  "+ rut) ;
        }
    }
  
}




