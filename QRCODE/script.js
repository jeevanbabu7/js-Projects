const submitButton = document.querySelector('.submit');
const input = document.querySelector('.input');
const qrContainer = document.querySelector('.qr-container');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Hiii");

    // Clear previous QR code if any
    qrContainer.innerHTML = '<div class="qrcode"></div>';

    const qrCode = new QRCode(qrContainer, {
        text: input.value,
        width: 250,
        height: 250,
        correctLevel : QRCode.CorrectLevel.H
    });

    console.log(qrCode);

    qrContainer.style.display = 'block';
});
