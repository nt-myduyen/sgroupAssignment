let hiddenBar = document.getElementById("hidden-bar");
let headerBox = document.getElementById("header-box");
let count = 0;
let x = window.matchMedia("(max-width: 1200px)");

// Resize screen 
function reszieScreen(x){
    if(x.matches){
        headerBox.style.transform = "translate(-260px)";
        hiddenBar.style.display = "block";
    }
    else{
        headerBox.style.transform = "translate(0px)";
        hiddenBar.style.display = "none";        
    }
}
reszieScreen(x);
x.addEventListener("change", reszieScreen);

hiddenBar.addEventListener("click", function(e){
    count ++;
    if(count % 2 != 0){
        headerBox.style.transform = "translateX(0)";
        headerBox.style.zIndex = "100";
        hiddenBar.style.transform = "translateX(260px)";
        hiddenBar.innerHTML = "X";
    }
    else{
        headerBox.style.transform = "translateX(-260px)";
        hiddenBar.style.transform = "translateX(0px)";
        hiddenBar.innerHTML = '<div class="fa fa-bars">' + '</div>';        
    }

})

// JS choose each page
let homeButton = document.getElementById("home-button"); 
let aboutButton = document.getElementById("about-button");
let resumeButton = document.getElementById("resume-button");
let portfolioButton = document.getElementById("portfolio-button");
let blogButton = document.getElementById("blog-button");
let contactButton = document.getElementById("contact-button");

let homePage = document.getElementById("home-page");
let aboutPage = document.getElementById("about-page");
let resumePage = document.getElementById("resume-page");
let portfolioPage = document.getElementById("portfolio-page");
let blogPage = document.getElementById("blog-page");
let contactPage = document.getElementById("contact-page");

// Default of the screen when open CV
homeButton.style.backgroundColor = "#0f7bff";
homePage.style.display = "block";

homeButton.addEventListener("click", function(){
    homeButton.style.backgroundColor = "#0f7bff";
    aboutButton.style.backgroundColor = "#191d2b";
    resumeButton.style.backgroundColor = "#191d2b";
    portfolioButton.style.backgroundColor = "#191d2b";
    blogButton.style.backgroundColor = "#191d2b";
    contactButton.style.backgroundColor = "#191d2b";

    homePage.style.display = "block";
    aboutPage.style.display = "none";
    resumePage.style.display = "none";
    portfolioPage.style.display = "none";
    blogPage.style.display = "none";
    contactPage.style.display = "none";

})
aboutButton.addEventListener("click", function(){
    homeButton.style.backgroundColor = "#191d2b";
    aboutButton.style.backgroundColor = "#0f7bff";
    resumeButton.style.backgroundColor = "#191d2b";
    portfolioButton.style.backgroundColor = "#191d2b";
    blogButton.style.backgroundColor = "#191d2b";
    contactButton.style.backgroundColor = "#191d2b";

    homePage.style.display = "none";
    aboutPage.style.display = "block";
    resumePage.style.display = "none";
    portfolioPage.style.display = "none";
    blogPage.style.display = "none";
    contactPage.style.display = "none";
})
resumeButton.addEventListener("click", function(){
    homeButton.style.backgroundColor = "#191d2b";
    aboutButton.style.backgroundColor = "#191d2b";
    resumeButton.style.backgroundColor = "#0f7bff";
    portfolioButton.style.backgroundColor = "#191d2b";
    blogButton.style.backgroundColor = "#191d2b";
    contactButton.style.backgroundColor = "#191d2b";

    homePage.style.display = "none";
    aboutPage.style.display = "none";
    resumePage.style.display = "block";
    portfolioPage.style.display = "none";
    blogPage.style.display = "none";
    contactPage.style.display = "none";
})
portfolioButton.addEventListener("click", function(){
    homeButton.style.backgroundColor = "#191d2b";
    aboutButton.style.backgroundColor = "#191d2b";
    resumeButton.style.backgroundColor = "#191d2b";
    portfolioButton.style.backgroundColor = "#0f7bff";
    blogButton.style.backgroundColor = "#191d2b";
    contactButton.style.backgroundColor = "#191d2b";

    homePage.style.display = "none";
    aboutPage.style.display = "none";
    resumePage.style.display = "none";
    portfolioPage.style.display = "block";
    blogPage.style.display = "none";
    contactPage.style.display = "none";
})
blogButton.addEventListener("click", function(){
    homeButton.style.backgroundColor = "#191d2b";
    aboutButton.style.backgroundColor = "#191d2b";
    resumeButton.style.backgroundColor = "#191d2b";
    portfolioButton.style.backgroundColor = "#191d2b";
    blogButton.style.backgroundColor = "#0f7bff";
    contactButton.style.backgroundColor = "#191d2b";

    homePage.style.display = "none";
    aboutPage.style.display = "none";
    resumePage.style.display = "none";
    portfolioPage.style.display = "none";
    blogPage.style.display = "block";
    contactPage.style.display = "none";
})
contactButton.addEventListener("click", function(){
    homeButton.style.backgroundColor = "#191d2b";
    aboutButton.style.backgroundColor = "#191d2b";
    resumeButton.style.backgroundColor = "#191d2b";
    portfolioButton.style.backgroundColor = "#191d2b";
    blogButton.style.backgroundColor = "#191d2b";
    contactButton.style.backgroundColor = "#0f7bff";

    homePage.style.display = "none";
    aboutPage.style.display = "none";
    resumePage.style.display = "none";
    portfolioPage.style.display = "none";
    blogPage.style.display = "none";
    contactPage.style.display = "block";
})
