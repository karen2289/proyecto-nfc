// Obtener los elementos del DOM
const dataTypeSelect = document.getElementById('data-type');
const phoneInput = document.getElementById('phone-input');
const imageInput = document.getElementById('image-input');
const shareBtn = document.getElementById('share-btn');
const result = document.getElementById('result');

// Mostrar los campos de entrada correctos en función del tipo de dato seleccionado
dataTypeSelect.addEventListener('change', function() {
  if (dataTypeSelect.value === 'phone') {
    phoneInput.classList.add('active');
    imageInput.classList.remove('active');
  } else if (dataTypeSelect.value === 'image') {
    imageInput.classList.add('active');
    phoneInput.classList.remove('active');
  }
});

// Compartir los datos al hacer clic en el botón
shareBtn.addEventListener('click', function() {
  let data;
  if (dataTypeSelect.value === 'phone') {
    data = phoneInput.querySelector('input').value;
  } else if (dataTypeSelect.value === 'image') {
    data = imageInput.querySelector('input').files[0];
  }
  
  // Simular el envío de datos a través de NFC
  simulateNFC(data);
});

// Simular el envío de datos a través de NFC
function simulateNFC(data) {
  setTimeout(function() {
    result.innerHTML = `Datos compartidos: ${data}`;
  }, 3000);
}