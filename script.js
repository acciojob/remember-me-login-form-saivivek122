let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submitButton = document.getElementById("submit");
let existingUserButton = document.getElementById("existing");


let userObj = JSON.parse(localStorage.getItem("user")) || [];

if (userObj.length > 0) {
    existingUserButton.style.display = "block"
}

function userLogin() {
    if (username.value === "" || password.value == "") {
        console.log("enter both fields")
        return
    }
    if (checkbox.checked) {
        let obj = {
            userName: username.value,
            password: password.value
        }
        userObj.push(obj);
        localStorage.setItem("user", JSON.stringify(userObj))
        username.value = ""
        password.value = ""
    }
    else if(!checkbox.checked) {
        alert(`Logged in as ${username.value}`);
        username.value="";
        password.value="";
    }


    console.log(checkbox.checked)
}

function existingUser(){
    alert(`Logged in as saved ${userObj[userObj.length-1].userName}`)
}
submitButton.addEventListener("click", userLogin)
existingUserButton.addEventListener("click",existingUser)