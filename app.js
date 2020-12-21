const name = getNameFromUrl() || 'für Dich';
const nameEle = document.getElementById('name');

createNameDivs(name);

const letterEles = getLetterElements();

lightUpName(1);

function createNameDivs(name) {
  var nameArray = name.split('');
  var htmlString = '';
  nameArray.forEach((letter, index) => {
    htmlString += `<span class="letter" id="letter-${index}">${letter}</span>`;
  });
  nameEle.innerHTML = htmlString;
}

function getLetterElements() {
  let arr = [];
  for (let i = 0; i < name.length; i++) {
    let letterEle = document.getElementById(`letter-${i}`);
    arr.push(letterEle);
  }
  return arr;
}

function lightUpName(n) {
  let length = letterEles.length;
  for (let i = 0; i < length; i++) {
    let ele = letterEles[i];
    ele.className = (n + i) % 2 == 0 ? 'green' : 'red';
  }
  setTimeout(function () {
    lightUpName(n + 1);
  }, 500);
}

function getNameFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let urlName = urlParams.get('name');
  return urlName;
}
