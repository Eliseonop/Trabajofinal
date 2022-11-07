const footer = document.querySelector('footer')
const form = document.querySelector('form')


form.addEventListener('submit', e => {
  e.preventDefault()
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  footer.innerHTML = `
        <p>Nombre: ${data.nombre}</p>
        <p>Apellido: ${data.apellido}</p>
        <p>Edad: ${data.edad}</p>
        <p>Correo: ${data.mail}</p>
        <p>Telefono: ${data.telefono}</p>
    `
})
