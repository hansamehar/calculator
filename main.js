// function to display content
function displaycontent(content){
    result.value+=content
}
function clearContent(){
    result.value =""
}
function calcOutput(){
    result.value=eval(result.value)
}
function backspace(){
    result.value = result.value.slice(0,-1)
}