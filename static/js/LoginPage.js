document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Demo credentials
    const validUsername = "suresh";
    const validPassword = "suresh";

    if (username === validUsername && password === validPassword) {
        window.location.href = "/home/";
    } else {
        alert("Invalid Username or Password");
    }
}); 

