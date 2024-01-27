const myImage = document.querySelector('#main-image')

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/puppies1.jpg') {
    myImage.setAttribute('src', 'images/ear-bite.jpg')
  } else {
    myImage.setAttribute('src', 'images/puppies1.jpg')
  }
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
