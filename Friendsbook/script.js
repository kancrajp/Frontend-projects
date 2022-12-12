/* code for settings menu */

var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("theme-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("theme-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}   

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("theme-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("theme-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}