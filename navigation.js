const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const invisibleAfterLogIn = document.querySelectorAll('.logged-out-invisible');


firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
    auth.onAuthStateChanged(function(user) {

        if(user){
            //toggle UI elements
    
            console.log('logged in');
    
            loggedInLinks.forEach(item => item.style.display = 'block');
            loggedOutLinks.forEach(item => item.style.display = 'block');
            invisibleAfterLogIn.forEach(item => item.style.display = 'none');
        } else{
            //toggle UI elements
    
            console.log('logged out');
    
            loggedInLinks.forEach(item => item.style.display = 'none');
            loggedOutLinks.forEach(item => item.style.display = 'block');
            invisibleAfterLogIn.forEach(item => item.style.display = 'block');
        }
    });
});


function buycheck () {
    auth.onAuthStateChanged(function(user){
        if(user){
            window.location = 'price.html';
        }
        else 
        {
            window.alert('You need to Login first to buy');
        }
    })
};