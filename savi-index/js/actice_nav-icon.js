function myFunction(x) {

    const myNav = document.getElementById("myNav");
    x.classList.toggle("active");
    if(x.classList[1] === "active"){
        myNav.classList.toggle("change");
        console.log(myNav.classList);
    }else{
        myNav.classList.remove("change");
        console.log(myNav.classList);
    }
}