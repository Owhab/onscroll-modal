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