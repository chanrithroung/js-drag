const box = document.querySelector('.box');

const container = document.querySelector('.container')

box.addEventListener('click', ()=> {
    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    content.setAttribute('draggable', 'true');
    container.appendChild(content);


    content.ondrag = (e) => {
        content.style.left = e.clientX - container.offsetLeft - 100 + 'px';
        content.style.top = e.clientY - container.offsetTop - 30 + 'px';

    }

    
});


  