// DOM preguntas

const preg1 = document.querySelector("#preg1");
const preg2 = document.querySelector("#preg2");
const preg3 = document.querySelector("#preg3");
const preg4 = document.querySelector("#preg4");
const preg5 = document.querySelector("#preg5");

function cargaPreg1 () {
    opcionesCalif.forEach(opcion =>{
        preg1.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg2 () {
    opcionesModos.forEach(opcion =>{
        preg2.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg3 () {
    opcionesSiNo.forEach(opcion =>{
        preg3.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg4 () {
    opcionesCalif.forEach(opcion =>{
        preg4.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg5 () {
    opcionesCalif.forEach(opcion =>{
        preg5.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

cargaPreg1()
cargaPreg2()
cargaPreg3()
cargaPreg4()
cargaPreg5()


// Crear el objeto Registro donde se van a almacenar las respuestas

class Registro {
    constructor (id, edad, correo, linea, estOn, estOff, hora, motivo, rta1, rta2, rta3, rta4, rta5, rta6, rta7, rta8, rta9, rta10, rta11) {
    this.id = id;
    this.edad = edad;
    this.correo = correo;
    this.linea = linea;
    this.estOn = estOn;
    this.estOff = estOff;
    this.hora = hora;
    this.motivo = motivo;
    this.rta1 = rta1;
    this.rta2 = rta2;
    this.rta3 = rta3;
    this.rta4 = rta4;
    this.rta5 = rta5;
    this.rta6 = rta6;
    this.rta7 = rta7;
    this.rta8 = rta8;
    this.rta9 = rta9;
    this.rta10 = rta10;
    this.rta11 = rta11;
    }
}

// Autocompletado ID:

idEncuestado.value = parseInt(Math.random() * 10000);


// Función llenarEncuesta para probar el simulador.

const llenarEncuesta = () => {
    edadEncuestado.value = 20;
    correoEncuestado.value = "encuesta@subte.com";
    linea.value = "B";
    estOn.value = "Rosas";
    estOff.value = "Florida";
    horaViaje.value = "8";
    motivoViaje.value = "T";
    preg1.value = 1; 
    preg2.value = 1;
    preg3.value = 2;
    preg4.value = 2;
    preg5.value = 1;
    preg6.value = 2;
    preg7.value = "Av. Rivadavia" ;
    preg8.value = "Av. Carabobo";
    preg9.value = "Flores";
    preg10.value = "CABA";
    preg11.value = "CABA"
}


//  Guardar respuestas en Local Storage a través del botón "Enviar Respuestas"

const datosCompletos = () => {
    if (correoEncuestado.value !== "" && linea.value !== "..." && estOn.value !== "" && estOff.value !== "" && horaViaje.value !== "" && motivoViaje !== "..." && preg1.value !== "..." && preg2.value !== "..." && preg3.value !== "..." && preg4.value !== "..." && preg5.value !== "..." && preg6.value !== "" && preg7.value !== "" && preg8.value !== "" && preg9.value !== "" && preg10.value !== "" && preg11.value !== ""){
            return true
        } else {
            return false
        }
}

// El array contendrá el contenido anterior del localStorage para ir acumulando las respuestas.

let arrayRtas = JSON.parse(localStorage.getItem("guardarEncuesta"));

const guardarEncuesta = () => {
    if (datosCompletos()) {

    //  Crear objeto usando la estructura de Registro, con los datos ingresados por el usuario

    const nuevaEncuesta = new Registro (idEncuestado.value, edadEncuestado.value, correoEncuestado.value, linea.value, estOn.value, estOff.value, horaViaje.value, motivoViaje.value, preg1.value, preg2.value, preg3.value, preg4.value, preg5.value, preg6.value, preg7.value, preg8.value, preg9.value, preg10.value, preg11.value);

    arrayRtas.push(nuevaEncuesta);

    let arrayRtasJSON = JSON.stringify(arrayRtas);

    localStorage.setItem ("guardarEncuesta", arrayRtasJSON);
    
    Swal.fire({
        icon: 'info',
        title: 'Respuestas enviadas',
        text: 'Gracias por participar!',
        footer: 'El formulario se va a reiniciar.'
    })

    setTimeout (() => {
        borrarDatos()},3000)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Faltan datos',
            text: 'Por favor, completá todos los campos.',
        })
    }
} 

const borrarDatos = () => {
    idEncuestado.value = parseInt(Math.random() * 10000)
    edadEncuestado.value = 16;
    correoEncuestado.value = "";
    linea.value = "";
    estOn.value = "";
    estOff.value = "";
    horaViaje.value = "";
    motivoViaje.value = "";
    preg1.value = ""; 
    preg2.value = "";
    preg3.value = "";
    preg4.value = "";
    preg5.value = "";
    preg6.value = "";
    preg7.value = "" ;
    preg8.value = "";
    preg9.value = "";
    preg10.value = "";
    preg11.value = ""
}

const botonA = document.querySelector(".btn-rtas");

botonA.addEventListener ("click", (guardarEncuesta));


// Limpiar formulario

const reiniciarEncuesta = ()=> {
    Swal.fire({
        title: 'Se borrarán las respuestas.',
        text: "Estás segur@ de que querés reiniciar?",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar.',
        confirmButtonColor: '#008f39',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, reiniciar.'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            location.reload(),
          )
        }
    })
}

const botonC = document.querySelector(".btn-reiniciar");

botonC.addEventListener ("click", (reiniciarEncuesta));


// Mostrar encuestas almacenadas

const botonB = document.querySelector(".btn-resumen");

botonB.addEventListener ("click", (mostrarRespuestas));

const botonOcultar = document.querySelector(".botonOcultar");

function mostrarRespuestas () {
    const resumen = JSON.parse(localStorage.getItem("guardarEncuesta")); 
    const tablaRespuestasHTML = document.querySelector(".tablaRespuestas");
    tablaRespuestasHTML.innerHTML = ``
    resumen.forEach(rta => {
    tablaRespuestasHTML.innerHTML += `<tr>
                                <th class= "table lineasTabla">${rta.id}</th>
                                <td class= "table lineasTabla">${rta.edad}</td>
                                <td class= "table lineasTabla">${rta.correo}</td>
                                <td class= "table lineasTabla">${rta.linea}</td>
                                <td class= "table lineasTabla">${rta.estOn}</td>
                                <td class= "table lineasTabla">${rta.estOff}</td>
                                <td class= "table lineasTabla">${rta.hora}</td>
                                <td class= "table lineasTabla">${rta.motivo}</td>
                                <td class= "table lineasTabla">${rta.rta1}</td>
                                <td class= "table lineasTabla">${rta.rta2}</td>
                                <td class= "table lineasTabla">${rta.rta3}</td>
                                <td class= "table lineasTabla">${rta.rta4}</td>
                                <td class= "table lineasTabla">${rta.rta5}</td>
                                <td class= "table lineasTabla">${rta.rta6}</td>
                                <td class= "table lineasTabla">${rta.rta7}</td>
                                <td class= "table lineasTabla">${rta.rta8}</td>
                                <td class= "table lineasTabla">${rta.rta9}</td>
                                <td class= "table lineasTabla">${rta.rta10}</td>
                                <td class= "table lineasTabla">${rta.rta11}</td>
                            </tr>`
    });
}
