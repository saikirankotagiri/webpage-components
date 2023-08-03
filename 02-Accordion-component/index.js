const toggleIcon = document.querySelectorAll('.icon');
const hiddenBox = document.querySelectorAll('.hidden-box');

toggleIcon.forEach(item => { 
    item.addEventListener('click', (event) => {
        item.nextElementSibling.classList.toggle('hide');
    });
})
