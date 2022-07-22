const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => completeTask(event, id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target; //accedemos al cuadrado del checkbox con la propiedad target
  element.classList.toggle('fas'); //le damos la clase que crea un cuadrado vacío(toggle es como "add" y "remove" a la vez.verifica que este en alguna de las dos
  //opciones y la cambia a la otra)
  element.classList.toggle('completeIcon'); //le damos la clase que da el color azul en los estilos css
  element.classList.toggle('far');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const index = tasks.findIndex((item) => item.id === id);
  tasks[index]['complete'] = !tasks[index]['complete']; //primero accedo al elemento index y luego a su propiedad "complete" para modificarla
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default checkComplete;
