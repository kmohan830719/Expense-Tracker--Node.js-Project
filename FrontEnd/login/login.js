const btn=document.getElementById('btn');
btn.addEventListener("click", (e)=>{
    e.preventDefault();

    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    const obj={
        email:email,
        password:password
    }

    axios.post("http://localhost:4000/user/signup",obj)
    .then((response)=>{
        console.log(response);
    }).catch((err)=>{
        console.log(err.response.data);
        displayError(err.response.data.error);
    })
})

//showing the error
function displayError(errorMessage){
    const container = document.getElementById('errorContainer');
            
    // Clear previous error messages
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const errorDiv = document.createElement('div');
    errorDiv.textContent = errorMessage;
    errorDiv.style.color = 'red';
    container.appendChild(errorDiv);
}