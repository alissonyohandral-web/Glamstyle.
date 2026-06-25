
const slides = document.querySelectorAll(".carrusel_slide");

function mostrarSlide(indice){

    slides.forEach(slide => {
        slide.classList.remove("activo");
    });

    slides[indice].classList.add("activo");
}

function cambiarSlide(direccion){

    slideActual += direccion;

    if(slideActual >= slides.length){
        slideActual = 0;
    }

    if(slideActual < 0){
        slideActual = slides.length - 1;
    }

    mostrarSlide(slideActual);
}
let slideActual = 0;

const slides = document.querySelectorAll(".carrusel_slide");

function mostrarSlide(indice){
    slides.forEach(slide => {
        slide.classList.remove("activo");
    });

    slides[indice].classList.add("activo");
}

function cambiarSlide(direccion){
    slideActual += direccion;

    if(slideActual >= slides.length){
        slideActual = 0;
    }

    if(slideActual < 0){
        slideActual = slides.length - 1;
    }

    mostrarSlide(slideActual);
}

setInterval(() => {
    cambiarSlide(1);
}, 4000);
function mostrarFechaHora(){

    const fecha = new Date();

    document.getElementById("fechaHora").innerHTML =
        "Fecha y hora: " + fecha.toLocaleString();

}

mostrarFechaHora();

setInterval(mostrarFechaHora,1000);