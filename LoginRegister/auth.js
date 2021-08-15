//signup
const singupForm = document.querySelector('#signup-form')
singupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = singupForm['email_field'].value;
    const password = singupForm['password_field'].value;

    // console.log(email, password);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            auth.onAuthStateChanged(function(user) {
                if(user) {
                    //user is signed in
                    console.log('logged in');
                    window.location = '../index.html';
                    //window.location = 'loggedin.html';
                    //get data
                    // db.collection('guides').get().then(snapshot => {
                    // //console.log(snapshot.docs);
                    // setupUI(user);
                    // });
                }
                else {
                    //user is signed out
                    console.log('not logged in');
                    window.location = 'index.html';
                    // setupUI(user);
                }
            });
        })
        .catch(function(error){
            //handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            
            window.alert("Error: " + errorMessage);
        });
    });
});


//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
        auth.signInWithEmailAndPassword(email, password).then(cred => {
                auth.onAuthStateChanged(function(user) {
                    if(user) {
                        //user is signed in
                        console.log('logged in');
                        window.location = '../index.html';
                        //window.location = 'loggedin.html';
                        //get data
                            // db.collection('guides').get().then(snapshot => {
                            // //console.log(snapshot.docs);
                            // //setupUI(user);
                            // });
                    }
                    else {
                        //user is signed out
                        console.log('not logged in');
                        window.location = 'index.html';
                        //setupUI(user);
                    }
                });
            })
            .catch(function(error){
                //handle errors here
                var errorCode = error.code;
                var errorMessage = error.message;
                
                window.alert("Error: " + errorMessage);
            });
    });
});




