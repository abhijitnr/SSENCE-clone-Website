let mail = JSON.parse(localStorage.getItem("email"));
let currentEmail = JSON.parse(localStorage.getItem("currentEmail"));
document.querySelector("#email").value = currentEmail;
document.querySelector("#email").readOnly = true;
let flag = false;

document.querySelector("form").addEventListener("submit", valData);
function valData() {
    event.preventDefault();
    let pass = document.querySelector("#password").value;
    for (let i = 0; i < mail.length; i++) {
        if (currentEmail === mail[i].email && pass === mail[i].pass) {
            flag = true;
            break;
            //got the the homepage with the account logged in already, 
            // will add the same once the homepage is linked with all the pages
        }
    }
    if (flag) alert("Sign In success!");
    else {
        alert("Please enter the correct user id and password");
        document.querySelector("#password").value = "";
    }
}
// javascript functionalaty

// EventListener for menswear
document.querySelector("#mens").addEventListener("click", mensFunction);
function mensFunction(){
    window.location.href = "../menswear/menswear.html";
}

// EventListener for womenswear
document.querySelector("#womens").addEventListener("click", womensFunction);
function womensFunction(){
    window.location.href = "../womenswear/womenswear.html"
}

// EventListener for everythingelse
document.querySelector("#else").addEventListener("click", elseFunction);
function elseFunction(){
    window.location.href = "../everythingelse/every.html";
}

// EventListener for wishlists
document.querySelector("#wish").addEventListener("click", wishFunction);
function wishFunction(){
    window.location.href = "https://course.masaischool.com/"
}

// EventListener for search button
document.querySelector("#search").addEventListener("click", searchFunction);
function searchFunction(){
    window.location.href = "https://course.masaischool.com/"
}

// EventListener for accountLogo
document.querySelector("#accountLogo").addEventListener("click", accountFunction);
function accountFunction(){
    window.location.href = "https://course.masaischool.com/"
}

// EventListener for shopping bag
document.querySelector("#shoppingLogo").addEventListener("click", shoppingFunction);
function shoppingFunction(){
    window.location.href = "../cartPage/bag.html";
}


// EventListener for brand logo
document.querySelector("#brandLogo").addEventListener("click", brandLogoFunction);
function brandLogoFunction(){
    window.location.href = "../homePage/index.html"
}

let previewDataFromLs = JSON.parse(localStorage.getItem("bagdata"))
document.querySelector("#countShow").innerText = "("+previewDataFromLs.length+")";