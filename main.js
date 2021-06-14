const cookieContainer = document.querySelector('.cookie-container');
const cookieButton = document.querySelector('.cookieBtn');

cookieButton.addEventListener("click", function(){
 
    cookieContainer.classList.remove("active");
    localStorage.setItem("CookieBannerDisplayed","true");

});


setTimeout(() => {
    if(!localStorage.getItem("CookieBannerDisplayed")){
        cookieContainer.classList.add("active");   
    }
    

}, 2000);


