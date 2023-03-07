let emailLogin
let passLogin
let logError
let logBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMEvents = () => {
    logBtn.addEventListener('click', loginEvent)
}

const prepareDOMElements = () => {
    emailLogin = document.querySelector('.email-login');
    passLogin = document.querySelector('.password-login');
    logError = document.querySelector('.login-error');
    logBtn = document.querySelector('.btn-login');

}




const loginEvent = () => {
    const userID = emailLogin.value
    if (emailLogin.value !== '' && passLogin.value !== '') {

        if (localStorage.getItem(userID)) {
            let loginInfo = JSON.parse(localStorage.getItem(userID));

            if (userID === loginInfo.email && passLogin.value === loginInfo.password) {
                logError.textContent = "Logged"
                logError.style.color = 'lime'

                const page = () => {
                    location.href = 'panel.html'
                }
                setTimeout(page, 2000);

            } else {
                logError.textContent = "password is not correct"
                logError.style.color = 'red'
            }




        } else {
            logError.textContent = "This account doesnt exist"
            logError.style.color = 'red'
        }




    } else {
        logError.style.color = 'red'
        logError.textContent = 'Enter values'
    }




}




document.addEventListener('DOMContentLoaded', main)