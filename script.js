const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
];

const types = ['info', 'succes', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
    const notf = document.createElement('div');
    notf.classList.add('toast');
    notf.classList.add(type ? type : getRandomType());

    notf.innerText = message ? message : getRandomMessage();

    toasts.appendChild(notf);

    setTimeout(() => {
        notf.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}