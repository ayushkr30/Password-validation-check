// show password toggler

let showPasswordBtn = document.querySelector('.show-password');
let passwordInp = document.querySelector('.password-input');
let passwordChecklist = document.querySelectorAll('.list-item');


showPasswordBtn.addEventListener('click', ()=> {
    //toggle icon
    showPasswordBtn.classList.toggle('fa-eye');
    showPasswordBtn.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type == 'password' ? 'text': 'password' ; 


})

let validateRegex = [
    { regex: /.{8,}/ },
    { regex: /[0-9]/ },
    { regex: /[a-z]/ },
    { regex: /[A-Z]/ },
    { regex: /[^A-Za-z0-9]/}
]

passwordInp.addEventListener('keyup', ()=>{
    validateRegex.forEach(item, i) => {

        let isValid = item.regex.test(passwordInp.value)

        if(isValid) {
           passwordChecklist[i].classList.add('checked');
        }
        else
        {
            passwordChecklist[i].classList.remove('checked');
            
        }
    }
})
