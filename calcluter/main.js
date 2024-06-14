let input = document.getElementById("inp");

function insert(num) {
    input.value += num;

}

function Clear() {
    input.value = " ";
}

function delet() {
    input.value = input.value.slice(0, -1)
}

function equle() {
    try {
        input.value = eval(input.value);
    } catch (err) {
        input.value = "ERROR";
    }
}