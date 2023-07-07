import qrcode from 'https://cdn.skypack.dev/qrcode';
const form = document.querySelector('#qr-code');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const { codeText } = Object.fromEntries(data);
  console.log(codeText);

  const code = await qrcode.toString(codeText, {
    type: 'svg',
    color: {
      light: '#3685FF',
      dark: '#ffffff'
    }
  })

  const picture = document.querySelector('#qr-img')
  picture.innerHTML = code;
  
})