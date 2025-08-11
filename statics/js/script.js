const bar = document.getElementById("bar");
const close = document.querySelector(".close");

const nav = document.getElementById("navbar");

bar.addEventListener("click", () => {
        nav.classList.add('active');
    })

close.addEventListener("click", () => {
        nav.classList.remove('active');
    })


// sproduct js 

const mainimg = document.getElementById("main-img");
const smallimg = document.getElementsByClassName("small-img");


    smallimg[0].addEventListener("click", () => 
    mainimg.src=smallimg[0].src
   )

   smallimg[1].addEventListener("click", () => 
   mainimg.src=smallimg[1].src
  )

  smallimg[2].addEventListener("click", () => 
  mainimg.src=smallimg[2].src
 )

 smallimg[3].addEventListener("click", () => 
 mainimg.src=smallimg[3].src
)

