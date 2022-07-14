window.addEventListener('load', () => {
    dates = JSON.parse(localStorage.getItem('todos')) || [];
    const newDateForm = document.querySelector('new-date-form')

    newDateForm.addEventListener('submit', e => {
        e.preventDefault();
        const date = {
        content: e.target.elements.content.value,
        done: false}

        dates.push(todo);

        localStorage.setItem('todos', JSON.stringify(dates));
        e.target.reset();
        
        DisplayDates();

    })

})