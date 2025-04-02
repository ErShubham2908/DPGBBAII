let heading = document.getElementsByTagName('h1');
const btn = document.getElementsByTagName('button');

console.log(btn);
// btn[0].addEventListener('click' , () => {
//     heading[0].style.color = "red"
    
// })

// btn[1].addEventListener('click' , () => {
//     heading[0].style.color = "blue"
    
// })

// btn[2].addEventListener('click' , () => {
//     heading[0].style.color = "orange"
    
// })

heading[1].addEventListener('mouseover', () =>{
    heading[0].style.color ="red"
})

heading[1].addEventListener('mouseout', () =>{
    heading[0].style.color ="orange"
})