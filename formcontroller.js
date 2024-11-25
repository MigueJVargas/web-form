const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    let formData = {};

    for (let element of form.elements) {
        if (element.name) { 
            formData[element.name] = element.value; 
        }
    }
    const box = document.createElement('div')
    box.className = "box";
    box.textContent = JSON.stringify(formData, null, 2); 
    document.body.querySelector('main').appendChild(box);
});