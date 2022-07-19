window.addEventListener('load', () => {
    dates = JSON.parse(localStorage.getItem('dates')) || [];
    const newDateForm = document.querySelector('#new-date-form');

newDateForm.addEventListener('submit', e => {
    e.preventDefault();

    const date = {
        event: e.target.elements.event.value,
        month: e.target.elements.month.value,
        day: e.target.elements.day.value,
        fname: e.target.elements.fname.value,
        lname: e.target.elements.lname.value,
    
        createdAt:new Date().getTime()
    }


    dates.push(date);

        localStorage.setItem('dates', JSON.stringify(dates));
        e.target.reset();
        
       // DisplayDates();

    })
})
    
     function DisplayDates() {
        const datesList = document.querySelector('date_list');
    
        datesList.innerHTML = '';

        dates.forEach(dates => {
            const dateItem = document.createElement('div');
            dateItem.classList.add('date_list')

            const event = document.createElement('event');
            const month = document.createElement('month');
            const day = document.createElement('day');
            const fname = document.createElement('fname');
            const lname = document.createElement('lname');
           
        })} 

