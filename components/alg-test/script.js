//




var array = document.getElementsByTagName("div");
var button = document.getElementById("button");
var newArr = toArray(document.querySelectorAll('.elem'));
console.log(newArr);

function toArray(obj) {
    return [].slice.call(obj)
};

if ([].indexOf) {
    var find = function(array, value) {
        return array.indexOf(value);
    }
} else {
    var find = function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) return i;
        }

        return -1;
    }

}

for (var i = 0; i < array.length; i++) {
    var arrayItem = array[i];
    array[i].onclick = function() {
        if (newArr.length < 4) {


            newArr.push(this);
            this.classList.add('elem');
        } else {
            for (var z = 0; z < array.length; z++) {
                array[z].classList.remove("elem");
                console.log(array[z]);
            };


            newArr.shift();
            newArr.push(this);
            for (var a = 0; a < newArr.length; a++) {
                newArr[a].classList.add("elem");
            };
        };
        for (var a = 0; a < newArr.length; a++) {
            if (arrayItem !== newArr[a]) {

            };
        };

        console.log(newArr);

    }
}