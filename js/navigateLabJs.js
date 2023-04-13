// Funcion para navegar hacia los diferentes Modulos de ejercicios
var Contador = 0 
var NavigateModule = document.querySelector(".slider-screen")

function Moduleselected(){
    if (Contador == 0){
        console.log('Uno')
        document.location.assign("../JavaScript/LaboratorioJs/labModule1.html")
    } 
    else if ( Contador == 1 ){
        console.log('Dos')
        document.location.assign("../JavaScript/LaboratorioJs/labModule2.html")
    }
    else if(Contador == 2 ){
        console.log('Tres')
        document.location.assign("../JavaScript/LaboratorioJs/labModule3.html")
    }
}

NavigateModule.addEventListener("click",Moduleselected)