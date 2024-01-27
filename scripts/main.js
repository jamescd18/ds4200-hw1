const myImage = document.querySelector('#main-image')

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/puppies1.jpg') {
    myImage.setAttribute('src', 'images/ear-bite.jpg')
  } else {
    myImage.setAttribute('src', 'images/puppies1.jpg')
  }
}
