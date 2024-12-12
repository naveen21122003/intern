const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("loginState", true);
        window.location.href = "product_list.html";
    } else {
        alert("Invalid username or password");
    }
});
