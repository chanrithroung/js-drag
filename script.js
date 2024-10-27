const imgs = document.querySelectorAll('.img');
const remove = document.getElementById('remove');

let count = 0;

imgs.forEach(e=> e.addEventListener('click',() => {
  if(e.classList.contains('remove')) {
    e.classList.remove('remove')
    count--;
    remove.innerHTML = `Remove ${count} items`;
  } else {
    e.classList.add('remove');
    count++;
    remove.innerHTML = `Remove ${count} items`;
  }
}))







remove.onclick = ()=> {
  const removeItems = document.querySelectorAll('.remove');
  removeItems.forEach(e=>e.classList.add('animation'))
  setTimeout( ()=> {
    removeItems.forEach(e=>e.remove());
    count = 0;
    remove.innerHTML = `Remove ${count} items`;
  }, 1000);
}