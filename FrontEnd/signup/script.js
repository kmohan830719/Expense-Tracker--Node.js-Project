const btn=document.getElementById('btn');
btn.addEventListener("click", (e)=>{
    e.preventDefault();

    const userName=document.getElementById('userName').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    const obj={
        userName:userName,
        email:email,
        password:password
    }

    axios.post("http://localhost:4000/user/signup",obj)
    .then((response)=>{
        console.log(response);
    }).catch((err)=>{
        console.log(err.response.data);
        error(err.response.data);
    })
})

//showing the error
function error(errData){
    let ul=document.createElement('ul');
    ul.textContent=errData.error;
    ul.style.color='red';
    const container=document.getElementById('emailContainer');
    container.appendChild(ul);
}