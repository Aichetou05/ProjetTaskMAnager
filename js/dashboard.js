document.addEventListener("DOMContentLoaded",function(){
    let role = localStorage.getItem("role");
    let adminSection = document.getElementById("admin-section");

    if(role === "admin"){
        adminSection.style.display = "block";
    }else{
        adminSection.style.display = "none";
    }
});