const list = document.querySelector ("#list");
let sorry;
function start(){
    sorry = setInterval(function(){
        list.innerHTML += `<li>SORRY 😭😭 </li>`
    },
    900)
}
function stop(){
    clearInterval(sorry)
}