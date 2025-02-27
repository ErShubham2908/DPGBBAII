let btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let uname = document.getElementById('uname');
    console.log(uname.value);
})