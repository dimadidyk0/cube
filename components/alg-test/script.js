//




var array = document.getElementsByTagName("div");
var button = document.getElementById("button");

var newArr = [];

// function something() {
//     for (var i = 0; i < array.length; i++) {
//         newArr.push(array[i]);
//         array[i].onclick = function() {
//             console.log(array[i].innerHTML);
//         }
//     }
// }
// something();
document.querySelector("div").onclick = function() {
    console.log("s");
}
for (var i = 0; i < array.length; i++) {
    array[i].classList.add("elem-" + (i + 1));
}

// array[0].onclick = function() {
//     console.log("ass");
// }

// button.addEventListener("click", something);