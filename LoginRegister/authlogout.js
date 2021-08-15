//logout
const logout = document.getElementById('logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location='index.html';
        console.log('user signed out');
     });
});
