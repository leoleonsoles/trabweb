const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listadeTarea = document.getElementById('lista-de-tareas');

function agregarTarea(){
    if(input.value){
        // Crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
        
        // Texto ingresado
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        // Crear iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        // Iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click',completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click',eleminarTarea);

        iconos.append(completar, eliminar);  // Se corrigió el método aquí
        
        // Agregar tarea a la lista
        listadeTarea.appendChild(tareaNueva);

    } 
}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}


function eleminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();

}

boton.addEventListener('click', agregarTarea);

//AGREGAR TAREA CON ENTER

input.addEventListener('keydown',(e)=>{
    if (e.key === 'Enter') {
        agregarTarea();


    }
});