import './modal.style.scss';
import { postData } from '../features/postData';

class Answer {
    constructor(name, accept, dishes, unwanted, alcohol){
        this.name = name,
        this.accept = accept,
        this.dishes = dishes,
        this.unwanted = unwanted,
        this.alcohol = alcohol
    }
}

export const Modal = () => {
    document.body.innerHTML += `<div class="modal"></div>`;
    const root = document.querySelector('.modal');

    root.innerHTML += `<div class="modal__sendForm">
        <div>
            <label for="guestName" >Ваше имя: </label>
            <input id="guestName"/>
            <button class="modal__closeBtn">&#10006;</button>
        </div>
        <button class="modal__sendBtn">Отправить</button>
    </div>`;

    const guestName = document.querySelector('#guestName');
    const sendBtn = document.querySelector('.modal__sendBtn');
    const closeBtn = document.querySelector('.modal__closeBtn');

    closeBtn.addEventListener('click', closeModal);

    sendBtn.addEventListener('click', () => {
        postData(new Answer(guestName.value, 'nope', 'test', 'second', 'vodka'));
        // document.querySelector('.modal').style.display = 'none';
        // document.body.style.overflow = 'auto';
    });

    root.addEventListener('click', (e) => {
        if(e.target === root){
            closeModal();
        };
    })

    function closeModal() {
        root.style.display = 'none',
        document.body.style.overflow = 'auto';
    }

}

export function openModal() {
    document.querySelector('.modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}





function getValueById(id){
    if (!id) {
        return ''
    }
    return document.querySelector(`#${id}`).value;

}