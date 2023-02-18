import './style.css'
import emailjs from '@emailjs/browser'

const form = document.querySelector('form') as HTMLFormElement
form.onsubmit = function onsubmit(event) {
  event.preventDefault();
  emailjs.init('j7GD8ngSQKSwvFQtN')
  emailjs.sendForm('service_wkmy30j', 'template_c3r96xv', form)
  form.reset()
  alert('Email sent!')
}

