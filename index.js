const encriptButton = document.querySelector(".blue-button");
const desEncript = document.querySelector(".grey-button");
const contenidoResultado = document.querySelector(".resultado_texto p");
const botonCopiar = document.querySelector(".copiar");
const textarea = document.querySelector("#msg");
const contenidoResultadoDiv = document.querySelector(".resultado_texto");
const sinTexto = document.querySelector(".sin-texto");


console.log(contenidoResultado)
console.log(encriptButton)

window.onload = function() {
    contenidoResultadoDiv.style.display = 'none';
    botonCopiar.style.display = 'none';  
}



encriptButton.addEventListener('click', function(){

    
    contenidoResultado.innerHTML = '';
    contenidoResultado.innerHTML = textarea.value;
    
    if(textarea.value == '') {
        contenidoResultadoDiv.style.display = 'none';
        botonCopiar.style.display = 'none';  
        sinTexto.style.display = 'block'

    } else {
        contenidoResultadoDiv.style.display = 'block';
        botonCopiar.style.display = 'block'; 
        sinTexto.style.display = 'none';
    }
});




function cambiarLetras() {
    let texto = contenidoResultado.textContent;

    texto = texto.replaceAll('e', 'enter');
    texto = texto.replaceAll('i', 'imes');
    texto = texto.replaceAll('a', 'ai');
    texto = texto.replaceAll('o', 'ober');
    texto = texto.replaceAll('u', 'ufat');

    contenidoResultado.textContent = texto;
}

function deshacerCambio() {
    let texto = contenidoResultado.textContent;

    texto = texto.replaceAll('enter', 'e');
    texto = texto.replaceAll('imes', 'i');
    texto = texto.replaceAll('ai', 'a');
    texto = texto.replaceAll('ober', 'o');
    texto = texto.replaceAll('ufat', 'u');

    contenidoResultado.textContent = texto;
}

encriptButton.addEventListener('click', cambiarLetras);

desEncript.addEventListener('click', deshacerCambio);




