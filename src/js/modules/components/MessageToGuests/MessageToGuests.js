import './messageToGuests.style.scss';

export const MessageToGuests = () => {
    const root = document.querySelector('.message');
    root.innerHTML += `
    <div class="message__content">
        <p>Дорогие друзья!</p>
        <p>Жить, любить, чувствовать. Однажды мы поняли, что нет ничего важнее этого.</p> 
        <p>И что идти дальше мы хотим только вместе. А теперь мечтаем, чтобы день нашей свадьбы </p>
        <p>стал красивым и ярким событием на этом увлекательном пути.</p>
        <p>Мы будем очень рады, если вы разделите этот счастливый день с нами.</p>
        <p>Увидимся на нашей свадьбе!</p>
    </div>
    `;
    return root;
};
