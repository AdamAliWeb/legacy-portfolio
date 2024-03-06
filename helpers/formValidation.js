export const formValidation = (form) => {
  // Regular Expressions
  let errors = {},
    regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    regexSubject = /^.{1,100}$/,
    regexMessage = /^[\s\S]{1,800}$/;

  // Form validations
  if (!regexName.test(form.name) && form.name) {
    errors.name = "The 'Name' field is not valid"
  }

  if (!regexEmail.test(form.email) && form.email) {
    errors.email = "The 'Email' field is not valid"
  }

  if (!regexSubject.test(form.subject) && form.subject) {
    errors.subject = "The 'Subject' field is not valid. It has to be less 100 characters"
  }

  if (!regexMessage.test(form.message) && form.message) {
    errors.message = "The 'Message' field is not valid. It has to be less 800 characters"
  }

  return errors
}