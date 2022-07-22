import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento) => { //exporto la función para que pueda ser usada por el script.js
  evento.preventDefault(); //prevengo que cuando se haga click en el boton, se refresque la página automáticamente

  const list = document.querySelector('[data-list]');  //creamos una constante para el elemento padre de "li" que es su contenedor y asi poder agregarlo al html
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');

  const value = input.value; //guardo el valor de lo escrito por teclado
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY'); //le doy formato a como quiero mostrar la fecha(mediante la libreria format anexada en el script de la pagina index)

  if (value === '' || date === '') {
    return;
  }

  input.value = '';
  calendar.value = '';

  const complete = false;

  const taskObj = {
    value,
    dateFormat,
    complete,
    id: uuid.v4(),
  };

  list.innerHTML = '';

  const taskList = JSON.parse(localStorage.getItem('tasks')) || []; //aviso que si no hay objetos en localStorage, cree un arreglo vacío.
  taskList.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(taskList)); //convierto el traskObj a formate JSON porque la funcion de sessionStorage solo acepta formato String para trabajar

  displayTasks();
};

//Arrow functions o funciones de flecha(misma función que abajo pero hecha Arrow)
export const createTask = ({ value, dateFormat, complete, id }) => { //Desestructuramos los elementos que queremos(value y dateFormat del objeto taskObj)
  const task = document.createElement('li'); //creamos un elemento li en el index
  task.classList.add('card'); //le creamos una clase a la constante "task" para que lo capte el css y le de los estilos necesarios

  const taskContent = document.createElement('div');

  const check = checkComplete(id);

  if (complete) {
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
  }
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);

  task.appendChild(taskContent);
  task.appendChild(deleteIcon(id));
  return task;
};

/*
btn.addEventListener("click", function(evento) { //creo un escuchador para cuando se haga click en el boton,realice la funcion
    evento.preventDefault();//prevengo que cuando se haga click en el boton, se refresque la página automáticamente
    const input = document.querySelector('[data-form-input]');
    console.log(input.value); //imprimimos el valor de lo escrito por teclado
});
*/