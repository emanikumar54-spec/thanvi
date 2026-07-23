function checkPassword() {
    const pass = document.getElementById("pass").value;

    if (pass === "2311") {
        document.getElementById("loading").style.display = "none";
        document.getElementById("main").style.display = "block";
    } else {
        alert("❌ Wrong Password");
    }
}

function nextSection() {
    document.getElementById("home").style.display = "none";
    document.getElementById("letter").style.display = "flex";
}

function showFinal() {
    document.getElementById("letter").style.display = "none";
    document.getElementById("final").style.display = "flex";
}

function fireworks() {
    alert("🎉 Happy Birthday Thanvi ❤️\n\nI Love You Forever ❤️");
}