//Forget Password
const forgetForm = document.querySelector('#forget-form')
forgetForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = forgetForm['forget_email'].value;

    if(email != "")
    {
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent!
            // ..
            window.alert("Email has been sent, please check your inbox.");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
    
            console.log(errorCode);
            console.log(errorMessage);
    
            window.alert("Message: " + errorMessage);
    
        });

        forgetForm.reset();
    }
    else
    {
        window.alert("Enter your email id first");
    }

});
