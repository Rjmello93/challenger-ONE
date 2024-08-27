var textArea = document.querySelector(".text-area");
var mensagem = document.querySelector(".mensagem");
var stringDesencriptografada=""
var stringEncriptografada=""

//As "chaves" de criptografia que utilizaremos são:
//`A letra "e" é convertida para "enter"`
//`A letra "i" é convertida para "imes"`
//`A letra "a" é convertida para "ai"`
//`A letra "o" é convertida para "ober"`
//`A letra "u" é convertida para "ufat"`

function btnEncriptografar() {
        var texto=textArea.value.trim();
    texto=texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    //var textoEncriptografado = "test text";
    mensagem.value = texto;
    textArea.value = "";
}


function btnDesencriptografar(){
    var texto=textArea.value.trim();
    texto=texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    //var textoEncriptografado = "test text";
    mensagem.value = texto;
    textArea.value = "";
}

function btncopiar(){


//var btnCopiar = document.querySelector(".btn_copiar");
navigator.clipboard.writeText(document.getElementById("mensagem").value)
//btnCopiar.addEventListener("click", function() {
  //mensagem.select();
  //document.execCommand('copy');
  alert("Texto copiado com sucesso!");
//});
}