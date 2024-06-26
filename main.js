//Función que busca los elementos de audio y reproduce el sonido asociado al elemento de audio con el ID proporcionado
function playSonido (idElementoAudio){ // Se inicia la funcion dando como parámetro idElementoAudio.
    document.querySelector(idElementoAudio).play(); // Se accede mediante el DOM mediante el método que le sucede. Se invoca a la función misma dentro si. Se busca el idElementoAudio.
} // Cierre de la función

const listaDeTeclas = document.querySelectorAll('.tecla'); // Se declara la constante ListaDeTeclas mediante el DOM con este método devuelve un objeto Nodelist que contiene todos los elementos que coinciden con el selector que se pasa como parámetro. Se da como párametro de búsqueda que los selectores tienen clases que incian con "tecla".

for(let contador = 0; contador < listaDeTeclas.length; contador++ ){ // Se inicia un ciclo en el que se declara la variable "contador" en ceros; La condición se cumple siempre que "contador" declarado previamente sea menor que el tamaño de ListaDeTeclas mediante el método .length; se suma 1 con cada iteración del ciclo.
    const tecla = listaDeTeclas[contador]; // Se declara la constante tecla que le asigna el valor del elemento en la posición contador dentro de la lista listaDeTeclas.
    const instrumento = tecla.classList[1]; // Se declara la variable "instrumento" el valor de la segunda clase (índice 1) del elemento tecla. 

    const idAudio = `#sonido_${instrumento}`; // Crea una cadena de texto que combina la subcadena #sonido_ con el valor de la variable instrumento. 
    tecla.onclick = function(){ // Empleando una función anónima se establece un evento de click en el elemento tecla para que se inicie la función
        playSonido(idAudio); // Se llama a la función playSonido dándole como párametro la cadena de texto que se almacena en la constante idAudio
    };
    tecla.onkeydown = function(evento){ // Al elemento se agrega un escuchador de eventos cuando se presiona una tecla del teclado, lo que inicializa la función anónima. También: "evento" en este contexto es un parámetro que representa el evento de teclado que está siendo manejado.
     
        if (evento.code === 'Space'|| evento.code === 'Enter' ){ // Se estabe lecque la condición que se debe cumpir es que "evento" mediante la propiedad "code" debe ser igual a "Space" o "Enter" mediante el operador boleano OR ||.
            tecla.classList.add('activa'); // Se le añade una clase al elmeneto tecla. Buscando en classList. Se usa el método add para añadir una clase específica al elemento en est caso tecla.
        }
    }

    tecla.onkeyup = function(){  // Al elemento se agrega un escuchador de eventos cuando la tecla se levante, lo que inicializa la función anónima
        tecla.classList.remove('activa'); // Se le añade una clase al elmeneto tecla. Buscando en classList. Se usa el método remove para remover una clase específica al elemento en est caso tecla.
    }
}

