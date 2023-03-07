let emailRegister
let passRegister
let regError
let regBtn
let logRegBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMEvents = () => {
    regBtn.addEventListener('click', registerEvent)
    logRegBtn.addEventListener('click', goToLogin)
}

const prepareDOMElements = () => {
    emailRegister = document.querySelector('.email-register');
    passRegister = document.querySelector('.password-register');
    regError = document.querySelector('.register-error');
    regBtn = document.querySelector('.btn-register');
    logRegBtn = document.querySelector('.btn-register-login');
}




const registerEvent = () => {
    if (emailRegister.value !== '' && passRegister.value !== '') {
        regError.textContent = ''
        const userID = emailRegister.value




        if (localStorage.getItem(`${userID}`)) {
            regError.style.color = 'red'
            regError.textContent = 'This account already exist!'
        } else {

            class RegisterId {
                constructor(email, password) {
                    this.email = email
                    this.password = password
                }
            }

            const registerId = new RegisterId(emailRegister.value, passRegister.value)

            localStorage.setItem(`${emailRegister.value}`, JSON.stringify(registerId));

            regError.textContent = 'Account was created!'
            regError.style.color = 'lime'

            const page = () => {
                document.location.href = 'login.html'
            }
            setTimeout(page, 2000);
        }








    } else {
        regError.style.color = 'red'
        regError.textContent = 'Enter values'
    }
}

const goToLogin = () => {
    window.location.href = 'login.html';
}







document.addEventListener('DOMContentLoaded', main)