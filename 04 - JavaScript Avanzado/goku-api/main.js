import axios from 'axios'

const todosLosPersonajes = async () => {
  const all = await fetch('https://dragon-ball-super-api.herokuapp.com/api/characters')
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => console.log(error))
    .finally(() => console.log('Finalizado'))

  console.log(all)
}

todosLosPersonajes()

const selectPersonajes = document.querySelector('#personajes')
// la respuesta del axios es un objeto con la propiedad data
const todosLosPersonajesAxios = async () => {
  axios.get('https://dragon-ball-super-api.herokuapp.com/api/characters')
    .then((res) => {
      res.data.forEach((personaje) => {
        const option = document.createElement('option')
        option.value = personaje.name
        option.textContent = personaje.name
        selectPersonajes.appendChild(option)
      })
    })
}

todosLosPersonajesAxios()

const tarjeta = document.querySelector('#loader')
const img = document.querySelector('#tarjeta_personaje img')
const h2tarjeta = document.querySelector('#tarjeta_personaje h2')
const ptarjeta = document.querySelector('#tarjeta_personaje p')

selectPersonajes.addEventListener('change', (e) => {
  tarjeta.innerHTML = '<span class="loader"></span'
  img.src = 'silueta.png'
  const name = e.target.value
  axios.get(`https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`)
    .then((res) => {
      if (res.data.name === 'Son Goku') {
        img.src = 'goku.webp'
      } else {
        img.src = res.data.imageUrl
      }
      h2tarjeta.innerHTML = `<h2>${res.data.name}</h2>`
      ptarjeta.innerHTML = `
        <p>Descripción: <span>${res.data.role}</span></p>
        <p>Estado: <span>${res.data.status}</span></p>
        <p>Planeta: <span>${res.data.originplanet}</span></p>
        <p>Especie: <span>${res.data.specie}</span></p>
        <p>Transformación: <span>${res.data.transform || '-'}</span></p>
      `
    })
    .finally(() => { tarjeta.innerHTML = null })
})
