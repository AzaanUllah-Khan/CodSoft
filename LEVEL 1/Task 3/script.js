var input = document.getElementById("result")
function calcAdd(val) {
    input.value += val.innerHTML;
}
function exe() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}
function sqrR() {
    input.value = Math.sqrt(input.value)
}
function clearAll() {
    input.value = ""
}
function oneWordDel(){
    input.value = input.value.toString().slice(0,-1)
}