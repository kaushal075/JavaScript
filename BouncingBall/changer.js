const buttons = document.querySelectorAll('.coloChanger');
    // console.log(buttons);
    const body = document.querySelector("body")

    buttons.forEach(function (button){
        // console.log(button);
        button.addEventListener('click',function(e){
            console.log(e);
            console.log(e.target);
            if(e.target.id === 'Blue'){
                body.style.backgroundColor = e.target.id  //we can also write here 'Blue' as color name..
            }
            if(e.target.id === 'Green'){
                body.style.backgroundColor = e.target.id  //we can also write here 'Green' as color name..
            }
            if(e.target.id === 'Red'){
                body.style.backgroundColor = e.target.id  //we can also write here 'Red' as color name..
            }
            if(e.target.id === 'Aqua'){
                body.style.backgroundColor = e.target.id  //we can also write here 'Aqua' as color name..
            }
        })
    });