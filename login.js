let Username = document.getElementById('username');
let Password = document.getElementById('password');

function LoginApi()
{
    fetch('https://dummyjson.com/auth/login', 
    {
        method: 'POST',
        headers: {'Content-Type': 'application.json'},
        body: JSON.stringify({
            username: Username.value,
            password: Password.value,
            
        })
    })
    .then(res=>res.json(),
   
    )   
}