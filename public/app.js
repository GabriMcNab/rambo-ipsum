const textField = document.querySelector("#text");
const generateButton = document.querySelector("#button");
const numOfPar = document.querySelector("#number");
const ramboStart = document.querySelector("#ramboStart");

generateButton.addEventListener('click', function(event){
  event.preventDefault();
  hideText();
  text = composeText(numOfPar.value);
  checkRamboStart();
  setTimeout(fadeIn, 100);
});

function createParagraph(){
  let p = [];
  for(let i = 0; i < 10; i++){
    let x = Math.floor((Math.random() * data.length) +1);
    p.push(data[x]);
  }
  return p.join(' ');
}

function composeText(n){
  let text = [];
  for(let i = 0; i < n; i++){
    let par = "<p> " + createParagraph() + " </p>";
    text.push(par);
  }
  return text.join(' ');
}

function checkRamboStart() {
  if(ramboStart.checked){
    let textArr = text.split(' ');
    textArr.splice(1, 2, 'Rambo', 'ipsum');
    text = textArr.join(' ');
  }
}
function hideText(){
  textField.classList.toggle("hide");
}
function fadeIn() {
  hideText();
  textField.innerHTML = text;
}
