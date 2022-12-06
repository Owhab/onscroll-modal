
// Getting user form submission state from the browser local storage
let localSubmit = localStorage.getItem('userSubmit')
let userSubmit = localSubmit;

// adding event listener to show popup modal when user scrolled 195 to 200px from top and user didn't submit the form before
window.addEventListener('scroll', function(){
    const scrolled = window.scrollY;
    // console.log(scrolled)
    if(scrolled == 195 && userSubmit === null){
        document.querySelector('.popup').classList.add('active');
    }
    if(scrolled == 200 && userSubmit === null){
        document.querySelector('.popup').classList.add('active');
    }
    if(scrolled == 210 && userSubmit === null){
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
    const name = document.querySelector('#name').value;

    
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#tel').value;
    //  userSubmit = true

    // Save user form submit state to local storage
    localStorage.setItem('userSubmit', true);
    // Save User Info to Local Storage
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('phone', phone)

})


// Name Input Validation
function nameValidation(){
    var name = document.getElementById('name').value;
    var namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(namePattern.test(name)){
        document.getElementById('name').style.backgroundColor = '#E8F0FE'
    }
    else{
        document.getElementById('name').style.backgroundColor = '#FF9E9E'
    }
}


// Phone Number Input Validation
function phoneValidation(){
    var phone = document.getElementById('tel').value;
    var mobileNumberPattern = /^[0-9]{11}$/;
    if(mobileNumberPattern.test(phone)){
        document.getElementById('tel').style.backgroundColor = '#E8F0FE'
    }
    else{
        document.getElementById('tel').style.backgroundColor = '#FF9E9E'
    }
}