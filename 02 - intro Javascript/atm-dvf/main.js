
const modal = document.querySelector('#modal');
const modalButton = document.querySelector('#modal span');
const modalBody = document.querySelector('#modal div');
const modalTitle = document.querySelector('#modal h5');
const backdrop = document.querySelector('#backdrop');

let user
addEventListener('DOMContentLoaded', () => {  
  user = JSON.parse(localStorage.getItem('user'));
  
  if (user === null || user === undefined) {
    window.location.href = '../index.html';
    return
  }

  const saludo = document.querySelector('#saludo_usuario')
  saludo.innerText = `Hola ${user.nombre}`;
})

let openModal = 'close'
const toogleModal = (estado, titulo, body) => {

  if (estado === 'open') {
    modal.classList.remove('active');
    backdrop.classList.remove('active');
    openModal = 'close';
  }
  
  if (estado === 'close') {
    modal.classList.add('active');
    backdrop.classList.add('active');
    openModal = 'open';
  }

  modalTitle.innerHTML = titulo;
  modalBody.innerHTML = body;
}
// MODAL DE RETIROS

modalButton.addEventListener('click', () => {
  toogleModal(openModal);
})

backdrop.addEventListener('click', () => {
  toogleModal(openModal);
})

// BOTON DE RETIROS
const retirosButton = document.querySelector('#retiros');

retirosButton.addEventListener('click', () => {

  const retiroInnerHTMLInput = `
    <form id="retiro" class="form-group">
      <p></p>
      <label for="retiro">Ingrese el monto que desea retirar</label>
      <input
        min="0"
        max="8000"
        type="number" 
        class="form-control" 
        name="retiro"
      >
      <button type="submit" class="btn btn-primary">Retirar</button>
      <strong id="retiro-message" role="alert"></strong>      
    </form>
  `

  
  toogleModal(
    openModal, 
    'Retiros',
    retiroInnerHTMLInput
    );
    
    const saldoDisponible = document.querySelector('#retiro p');
    saldoDisponible.innerText = `Saldo disponible: $ ${user.saldo}`;

    const retiro = document.querySelector('#retiro');
    const retiroMessage = document.querySelector('#retiro-message');
            
    retiro.addEventListener('submit', (e) => {
      e.preventDefault();
      const { retiro } = Object.fromEntries(new FormData(e.target));
            
      // validar que el saldo sea mayor al retiro
      if (Number(retiro) === 0 || retiro === '') {
        // mostrar mensaje de error
        retiroMessage.innerHTML = 'Ingrese un monto valido';

        // mostrar mensaje de error
        retiroMessage.classList.add('active', 'alert-info', 'alert');
        
        return;
      }
      
      // validar que el retiro no sea mayor al saldo
      if (Number(retiro) > Number(user.saldo)) {
        // mostrar mensaje de error
        retiroMessage.classList.add('active', 'alert-danger', 'alert');
        
        // mostrar mensaje de error
        retiroMessage.innerHTML = 'No tienes suficiente saldo';
        return;
      }

      
      retiroMessage.classList.add('active', 'alert-success', 'alert');

      // mostrar mensaje de exito
      retiroMessage.innerHTML = 'Retiro exitoso';

      // guardamos el log del retiro realizado
      user.log.push({ monto: retiro, fecha: new Date(), type: 'retiro' });

      // actualizamos el saldo
      user.saldo = Number(user.saldo) - Number(retiro);
      
      // limpiamos el formulario
      document.querySelector('#retiro input').value = '';
      saldoDisponible.innerText = `Saldo disponible: $ ${user.saldo}`;
      

    })
  
})

// BOTON DE DESPOSITOS
const depositosButton = document.querySelector('#depositos');

depositosButton.addEventListener('click', () => {

  const depositoInnerHTMLInput = `
    <form id="deposito" class="form-group">
      <label for="deposito">Ingrese el monto que desea depositar</label>
      <input
        min="0"
        type="number"
        class="form-control"
        name="deposito"   
      >      
      <button type="submit" class="btn btn-primary">Ingresar</button>
      <strong id="deposito-message" role="alert"></strong>
    </form>
  `

  toogleModal(
    openModal,
    'Depositos',
    depositoInnerHTMLInput
    )

    const deposito = document.querySelector('#deposito');
    const depositoMessage = document.querySelector('#deposito-message');
        
    deposito.addEventListener('submit', (e) => {
      e.preventDefault();      
      const form = Object.fromEntries(new FormData(e.target));
      const { deposito } = form;

      if (deposito.length === 0 || deposito === '0') {
        // FACTORIZAR ESTA FUNCION
        depositoMessage.classList.add('active', 'alert-info', 'alert');
        depositoMessage.innerHTML = 'Ingrese un monto valido';
        return 
      }

      // actualizar el saldo
      user.saldo = Number(user.saldo) + Number(deposito);
      
      // mostrar mensaje de exito
      depositoMessage.classList.add('active', 'alert-success', 'alert');

      // mostrar mensaje de exito
      depositoMessage.innerHTML = 'Deposito exitoso';

      // guardamos el log del deposito realizado
      user.log.push({ monto: deposito, fecha: new Date(), type: 'deposito' });

      // limpiamos el formulario
      document.querySelector('#deposito input').value = '';
      
      
      
    })

})


// BOTON DE BALANCE
const saldoButton = document.querySelector('#saldo');

saldoButton.addEventListener('click', () => {
  const balanceInnerHTML = `
  <div class="balance">
    <h2>Saldo disponible: $ <strong id="saldo-disponible"></strong></h2>    
  </div>
  `

  toogleModal(
    openModal,
    'Balance',
    balanceInnerHTML
    )

    const saldoDisponible = document.querySelector('#saldo-disponible');
    saldoDisponible.innerText = user.saldo;



})


// BOTON MOVIMIENTOS
const movimientosButton = document.querySelector('#movimientos');

movimientosButton.addEventListener('click', () => {

  // ENSEÑAR REVERESE
  // ENSEÑAR EL LocalString 

  const movimientosInnerHTML = `
  <div class="movimientos">    
    <ul id="movimientos-list"></ul>
  </div>
  `

  toogleModal(
    openModal,
    'Movimientos',
    movimientosInnerHTML
    )

    const movimientosList = document.querySelector('#movimientos-list');
    const movimientos = user.log.reverse();
    movimientos.forEach((movimiento) => {
      const movimientoDate = movimiento.fecha.toLocaleString('es-ES',{
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
      })
      const li = document.createElement('li');
      if (movimiento.type === 'deposito') {
        li.style.color = 'green';        
      } else {
        li.style.color = 'red';        
      }
      li.innerText = `Monto: $ ${movimiento.monto} - Fecha: ${movimientoDate}`;
      movimientosList.appendChild(li);
    })
})

// BOTON DE SALIR
const salirButton = document.querySelector('#salir');

salirButton.addEventListener('click', () => {
  const salirInnerHTML = `
  <div class="salir">
    <h2>Gracias por usar nuestro cajero</h2>
  </div>
  `

  toogleModal(
    openModal,
    'Salir',
    salirInnerHTML
    )

    setTimeout(() => {      
      window.location.href = '../index.html';
      localStorage.removeItem('user');
    }, 2000)
})