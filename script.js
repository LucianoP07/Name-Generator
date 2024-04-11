//Code

let nameArray = [
  "EggHead",
  "The Destroyer",
  "Not So Smart",
  "The Sloth",
  "The Punisher",
  "The Scientist",
  "The Boss",
  "Bullet Proof",
  "The Don",
];

let imgIndex = 0;

document.getElementById("btn2").addEventListener("click", allName);
document.getElementById("btn1").addEventListener("click", randomName);

function randomName() {
  let firstName = document.getElementById("input1").value;
  let lastName = document.getElementById("input2").value;
  let randNum = Math.floor(Math.random() * 9);
  console.log(randNum);
  let output = `${firstName} "${nameArray[randNum]}" ${lastName}`;
  document.getElementById("result").innerHTML = output;
}

function allName() {
  let firstName = document.getElementById("input1").value;
  let lastName = document.getElementById("input2").value;
  let output =
    firstName +
    " " +
    nameArray[0] +
    " " +
    lastName +
    "<br/>" +
    firstName +
    " " +
    nameArray[1] +
    " " +
    lastName +
    " " +
    "<br/>" +
    firstName +
    " " +
    nameArray[2] +
    " " +
    lastName +
    "<br/>" +
    firstName +
    " " +
    nameArray[3] +
    " " +
    lastName +
    "<br/>" +
    firstName +
    " " +
    nameArray[4] +
    " " +
    lastName +
    "<br/>" +
    firstName +
    " " +
    nameArray[5] +
    " " +
    lastName +
    "<br/>" +
    firstName +
    " " +
    nameArray[6] +
    " " +
    lastName +
    "<br/>" +
    firstName +
    " " +
    nameArray[7] +
    " " +
    lastName +
    "<br/>" +
    firstName +
    " " +
    nameArray[8] +
    " " +
    lastName +
    "<br/>";
  document.getElementById("result").innerHTML = output;
}
