import getTime from './time';

const accounts = ['Alexandra', 'Petr', 'Ivan'];

function addMessageToDOM(message) {
  const box = document.querySelector('.messagesBox');
  const messageBox = document.createElement('div');
  messageBox.classList.add('messageBox');
  messageBox.classList.add(message.whose);
  const messageDetails = document.createElement('div');
  messageDetails.classList.add('messageDetails');
  messageDetails.textContent = `${message.name}, ${message.time}`;
  const messageBody = document.createElement('div');
  messageBody.classList.add('messageBody');
  messageBody.textContent = message.body;

  messageBox.append(messageDetails);
  messageBox.append(messageBody);
  box.append(messageBox);
  messageBox.scrollIntoView(false);
}

export function enteredMessage(text) {
  const random = Math.floor(Math.random() * accounts.length);
  const time = getTime();
  const message = {
    name: accounts[random],
    time,
    body: text,
    whose: 'others',
  };
  addMessageToDOM(message);
}

export function inputedMessage(event) {
  event.preventDefault();
  const input = document.querySelector('.messageInput');
  const time = getTime();
  const message = {
    name: 'you',
    time,
    body: input.value,
    whose: 'yours',
  };
  addMessageToDOM(message);
  input.value = '';
}
