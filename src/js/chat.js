import { inputedMessage } from './message';

export function showChat() {
  const chatContainer = document.createElement('div');
  chatContainer.classList.add('chat-container');
  const accountsBox = document.createElement('div');
  accountsBox.classList.add('accountsBox');
  const accountsList = document.createElement('ul');
  accountsList.classList.add('accountsList');
  const chat = document.createElement('div');
  chat.classList.add('chat');
  const messagesBox = document.createElement('div');
  messagesBox.classList.add('messagesBox');
  const messageForm = document.createElement('form');
  messageForm.classList.add('messageForm');
  const messageInput = document.createElement('input');
  messageInput.classList.add('messageInput');
  messageInput.placeholder = 'Type your message here';

  messageForm.appendChild(messageInput);
  chat.appendChild(messagesBox);
  chat.appendChild(messageForm);
  chatContainer.appendChild(accountsList);
  chatContainer.appendChild(chat);

  const box = document.querySelector('.box');
  box.appendChild(chatContainer);

  messageForm.addEventListener('submit', inputedMessage);
}

export function drawAccount(item) {
  const accountsList = document.querySelector('.accountsList');
  const account = document.createElement('li');
  account.classList.add('account');
  account.textContent = item;
  accountsList.appendChild(account);
}
