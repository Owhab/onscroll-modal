window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    console.log(scrolled)
    if(scrolled == 200){
        alert("Hey, Hello World")
    }

})