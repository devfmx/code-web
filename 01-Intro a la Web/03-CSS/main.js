const button = document.querySelector('#border-box');
button.addEventListener('click', () => {
  Swal.fire({
    title: '240 px',
    html: `
      <div class="modal">
        El <strong>.box</strong> tiene un ancho del 100%, ya que el contenedor padre tienen 200px de ancho.
        <div></div>
        Esto haria creer que el <strong>.box</strong> tiene 200px de ancho, pero no es asi.
        <img style="width: 100%" src="./assets/content-box.webp" alt="content-box">        
        En este caso el <strong>.box</strong> tiene un padding de 20px y un border de 10px, lo que hace que el ancho total del elemento sea de 240px.        
        <div class="content-center">
          <a target="_blank" rel="noopener" href="https://codi.link/ICA8c3R5bGU+DQogICAgLnBhcmVudCB7DQogICAgICB3aWR0aDogMjAwcHg7DQogICAgICBib3JkZXI6IDhweCBzb2xpZCByZWQ7DQogICAgfQ0KICAgIC5ib3ggew0KICAgICAgDQogICAgICB3aWR0aDogMTAwJTsNCiAgICAgIGJvcmRlcjogOHB4IHNvbGlkIGhvdHBpbms7DQogICAgICBwYWRkaW5nOiAyMHB4Ow0KICAgIH0NCiAgPC9zdHlsZT4NCg0KICA8ZGl2IGNsYXNzPSJwYXJlbnQiPg0KICAgIDxkaXYgY2xhc3M9ImJveCI+PC9kaXY+DQogIDwvZGl2Pg0K%7C%7C">Ver codigo</a>
        </div>
      </div>
    `,
  })
});