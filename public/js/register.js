function register()
{
    let email = document.getElementById('inputEmail').value
    let password = document.getElementById('inputPassword').value

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location.href = "/acts.html"
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage, errorCode);
            // ..  
        });
}
