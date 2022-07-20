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
        
        //DisplayDates();

    })
})
    
   /*   function DisplayDates() {
        const datesList = document.querySelector('#date_list');
    
        datesList.innerHTML = '';

        dates.forEach(date => {
            const dateItem = document.createElement('div');
            dateItem.classList.add('date_item')

            const label = document.createElement('label');
            const event = document.createElement('event');
            const month = document.createElement('month');
            const day = document.createElement('day');
            const fname = document.createElement('fname');
            const lname = document.createElement('lname');
            const actions = document.createElement('div');
            const deleteButton = document.createElement('button');
            

            event.classList.add('event');
            month.classList.add('month');
            day.classList.add('day');
            fname.classList.add('fname');
            lname.classList.add('lname');
            actions.classList.add('actions');
            deleteButton.classList.add('delete');

            event.innerHTML= `<input type="text" value="${date.event}" readonly>`;
            month.innerHTML= `<input type="text" value="${date.month}" readonly>`;
            day.innerHTML= `<input type="text" value="${date.day}" readonly>`;
            fname.innerHTML= `<input type="text" value="${date.fname}" readonly>`;
            lname.innerHTML= `<input type="text" value="${date.lname}" readonly>`;

            deleteButton.innerHTML = 'delete';

            actions.appendChild(deleteButton);
            dateItem.appendChild(label);
            dateItem.appendChild(event);
            dateItem.appendChild(month);
            dateItem.appendChild(day);
            dateItem.appendChild(fname);
            dateItem.appendChild(lname);
            dateItem.appendChild(actions);

            datesList.appendChild(dateItem);


            deleteButton.addEventListener('click', e => {
                dates = dates.filter(t => t != date);
                localStorage.setItem('date', JSON.stringify(dates));
                DisplayDates();
            })

           

           
        })}  */
        function january() {
            const janList = document.querySelector('#date_list');
            const janButton = document.createElement('button');
            janList.innerHTML = '';

            janButton.addEventListener('click', e => {
                dates = dates.filter(January == January);
                localStorage.setItem('date', JSON.stringify(dates));
                DisplayDates();})
    
            dates.forEach(date => {
                const janItem = document.createElement('div');
                janItem.classList.add('date_item')
    
                const label = document.createElement('label');
                const event = document.createElement('event');
                const month = document.createElement('month');
                const day = document.createElement('day');
                const fname = document.createElement('fname');
                const lname = document.createElement('lname');
                const actions = document.createElement('div');
                const deleteButton = document.createElement('button');
                
    
                event.classList.add('event');
                month.classList.add('month');
                day.classList.add('day');
                fname.classList.add('fname');
                lname.classList.add('lname');
                actions.classList.add('actions');
                deleteButton.classList.add('delete');
    
                event.innerHTML= `<input type="text" value="${date.event}" readonly>`;
                month.innerHTML= `<input type="text" value="${date.month}" readonly>`;
                day.innerHTML= `<input type="text" value="${date.day}" readonly>`;
                fname.innerHTML= `<input type="text" value="${date.fname}" readonly>`;
                lname.innerHTML= `<input type="text" value="${date.lname}" readonly>`;
    
                deleteButton.innerHTML = 'delete';
    
                actions.appendChild(deleteButton);
                janItem.appendChild(label);
                janItem.appendChild(event);
                janItem.appendChild(month);
                janItem.appendChild(day);
                janItem.appendChild(fname);
                janItem.appendChild(lname);
                janItem.appendChild(actions);
    
                janList.appendChild(janItem);
    
    
                deleteButton.addEventListener('click', e => {
                    dates = dates.filter(t => t != date);
                    localStorage.setItem('date', JSON.stringify(dates));
                    january();
                })
    
               /*  deleteButton.addEventListener('click', e => {
                    todos = todos.filter(t => t != todo);
                    localStorage.setItem('todo', JSON.stringify(todos));
                    DisplayTodos();
                }) */
    
               
            })} 
