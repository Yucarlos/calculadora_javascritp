var num="", num1="", num2="", sw="op1",swpunto="on",fnum1="", signo="",operador="",id='',res='',swnega="on",repeat="off";


document.getElementById('on').addEventListener("click", function() {borrar("on");});
document.getElementById('sign').addEventListener("click", function() {negativo("-");});
document.getElementById('0').addEventListener("click", function() {cero("0");});
document.getElementById('1').addEventListener("click", function() {tecla("1");});
document.getElementById('2').addEventListener("click", function() {tecla("2");});
document.getElementById('3').addEventListener("click", function() {tecla("3");});
document.getElementById('4').addEventListener("click", function() {tecla("4");});
document.getElementById('5').addEventListener("click", function() {tecla("5");});
document.getElementById('6').addEventListener("click", function() {tecla("6");});
document.getElementById('7').addEventListener("click", function() {tecla("7");});
document.getElementById('8').addEventListener("click", function() {tecla("8");});
document.getElementById('9').addEventListener("click", function() {tecla("9");});
document.getElementById('punto').addEventListener("click", function() {punto(".");}); 
document.getElementById('mas').addEventListener("click", function(){operando("+");});
document.getElementById('menos').addEventListener("click", function(){operando("-");});
document.getElementById('por').addEventListener("click", function(){operando("*");});
document.getElementById('dividido').addEventListener("click", function(){operando("/");});
document.getElementById('igual').addEventListener("click", function(){resultado(fnum1,operador,num2,'=');});

function borrar(id) {
    id="on";
    animaclick(id);
    num2="",num1="",num="",signo="",swpunto="on",res="",sw="op1",fnum1="", swnega="on", repeat="off";
    document.getElementById('display').innerHTML="0";
}

function negativo(num) {
    primer = num1[0];
    long=num1.length;
    if (swnega == "on"){
        if (num == "-") { id="sign"; animaclick(id);}
        if (sw == "op1" && num1 > "0"){
            num1=num+num1;
            document.getElementById("display").innerHTML= num1;
        }
        if (primer == "-"){
            num1=num1.substr(1,(long-1));
            document.getElementById("display").innerHTML= num1;
        }
     }
}

function cero(num) {
    id=num;
    animaclick(id);
        if (num1 > 0 && sw == "op1"){
            ingresadigitos(num);             
        }
        if (num2 >0 && sw == "op") {
            ingresadigitos(num);   
        }
        if (sw == "op" && num2 == ""){
            num2 = "0";
            document.getElementById('display').innerHTML=0;
            sw="";
        }
        if (sw == "op1" && num1 == ""){
            num1 = "0";
            document.getElementById('display').innerHTML=0;
            sw="";
        }

}

function tecla(num) {   
    id=num;
    animaclick(id);
    ingresadigitos(num);
}

function punto(num){
    if (swpunto=="on") {
        if (num == ".") { id="punto"; animaclick(id);}

        if (num1== "" && sw == "op1"){
            num1="0";
            
        }
        if (num2=="" && sw == "op") {
            num2="0";
        
        } 
    ingresadigitos(num);

    }
    swpunto="off";
}

function operando(signo) {
if( signo == "/"){id="dividido";animaclick(id);};
if( signo == "*"){id="por";animaclick(id);};
if( signo == "-"){id="menos";animaclick(id);};
if( signo == "+"){id="mas";signoclick(id);};
swpunto="on",repeat="off";
if ( num1 != "" || fnum1 !="") {
        if (num2  != ""){
        operacion(fnum1,operador,num2,signo); 
        }
        if (res == "" ){  
            if (sw =="op1" || sw == "") {
                if (num1 == ""){
                    fnum1="0";
                    operador=signo;
                    num1="",num2="";
                    document.getElementById("display").innerHTML= "";
                    sw="op";
                }else {
                    fnum1=num1;
                    operador=signo;
                    num1="",num2="";
                    document.getElementById("display").innerHTML= "";
                    sw="op";
                }
            }
        }else{
            fnum1=res;
            operador=signo;
            num1="",num2="";
            document.getElementById('display').innerHTML=fnum1+""+operador;
            sw="op";
        }                  
    }
}
    
function ingresadigitos(num) {
    repeat="off";
    if(sw == "op"){
        num2 += num;
        document.getElementById("display").innerHTML= num2; 
        long= num2.length;
    if (long == 8){
        sw="";
    }
    }
    if (sw == "op1"){
        num1 += num;
        document.getElementById("display").innerHTML= num1;
        long= num1.length;
    if (long == 8){
        sw="";
    }
    } 
}



function resultado(fnum1,operador,num2,signo) {
    if( signo == "="){id="igual";animaclick(id);};
    swpunto="on";
    
    if (repeat == "on")  {
        fnum1=res;
        operacion(fnum1,operador,num2,signo);
        document.getElementById("display").innerHTML=res;
    }else {
        if (num2 >="0"){
            operacion(fnum1,operador,num2,signo);
            document.getElementById("display").innerHTML=res;
        }
    }
    repeat="on";
    sw= "op1";
}

function operacion(fnum1,operador,num2,signo) {
    
    a= parseFloat(fnum1);
    b= parseFloat(num2);
    c="";
    d="";
    if (operador == "+"){
        total=a+b;
    }
    if (operador == "-"){
        total=a-b;
    }
    if (operador == "*"){
        total=a*b;
    }
    if (operador == "/"){
        total=a/b;
    }
    c=total.toString();
    d=c.length;
    if (d > 8) {
        res=c.substr(0,8);
        
    }else{
        res=c;
    }
    

}


function animaclick(id) {
    setTimeout(padi,30);
    function padi(){
        document.getElementById(id).style.padding="0px";
    }
        document.getElementById(id).style.padding="2px";
 
}
function signoclick(id) {
    setTimeout(padi,30);
    function padi(){
        document.getElementById(id).style.padding="0px";
    }
        document.getElementById(id).style.padding="0.5px";

}
