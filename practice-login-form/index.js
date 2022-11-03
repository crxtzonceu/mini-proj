const formLogin = document.getElementById('form-login')

formLogin.addEventListener('submit', function(event){
  event.preventDefault()

  const formData = new FormData(formLogin)
  const email = formData.get('email')
  const password = formData.get('password')
  console.log(`Email: ${email}`)
  console.log(`Password: ${password}`)
})