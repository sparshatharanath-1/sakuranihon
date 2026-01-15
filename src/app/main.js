function showGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Ohayō Gozaimasu 🌅 (Good Morning)";
    } else if (hour < 18) {
        greeting = "Konnichiwa ☀️ (Good Afternoon)";
    } else {
        greeting = "Konbanwa 🌙 (Good Evening)";
    }

    document.getElementById("greeting").innerText = greeting;
}

function showMessage() {
    alert("🌸 Welcome to Sakura Nihon! Discover Japanese culture with us.");
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const result = document.getElementById("result");

    if (email === "" || !email.includes("@")) {
        result.style.color = "red";
        result.innerText = "Please enter a valid email address.";
    } else {
        result.style.color = "green";
        result.innerText = "Thank you! We will contact you soon 🌸";
    }
}
