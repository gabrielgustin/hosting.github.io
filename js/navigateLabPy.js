
// Funcion para navegar hacia los diferentes Modulos de ejercicios
var Contador = 0 
var NavigateModule = document.querySelector(".slider-screen")

function Moduleselected(){
    if (Contador == 0){
        console.log('Uno')
        document.location.assign("../Python/LaboratorioPy/labModule1.html")
    } 
    else if ( Contador == 1 ){
        console.log('Dos')
        document.location.assign("../Python/LaboratorioPy/labModule1.html")
    }
    else if(Contador == 2 ){
        console.log('Tres')
        document.location.assign("../Python/LaboratorioPy/labModule3.html")
    }
}

NavigateModule.addEventListener("click",Moduleselected)