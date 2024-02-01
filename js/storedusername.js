var storedUsername = localStorage.getItem("user");

    if (storedUsername) {
        document.getElementById("retruser").innerHTML = "Welcome, " + storedUsername + "!";
    }