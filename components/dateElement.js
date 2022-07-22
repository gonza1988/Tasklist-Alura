export default (date) => { //exporta directamente la función
  const dateElement = document.createElement('li');
  dateElement.classList.add('date');
  dateElement.innerHTML = date;
  return dateElement;
};
