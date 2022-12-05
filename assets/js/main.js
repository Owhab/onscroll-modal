

let localSubmit = localStorage.getItem('userSubmit')
console.log(localSubmit);

if(localSubmit == null){
    localSubmit = false
}

let userSubmit = localSubmit;
console.log(userSubmit);



window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    console.log(scrolled)
    if(scrolled == 200 && userSubmit === false){
        // alert("Hey, Hello World")
        document.querySelector('.popup').classList.add('active');
    }

})


document.querySelector(".popup .close-btn").addEventListener('click', function(){
    document.querySelector('.popup').classList.remove('active');
    
})


// Reset the form
document.querySelector('.form').addEventListener('submit', (e)=>{
    // e.preventDefault();
    console.log("Submited");
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#tel').value = "";
    /* userSubmit = true
    console.log(userSubmit) */

    localStorage.setItem('userSubmit', true);

})