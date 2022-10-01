const { hash } = window.location;  

const message = atob(hash.replace('#', ''));
  
if (message) {
  document.querySelector('#message-form').classList.add('hide');

  document.querySelector('#message-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = message;
}



  //first step   

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);     //bto is used to creation of base 64 in encript
   console.log(encrypted)
  const linkInput = document.querySelector('#link-input');    //automatic select link
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
