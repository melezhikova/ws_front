// TODO: write your code here
import Account from './Account';
import { showChat, drawAccount } from './chat';
import { enteredMessage, inputedMessage } from './message';

let you = null;
const ws = new WebSocket('ws://localhost:7000/ws');

ws.addEventListener('open', () => {
  console.log('connected');
  ws.send('hello');
});

ws.addEventListener('message', (evt) => {
  console.log(evt);
  if (you) {
    enteredMessage(evt.data);
  }
});

ws.addEventListener('close', (evt) => {
  console.log('connection closed', evt);
  const accounts = ['Alexandra', 'Petr', 'Ivan'];
  const accountsList = document.querySelector('.accountsList');
  accountsList.innerHTML = '';
  accounts.forEach((item) => {
    drawAccount(item);
  });
  const messageForm = document.querySelector('form');
  messageForm.removeEventListener('submit', inputedMessage);
});

ws.addEventListener('error', () => {
  console.log('error');
});

setInterval(() => {
  try {
    ws.send('hello');
  } catch (e) {
    console.log('err');
    console.log(e);
  }
}, 3000);

const modal = document.querySelector('.modal');
const nameInput = document.querySelector('.inputName');
const nameForm = document.querySelector('.formName');

nameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(nameInput.value);
  you = new Account(nameInput.value);

  if (you) {
    nameInput.value = '';
    you.addAccount();
    modal.classList.remove('active');
    showChat();
    const accounts = Array.from(Account.getAll());
    accounts.forEach((item) => {
      drawAccount(item);
    });
  }
});
