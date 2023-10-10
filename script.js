import deleteIcon from "./componentes/deleteCom.js";
import chekComplete from "./componentes/chekCom.js";
(()=>{

    //funcion principal
    const btn = document.querySelector('[data-form-btn]');

    const createtask = (evento) => {
        evento.preventDefault ();  //el preventDefault previene que todos los elementos de mi html se venga /en so es un evento controlado
        const input = document.querySelector('[data-form-input]');  
        console.log(input.value);                    
        const value=input.value;
        const list = document.querySelector('[data-List]');
        const task = document.createElement('li');
        task.classList.add('card');  //asigno los estilos de card de css
        input.value='';
        const taskContent = document.createElement('div');
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText= value;

                taskContent.appendChild(chekComplete());
                taskContent.appendChild (titleTask); //colocamos el span dentro del div



        const content = `
            <i class="fas fa-trash-alt trashIcon icon"></i>`//contiene el icono de basura
            
            task.appendChild(taskContent);
            task.appendChild(deleteIcon()); //introduzco el div dentro del li
            list.appendChild(task); //introdizco el li dentro del ul 
    
    // funcion principal
    };


    
    btn.addEventListener('click', createtask);  //addEven tiene dos parametros de entrada un click y un create task
    
    
})();

