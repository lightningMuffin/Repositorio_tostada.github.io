const inputMon = document.getElementById("monto");
const inputPro = document.getElementById("propina");
const inputNom = document.getElementById("nombre");
const inputSal = document.getElementById("saludo");

function calcular(){
    const monto = Number(inputMon.value);
    const propina = (Number(inputPro.value) * Number(inputMon.value)) / 100;
    const total = monto + propina;
    const nombre = inputNom.value;
    inputSal.textContent = `El total apagar incluyendo la propina es ${total},${nombre}`;
}