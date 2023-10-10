
const chekComplete = ()=>{
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completetask); ///llamamos a la otra funcion para que escuche y si valor sea chek o no modifica el estado
    return i;
}

const completetask = (evento2)=>{  //cambaimos el estado de lo que estaba check a no este check 
    const element = evento2.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');

}

export default chekComplete;