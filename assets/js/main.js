window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    console.log(scrolled)
    if(scrolled == 200){
        // alert("Hey, Hello World")
        document.querySelector('.popup').classList.add('active');
    }

})

/* document.querySelector("#show-login").addEventListener('click', function(){
    document.querySelector('.popup').classList.add('.active');
    
}) */
document.querySelector(".popup .close-btn").addEventListener('click', function(){
    document.querySelector('.popup').classList.remove('active');
    
})



// Reset the form
document.querySelector('.form-element .submit-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log("Submited");
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#tel').value = "";
})