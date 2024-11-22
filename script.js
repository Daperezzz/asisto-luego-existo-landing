document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-button');
    const messageElement = document.getElementById('device-message');

    // Detecta Android
    if (/Android/i.test(navigator.userAgent)) {
        downloadButton.href = "https://github.com/daperezzz/asisto-luego-existo-landing/releases/download/v1.0.0/app-release.apk";
        downloadButton.classList.remove('hidden');
        messageElement.textContent = 'Estás en un dispositivo Android. Descarga la app ahora.';
    } else {
        messageElement.textContent = 'Estás en un dispositivo que no es Android.';
    }
});
