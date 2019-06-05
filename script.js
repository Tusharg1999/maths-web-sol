// console.dir(document)
// console.log(document.all)
// console.log(document.all[27])
//get element by id/class name
// let items =document.getElementsByClassName("sidebar")
// console.log(items[0].hasChildNodes("leftsidebar"))
//traversing :parent,child,sibilings
// let item=document.querySelector('#leftsidebar')//or document.getelementbyclassname("leftsidebar")
//create element using dom
// item.parentElement.style.border="1px solid "
/// let newtext =document.createElement('h1')
// newtext.textContent="hi hello"
//event object
let button=document.getElementById("clickbutton").addEventListener("click",function(e){
    e.preventDefault();
    console.log(e)
})