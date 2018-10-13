function create(){
    document.getElementById('score').innerHTML = localStorage["username.score"];
    let scores = Object
        .keys(localStorage)
        .sort(function(b, a) {
            return localStorage[a] - localStorage[b];
        });
    let max =5;
    for (let i=0; i<max && i<localStorage.length ;i++) {
        if(scores[i]!=="username" && scores[i]!=="username.score" && scores[i]!==undefined){
            let tbody = document.getElementById('tbody');
            let row = document.createElement("TR");
            tbody.appendChild(row);

            let td1 = document.createElement("TD");
            let td2 = document.createElement("TD");

            row.appendChild(td1);
            row.appendChild(td2);
            td1.innerHTML = scores[i];
            td2.innerHTML = localStorage[scores[i]];
        }
        else{
            max++;
        }
    }
}
function goHome()
{
    window.location = "index.html";
}
create();