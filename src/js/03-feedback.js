import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-msg';
const formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),

}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

// refs.form.addEventListener('input', e => {
//     formData[e.target.name] = e.target.value;
//     console.log(formData);
// });
populateTextarea();
function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
 
function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
 };



function populateTextarea() { 
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);
    if (parsedMessage) {
        refs.email.value = parsedMessage.email;
        refs.message.value = parsedMessage.message;
    }
};
