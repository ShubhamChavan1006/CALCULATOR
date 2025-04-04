let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
  display.style.animation = 'none';
  display.offsetHeight; // Trigger reflow
  display.style.animation = 'fadeIn 0.5s ease-out';
}

function clearDisplay() {
  display.value = '';
  display.style.animation = 'none';
  display.offsetHeight; // Trigger reflow
  display.style.animation = 'fadeIn 0.5s ease-out';
}

function calculate() {
  try {
    display.value = eval(display.value);
    display.style.animation = 'none';
    display.offsetHeight; // Trigger reflow
    display.style.animation = 'fadeIn 0.5s ease-out';
  } catch (e) {
    display.value = 'Error';
    display.style.animation = 'none';
    display.offsetHeight; // Trigger reflow
    display.style.animation = 'fadeIn 0.5s ease-out';
  }
}
