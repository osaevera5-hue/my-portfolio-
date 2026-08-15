/* ==========================================
   PRELOADER
========================================== */
 window.addEventListener("DOMContentLoaded",()=>{

    const loader=document.getElementById("preloader");


    setTimeout(()=>{

        loader.style.opacity="0";


        setTimeout(()=>{

            loader.style.display="none";

        },500);


    },300);


});


/* ==========================================
   MOBILE MENU
========================================== */


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuBtn.innerHTML = navLinks.classList.contains("active")

        ? '<i class="fa-solid fa-xmark"></i>'

        : '<i class="fa-solid fa-bars"></i>';

    });

}



/* CLOSE MENU WHEN CLICKING LINK */

document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


        if(menuBtn){

            menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        }


    });


});




/* ==========================================
   STICKY NAVBAR
========================================== */


window.addEventListener("scroll",()=>{


    const navbar=document.querySelector(".navbar");


    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }


});





/* ==========================================
   TYPING EFFECT
========================================== */


const typingElement=document.getElementById("typing");


if(typingElement){


const words=[

    "Full Stack Developer",

    "Web Designer",

    "Graphic Designer",

    "Digital Creator"

];


let wordIndex=0;

let charIndex=0;

let deleting=false;



function typeEffect(){


    let currentWord=words[wordIndex];


    if(!deleting){


        typingElement.textContent =
        currentWord.substring(0,charIndex++);


        if(charIndex > currentWord.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }


    }


    else{


        typingElement.textContent =
        currentWord.substring(0,charIndex--);


        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex=0;

            }

        }


    }



    setTimeout(typeEffect,100);


}


typeEffect();


}






/* ==========================================
   DARK MODE
========================================== */


const themeToggle=document.getElementById("themeToggle");


if(themeToggle){


themeToggle.addEventListener("click",()=>{


    document.body.classList.toggle("dark");


    const icon =
    themeToggle.querySelector("i");


    if(document.body.classList.contains("dark")){


        icon.className="fa-solid fa-sun";


    }


    else{


        icon.className="fa-solid fa-moon";


    }



});


}


/* ==========================================
   PORTFOLIO FILTER
========================================== */


const filterButtons =
document.querySelectorAll(".portfolio-filter button");


const projects =
document.querySelectorAll(".portfolio-card");



filterButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });


        button.classList.add("active");



        let filter =
        button.getAttribute("data-filter");



        projects.forEach(project=>{


            if(filter==="all" || project.classList.contains(filter)){


                project.style.display="block";


            }


            else{


                project.style.display="none";


            }


        });



    });



});


/* ==========================================
   SCROLL REVEAL
========================================== */


const revealElements =
document.querySelectorAll(

".skill-card, .service-card, .portfolio-card, .testimonial-card, .timeline-item"

);



function reveal(){


revealElements.forEach(element=>{


    let position =
    element.getBoundingClientRect().top;


    let screen =
    window.innerHeight - 100;



    if(position < screen){


        element.classList.add("fade-up");


        setTimeout(()=>{

            element.classList.add("show");

        },100);


    }


});


}



window.addEventListener("scroll",reveal);


reveal();