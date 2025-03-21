function login(){
    const users = [
        {username: "admin", password: "admin123" , role: "admin"},
        {username: "student", password: "stud123" , role: "student"}
    ];

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg").value;

    let user = users.find(u => u.username === username && u.password === password);
    if(user){
        localStorage.setItem("username",user.username);
        localStorage.setItem("role",user.role);

        window.location.href = "dashboard.html";
    }else{
        errorMsg.textContent = "Name user or password is incorect!"
    }
}