const usuariosBD = [
  {
    nombre: "Carlos Chávez",
    cuenta: 1,
    password: "1234",
    saldo: 1000,
    log: []
  },
  {
    nombre: "Juan Pérez",
    cuenta: 2,
    password: "1234",
    saldo: 1000,
    log: [
      {
        fecha: new Date(),
        monto: 100,
        type: "deposito"
      }
    ]
  }
]


const formLogin = document.querySelector('#login');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  const { userId, pinUser } = Object.fromEntries(new FormData(e.target));

  if (typeof pinUser === String || pinUser === '') {
    return;
  }

  for (const usuario of usuariosBD) {
    if (usuario.cuenta === Number(userId) && usuario.password === pinUser) {
      localStorage.setItem('user', JSON.stringify(usuario));
      window.location.href = '/atm/index.html';
    }
  }

})


