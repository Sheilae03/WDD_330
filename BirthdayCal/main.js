window.addEventListener('load', () => {
    dates = JSON.parse(localStorage.getItem('dates')) || [];
    const newDateForm = document.querySelector('#new-date-form');

newDateForm.addEventListener('submit', e => {
    e.preventDefault();

     date = {
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
        
        DisplayDates();

    })
})
    
      function DisplayDates() {
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

           

           
        })}  
        window.addEventListener('load', () => {
            months = JSON.parse(localStorage.getItem('dates')) || [];
             document.getElementById('month').value; 
        })

        function january() {
         
            const jan = document.querySelector('#date_list');

            jan.innerHTML = '';

           

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

            event.innerHTML= `<input type="text" value="${jan.event}" readonly>`;
            month.innerHTML= `<input type="text" value="${jan.month}" readonly>`;
            day.innerHTML= `<input type="text" value="${jan.day}" readonly>`;
            fname.innerHTML= `<input type="text" value="${jan.fname}" readonly>`;
            lname.innerHTML= `<input type="text" value="${jan.lname}" readonly>`;

            deleteButton.innerHTML = 'delete';

            actions.appendChild(deleteButton);
            janItem.appendChild(label);
            janItem.appendChild(event);
            janItem.appendChild(month);
            janItem.appendChild(day);
            janItem.appendChild(fname);
            janItem.appendChild(lname);
            janItem.appendChild(actions);

            jan.appendChild(janItem);


            deleteButton.addEventListener('click', e => {
                dates = dates.filter(t => t != date);
                localStorage.setItem('date', JSON.stringify(dates));
                january();
            } )
            }

            function february() {
         
                const feb = document.querySelector('#date_list');
    
                feb.innerHTML = '';
    
               
    
                const febItem = document.createElement('div');
                febItem.classList.add('date_item')
    
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
    
                event.innerHTML= `<input type="text" value="${feb.event}" readonly>`;
                month.innerHTML= `<input type="text" value="${feb.month}" readonly>`;
                day.innerHTML= `<input type="text" value="${feb.day}" readonly>`;
                fname.innerHTML= `<input type="text" value="${feb.fname}" readonly>`;
                lname.innerHTML= `<input type="text" value="${feb.lname}" readonly>`;
    
                deleteButton.innerHTML = 'delete';
    
                actions.appendChild(deleteButton);
                febItem.appendChild(label);
                febItem.appendChild(event);
                febItem.appendChild(month);
                febItem.appendChild(day);
                febItem.appendChild(fname);
                febItem.appendChild(lname);
                febItem.appendChild(actions);
    
                feb.appendChild(febItem);
    
    
                deleteButton.addEventListener('click', e => {
                    dates = dates.filter(t => t != date);
                    localStorage.setItem('date', JSON.stringify(dates));
                    february();
                } )
                }

                function march() {
         
                    const mar = document.querySelector('#date_list');
        
                    mar.innerHTML = '';
        
                   
        
                    const marItem = document.createElement('div');
                    marItem.classList.add('date_item')
        
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
        
                    event.innerHTML= `<input type="text" value="${mar.event}" readonly>`;
                    month.innerHTML= `<input type="text" value="${mar.month}" readonly>`;
                    day.innerHTML= `<input type="text" value="${mar.day}" readonly>`;
                    fname.innerHTML= `<input type="text" value="${mar.fname}" readonly>`;
                    lname.innerHTML= `<input type="text" value="${mar.lname}" readonly>`;
        
                    deleteButton.innerHTML = 'delete';
        
                    actions.appendChild(deleteButton);
                    marItem.appendChild(label);
                    marItem.appendChild(event);
                    marItem.appendChild(month);
                    marItem.appendChild(day);
                    marItem.appendChild(fname);
                    marItem.appendChild(lname);
                    marItem.appendChild(actions);
        
                    mar.appendChild(marItem);
        
        
                    deleteButton.addEventListener('click', e => {
                        dates = dates.filter(t => t != date);
                        localStorage.setItem('date', JSON.stringify(dates));
                        march();
                    } )
                    }
                    function april() {
         
                        const apr = document.querySelector('#date_list');
            
                        apr.innerHTML = '';
            
                       
            
                        const aprItem = document.createElement('div');
                        aprItem.classList.add('date_item')
            
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
            
                        event.innerHTML= `<input type="text" value="${apr.event}" readonly>`;
                        month.innerHTML= `<input type="text" value="${apr.month}" readonly>`;
                        day.innerHTML= `<input type="text" value="${apr.day}" readonly>`;
                        fname.innerHTML= `<input type="text" value="${apr.fname}" readonly>`;
                        lname.innerHTML= `<input type="text" value="${apr.lname}" readonly>`;
            
                        deleteButton.innerHTML = 'delete';
            
                        actions.appendChild(deleteButton);
                        aprItem.appendChild(label);
                        aprItem.appendChild(event);
                        aprItem.appendChild(month);
                        aprItem.appendChild(day);
                        aprItem.appendChild(fname);
                        aprItem.appendChild(lname);
                        aprItem.appendChild(actions);
            
                        apr.appendChild(aprItem);
            
            
                        deleteButton.addEventListener('click', e => {
                            dates = dates.filter(t => t != date);
                            localStorage.setItem('date', JSON.stringify(dates));
                            april();
                        } )
                        }
                        function may() {
         
                            const may = document.querySelector('#date_list');
                
                            may.innerHTML = '';
                
                           
                
                            const mayItem = document.createElement('div');
                            mayItem.classList.add('date_item')
                
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
                
                            event.innerHTML= `<input type="text" value="${may.event}" readonly>`;
                            month.innerHTML= `<input type="text" value="${may.month}" readonly>`;
                            day.innerHTML= `<input type="text" value="${may.day}" readonly>`;
                            fname.innerHTML= `<input type="text" value="${may.fname}" readonly>`;
                            lname.innerHTML= `<input type="text" value="${may.lname}" readonly>`;
                
                            deleteButton.innerHTML = 'delete';
                
                            actions.appendChild(deleteButton);
                            mayItem.appendChild(label);
                            mayItem.appendChild(event);
                            mayItem.appendChild(month);
                            mayItem.appendChild(day);
                            mayItem.appendChild(fname);
                            mayItem.appendChild(lname);
                            mayItem.appendChild(actions);
                
                            may.appendChild(mayItem);
                
                
                            deleteButton.addEventListener('click', e => {
                                dates = dates.filter(t => t != date);
                                localStorage.setItem('date', JSON.stringify(dates));
                                may();
                            } )
                            }
                            function june() {
         
                                const jun = document.querySelector('#date_list');
                    
                                jun.innerHTML = '';
                    
                               
                    
                                const junItem = document.createElement('div');
                                junItem.classList.add('date_item')
                    
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
                    
                                event.innerHTML= `<input type="text" value="${jun.event}" readonly>`;
                                month.innerHTML= `<input type="text" value="${jun.month}" readonly>`;
                                day.innerHTML= `<input type="text" value="${jun.day}" readonly>`;
                                fname.innerHTML= `<input type="text" value="${jun.fname}" readonly>`;
                                lname.innerHTML= `<input type="text" value="${jun.lname}" readonly>`;
                    
                                deleteButton.innerHTML = 'delete';
                    
                                actions.appendChild(deleteButton);
                                junItem.appendChild(label);
                                junItem.appendChild(event);
                                junItem.appendChild(month);
                                junItem.appendChild(day);
                                junItem.appendChild(fname);
                                junItem.appendChild(lname);
                                junItem.appendChild(actions);
                    
                                jun.appendChild(junItem);
                    
                    
                                deleteButton.addEventListener('click', e => {
                                    dates = dates.filter(t => t != date);
                                    localStorage.setItem('date', JSON.stringify(dates));
                                    june();
                                } )
                                }
                                function july() {
         
                                    const jul = document.querySelector('#date_list');
                        
                                    jul.innerHTML = '';
                        
                                   
                        
                                    const julItem = document.createElement('div');
                                    julItem.classList.add('date_item')
                        
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
                        
                                    event.innerHTML= `<input type="text" value="${jul.event}" readonly>`;
                                    month.innerHTML= `<input type="text" value="${jul.month}" readonly>`;
                                    day.innerHTML= `<input type="text" value="${jul.day}" readonly>`;
                                    fname.innerHTML= `<input type="text" value="${jul.fname}" readonly>`;
                                    lname.innerHTML= `<input type="text" value="${jul.lname}" readonly>`;
                        
                                    deleteButton.innerHTML = 'delete';
                        
                                    actions.appendChild(deleteButton);
                                    julItem.appendChild(label);
                                    julItem.appendChild(event);
                                    julItem.appendChild(month);
                                    julItem.appendChild(day);
                                    julItem.appendChild(fname);
                                    julItem.appendChild(lname);
                                    julItem.appendChild(actions);
                        
                                    jul.appendChild(julItem);
                        
                        
                                    deleteButton.addEventListener('click', e => {
                                        dates = dates.filter(t => t != date);
                                        localStorage.setItem('date', JSON.stringify(dates));
                                        july();
                                    } )
                                    }
                                    function august() {
         
                                        const aug = document.querySelector('#date_list');
                            
                                        aug.innerHTML = '';
                            
                                       
                            
                                        const augItem = document.createElement('div');
                                        augItem.classList.add('date_item')
                            
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
                            
                                        event.innerHTML= `<input type="text" value="${aug.event}" readonly>`;
                                        month.innerHTML= `<input type="text" value="${aug.month}" readonly>`;
                                        day.innerHTML= `<input type="text" value="${aug.day}" readonly>`;
                                        fname.innerHTML= `<input type="text" value="${aug.fname}" readonly>`;
                                        lname.innerHTML= `<input type="text" value="${aug.lname}" readonly>`;
                            
                                        deleteButton.innerHTML = 'delete';
                            
                                        actions.appendChild(deleteButton);
                                        augItem.appendChild(label);
                                        augItem.appendChild(event);
                                        augItem.appendChild(month);
                                        augItem.appendChild(day);
                                        augItem.appendChild(fname);
                                        augItem.appendChild(lname);
                                        augItem.appendChild(actions);
                            
                                        aug.appendChild(augItem);
                            
                            
                                        deleteButton.addEventListener('click', e => {
                                            dates = dates.filter(t => t != date);
                                            localStorage.setItem('date', JSON.stringify(dates));
                                            august();
                                        } )
                                        }
                                        function september() {
         
                                            const sep = document.querySelector('#date_list');
                                
                                            sep.innerHTML = '';
                                
                                           
                                
                                            const sepItem = document.createElement('div');
                                            sepItem.classList.add('date_item')
                                
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
                                
                                            event.innerHTML= `<input type="text" value="${sep.event}" readonly>`;
                                            month.innerHTML= `<input type="text" value="${sep.month}" readonly>`;
                                            day.innerHTML= `<input type="text" value="${sep.day}" readonly>`;
                                            fname.innerHTML= `<input type="text" value="${sep.fname}" readonly>`;
                                            lname.innerHTML= `<input type="text" value="${sep.lname}" readonly>`;
                                
                                            deleteButton.innerHTML = 'delete';
                                
                                            actions.appendChild(deleteButton);
                                            sepItem.appendChild(label);
                                            sepItem.appendChild(event);
                                            sepItem.appendChild(month);
                                            sepItem.appendChild(day);
                                            sepItem.appendChild(fname);
                                            sepItem.appendChild(lname);
                                            sepItem.appendChild(actions);
                                
                                            sep.appendChild(sepItem);
                                
                                
                                            deleteButton.addEventListener('click', e => {
                                                dates = dates.filter(t => t != date);
                                                localStorage.setItem('date', JSON.stringify(dates));
                                                september();
                                            } )
                                            }
                                             function october() {
         
                                                const oct = document.querySelector('#date_list');
                                    
                                                oct.innerHTML = '';
                                    
                                               
                                    
                                                const octItem = document.createElement('div');
                                                octItem.classList.add('date_item')
                                    
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
                                    
                                                event.innerHTML= `<input type="text" value="${oct.event}" readonly>`;
                                                month.innerHTML= `<input type="text" value="${oct.month}" readonly>`;
                                                day.innerHTML= `<input type="text" value="${oct.day}" readonly>`;
                                                fname.innerHTML= `<input type="text" value="${oct.fname}" readonly>`;
                                                lname.innerHTML= `<input type="text" value="${oct.lname}" readonly>`;
                                    
                                                deleteButton.innerHTML = 'delete';
                                    
                                                actions.appendChild(deleteButton);
                                                octItem.appendChild(label);
                                                octItem.appendChild(event);
                                                octItem.appendChild(month);
                                                octItem.appendChild(day);
                                                octItem.appendChild(fname);
                                                octItem.appendChild(lname);
                                                octItem.appendChild(actions);
                                    
                                                oct.appendChild(octItem);
                                    
                                    
                                                deleteButton.addEventListener('click', e => {
                                                    dates = dates.filter(t => t != date);
                                                    localStorage.setItem('date', JSON.stringify(dates));
                                                    october();
                                                } )
                                                }
                                                function november() {
         
                                                    const nov = document.querySelector('#date_list');
                                        
                                                    nov.innerHTML = '';
                                        
                                                   
                                        
                                                    const novItem = document.createElement('div');
                                                    novItem.classList.add('date_item')
                                        
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
                                        
                                                    event.innerHTML= `<input type="text" value="${nov.event}" readonly>`;
                                                    month.innerHTML= `<input type="text" value="${nov.month}" readonly>`;
                                                    day.innerHTML= `<input type="text" value="${nov.day}" readonly>`;
                                                    fname.innerHTML= `<input type="text" value="${nov.fname}" readonly>`;
                                                    lname.innerHTML= `<input type="text" value="${nov.lname}" readonly>`;
                                        
                                                    deleteButton.innerHTML = 'delete';
                                        
                                                    actions.appendChild(deleteButton);
                                                    novItem.appendChild(label);
                                                    novItem.appendChild(event);
                                                    novItem.appendChild(month);
                                                    novItem.appendChild(day);
                                                    novItem.appendChild(fname);
                                                    novItem.appendChild(lname);
                                                    novItem.appendChild(actions);
                                        
                                                    nov.appendChild(novItem);
                                        
                                        
                                                    deleteButton.addEventListener('click', e => {
                                                        dates = dates.filter(t => t != date);
                                                        localStorage.setItem('date', JSON.stringify(dates));
                                                        november();
                                                    } )
                                                    }
                                                    function december() {
         
                                                        const dec = document.querySelector('#date_list');
                                            
                                                        dec.innerHTML = '';
                                            
                                                       
                                            
                                                        const decItem = document.createElement('div');
                                                        decItem.classList.add('date_item')
                                            
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
                                            
                                                        event.innerHTML= `<input type="text" value="${dec.event}" readonly>`;
                                                        month.innerHTML= `<input type="text" value="${dec.month}" readonly>`;
                                                        day.innerHTML= `<input type="text" value="${dec.day}" readonly>`;
                                                        fname.innerHTML= `<input type="text" value="${dec.fname}" readonly>`;
                                                        lname.innerHTML= `<input type="text" value="${dec.lname}" readonly>`;
                                            
                                                        deleteButton.innerHTML = 'delete';
                                            
                                                        actions.appendChild(deleteButton);
                                                        decItem.appendChild(label);
                                                        decItem.appendChild(event);
                                                        decItem.appendChild(month);
                                                        decItem.appendChild(day);
                                                        decItem.appendChild(fname);
                                                        decItem.appendChild(lname);
                                                        decItem.appendChild(actions);
                                            
                                                        dec.appendChild(decItem);
                                            
                                            
                                                        deleteButton.addEventListener('click', e => {
                                                            dates = dates.filter(t => t != date);
                                                            localStorage.setItem('date', JSON.stringify(dates));
                                                            december();
                                                        } )
                                                        }
        
       