const password = document.getElementById('password')
const rePassword = document.getElementById('re-password')


// Confirm two iterations of password to be the same

rePassword.addEventListener('input', ()=>{
    if (password.value !== rePassword.value){
        rePassword.setCustomValidity('Please reenter your password.')
    }
    else{
        rePassword.setCustomValidity('')
    }
})
