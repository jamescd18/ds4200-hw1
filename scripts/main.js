const myImage = document.querySelector('#main-image')

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/puppies1.jpg') {
    myImage.setAttribute('src', 'images/ear-bite.jpg')
  } else {
    myImage.setAttribute('src', 'images/puppies1.jpg')
  }
}

const square = document.querySelector('#sq-puppy')

square.onclick = () => {
  const mySrc = square.getAttribute('src')
  if (mySrc === 'images/puppy1.jpg') {
    square.setAttribute('src', 'images/rose.jpg')
  } else {
    square.setAttribute('src', 'images/puppy1.jpg')
  }
}

const sleepy = document.querySelector('#sleepy-puppy')

sleepy.onclick = () => {
  alert('Hey! This puppy is sleeping! Please do not disturb!')
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
  const myName = prompt('Please enter your name.')
  if (!myName) {
    localStorage.removeItem('name')
    myHeading.textContent = `Dogs are cool!`
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = `Dogs are cool, ${myName}`
  }
}

if (!localStorage.getItem('name')) {
  myHeading.textContent = `Dogs are cool!`
} else {
  const storedName = localStorage.getItem('name')
  myHeading.textContent = `Dogs are cool, ${storedName}`
}

myButton.onclick = () => {
  setUserName()
}
