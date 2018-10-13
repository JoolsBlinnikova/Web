function getName() {
    if(!document.getElementById('username').value)
        localStorage['username'] = 'NewPlayer';
    else
        localStorage['username'] = document.getElementById('username').value;
    window.location = "game.html"
}
function putName() {
    if(localStorage['username'])
        document.getElementById('username').value = localStorage['username'];
}