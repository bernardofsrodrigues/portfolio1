//variáveis
var tituloElement = document.getElementById('tituloPrincipal');
var descricaoElement = document.getElementById('descricao');

var tituloText = tituloElement.getAttribute('data-text');
var descricaoText = descricaoElement.getAttribute('data-text');

tituloElement.innerHTML = '';
descricaoElement.innerHTML = '';

var i = 0;
var j = 0;
var speed = 35; // velocidade de digitação (em milissegundos)

function typeWriter() {
    if (i < tituloText.length) {
        if (tituloText.charAt(i) === '<') {
            // Se encontrar uma tag HTML, avança até encontrar o fechamento da tag
            var tagEndIndex = tituloText.indexOf('>', i);
            tituloElement.innerHTML += tituloText.slice(i, tagEndIndex + 1);
            i = tagEndIndex + 1;
        } else {
            tituloElement.innerHTML += tituloText.charAt(i);
            i++;
        }
        setTimeout(typeWriter, speed);
    } else if (j < descricaoText.length) {
        if (descricaoText.charAt(j) === '<') {
            // Se encontrar uma tag HTML, avança até encontrar o fechamento da tag
            var tagEndIndex = descricaoText.indexOf('>', j);
            descricaoElement.innerHTML += descricaoText.slice(j, tagEndIndex + 1);
            j = tagEndIndex + 1;
        } else {
            descricaoElement.innerHTML += descricaoText.charAt(j);
            j++;
        }
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


