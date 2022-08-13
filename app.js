// https://calculator.swiftutors.com/percentage-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const percentageRadio = document.getElementById('percentageRadio');
const percentagefromRadio = document.getElementById('percentagefromRadio');
const percentagetoRadio = document.getElementById('percentagetoRadio');

let percentage;
let percentagefrom = v1;
let percentageto = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

percentageRadio.addEventListener('click', function() {
  variable1.textContent = 'Percentage from';
  variable2.textContent = 'Percentage to';
  percentagefrom = v1;
  percentageto = v2;
  result.textContent = '';
});

percentagefromRadio.addEventListener('click', function() {
  variable1.textContent = 'Percentage (%)';
  variable2.textContent = 'Percentage to';
  percentage = v1;
  percentageto = v2;
  result.textContent = '';
});

percentagetoRadio.addEventListener('click', function() {
  variable1.textContent = 'Percentage (%)';
  variable2.textContent = 'Percentage from';
  percentage = v1;
  percentagefrom = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(percentageRadio.checked)
    result.textContent = `Percentage = ${computePercentage().toFixed(2)} %`;

  else if(percentagefromRadio.checked)
    result.textContent = `Percentage from = ${computePercentagefrom().toFixed(2)}`;

  else if(percentagetoRadio.checked)
    result.textContent = `Percentage to = ${computePercentageto().toFixed(2)}`;
})

// calculation

function computePercentage() {
  return (Number(percentagefrom.value) / Number(percentageto.value)) * 100;
}

function computePercentagefrom() {
  return (Number(percentage.value) / 100) * Number(percentageto.value);
}

function computePercentageto() {
  return Number(percentagefrom.value) / (Number(percentage.value) / 100);
}