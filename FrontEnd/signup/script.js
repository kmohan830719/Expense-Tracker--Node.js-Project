const btn=document.getElementById('btn');
btn.addEventListener("click", (e)=>{
    e.preventDefault();

    const userName=document.getElementById('userName').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    const obj={
        UserName:userName,
        Email:email,
        password:password
    }

    axios.post("http://localhost:4000/user/signup",obj)
    .then((response)=>{
        console.log(response);
    }).catch((err)=>{
        console.log(err);
    })
})