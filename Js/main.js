document.addEventListener("DOMContentLoaded", function () {
    const rojo = document.getElementById("rojo");
    const verde = document.getElementById("verde");
    const azul = document.getElementById("azul");
    const inputRojo = document.getElementById("input-rojo");
    const inputVerde = document.getElementById("input-verde");
    const inputAzul = document.getElementById("input-azul");
    const colorPicker = document.getElementById("color-picker");
    const colorBox = document.getElementById("color-box");
    const hexCode = document.getElementById("hex-code");

    function actualizarColor() {
        const r = parseInt(rojo.value);
        const g = parseInt(verde.value);
        const b = parseInt(azul.value);
        const colorRGB = `rgb(${r}, ${g}, ${b})`;
        const colorHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

        colorBox.style.backgroundColor = colorRGB;
        hexCode.textContent = colorHex.toUpperCase();
        colorPicker.value = colorHex;

        inputRojo.value = r;
        inputVerde.value = g;
        inputAzul.value = b;
    }

    function actualizarDesdeColorPicker() {
        const hex = colorPicker.value;
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);

        rojo.value = r;
        verde.value = g;
        azul.value = b;

        actualizarColor();
    }

    function actualizarDesdeInputNumerico() {
        let r = parseInt(inputRojo.value) || 0;
        let g = parseInt(inputVerde.value) || 0;
        let b = parseInt(inputAzul.value) || 0;

        r = Math.min(255, Math.max(0, r));
        g = Math.min(255, Math.max(0, g));
        b = Math.min(255, Math.max(0, b));

        rojo.value = r;
        verde.value = g;
        azul.value = b;

        actualizarColor();
    }

    rojo.addEventListener("input", actualizarColor);
    verde.addEventListener("input", actualizarColor);
    azul.addEventListener("input", actualizarColor);
    colorPicker.addEventListener("input", actualizarDesdeColorPicker);

    inputRojo.addEventListener("input", actualizarDesdeInputNumerico);
    inputVerde.addEventListener("input", actualizarDesdeInputNumerico);
    inputAzul.addEventListener("input", actualizarDesdeInputNumerico);

    actualizarColor(); // Mostrar color inicial
});
