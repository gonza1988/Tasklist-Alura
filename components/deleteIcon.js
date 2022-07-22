import { displayTasks } from './readTasks.js';

const deleteIcon = (id) => {
  //backticks(comillas invertidas) Creamos abajo un "template-strings que pueden combinar etiquetas HTML con propiedades o valores JavaScript"
    /*const content = ` 
<i class="fas fa-trash-alt trashIcon icon"></i>` */
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector('[data-list]');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const index = tasks.findIndex((item) => item.id === id);
  console.log(index);
  tasks.splice(index, 1);
  li.innerHTML = '';
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
};

export default deleteIcon;
