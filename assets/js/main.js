
// Getting user form submission state from the local storage
let localSubmit = localStorage.getItem('userSubmit')
let userSubmit = localSubmit;

// adding event listener to show popup modal when user scrolled 200px from top
window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    console.log(scrolled)
    if(scrolled == 200 && userSubmit === null){
        // alert("Hey, Hello World")
        document.querySelector('.popup').classList.add('active');
    }

})

// Close button to close the popup
document.querySelector(".popup .close-btn").addEventListener('click', function(){
    document.querySelector('.popup').classList.remove('active');
    
})

// Reset the form
document.querySelector('.form').addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Submited");
    const name = document.querySelector('#name').value;
    console.log(name);
    
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#tel').value;
    /* userSubmit = true
    console.log(userSubmit) */
    // Save user form submit state to local storage
    localStorage.setItem('userSubmit', true);
    // Save User Info to Local Storage
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('phone', phone)

})