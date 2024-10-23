const observe = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
});



const hiddenElemet = document.querySelectorAll('.hidden');
hiddenElemet.forEach(el=>observe.observe(el));