const topLink = document.querySelector(".top-link");
// fixed navbar

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    }
    else {
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link");

    } else {
        topLink.classList.remove("show-link");
    }
});

//smooth  scroll

const scrollLinks = document.querySelectorAll(".scroll-link");


scrollLinks.forEach(function (link) {
    
link.addEventListener("click", function (e) {
    //prevent default
    e.preventDefault();
    //navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
  
    if(!fixedNav){
        position = position - navHeight;
    }

    if(navHeight > 82){
        position = position + containerHeight;
    }

    window.scrollTo({
        left:0,
        top: position,
    });
    linksContainer.style.height = 0;
});
});