//1. display number/operators inside  input box when we click on it
function display(num){
    result.value += num
}

//2. to clear all values inside text box
function clearAll(){
    result.valvr=""
}

//3. expression evaluation
function output(){
    result.value=eval(result.valve)
}

//4. removelast
function removeLast(){
    result.value = (result.value).slice(0,-1)
}