
// Inicio Funcion para menu desplegable
var listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});
// Fin Funcion para menu desplegable

// Inicio Funcion para Desplegar imagen
var imagenes = [
    "../../../images/problema.jpg",
    "../../../images/resolucion.jpg",
  ];
  var imagenElement = document.querySelector(".image__img");
  var imagenIndex = 0;
  
  function showProblem() {
    console.log("Show Problem");
    imagenElement.src = imagenes[imagenIndex];
  }
  
  document.querySelector(".click-problem-container").addEventListener("click", function() {
    imagenIndex = 0;
    showProblem();
  });
  
  function showAnswer() {
    console.log("Show Answer");
    imagenIndex = 1;
    imagenElement.src = imagenes[imagenIndex];
  }

  document.querySelector(".click-Answer-container").addEventListener("click", function() {
    showAnswer();
  });
// Fin Funcion para Desplegar imagen
