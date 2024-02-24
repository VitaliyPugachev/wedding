import './modal.style.scss';
import { postData } from '../../features/postData';
import { getSelectedAnswers } from '../../features/getSelectedAnswers';
import { cleanFields } from '../../features/cleanFields';
import { checkAnswers } from '../../features/checkAnswers';
import { quiz } from '../../../../config';

export const Modal = () => {
    document.body.innerHTML += '<div class="modal"></div>';
    const root = document.querySelector('.modal');

    function closeModal() {
        if (root) {
            root.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    root.innerHTML += `<div class="modal__sendForm">
        <div class="modal__sendForm__wrapper">
            <label for="guestName" >Ваше имя: </label>
            <input id="guestName"/>
        </div>
        <button class="modal__sendBtn">Отправить</button>
        <button class="modal__closeBtn">&#10006;</button>
    </div>`;

    const guestName = document.querySelector('#guestName');
    const sendBtn = document.querySelector('.modal__sendBtn');
    const closeBtn = document.querySelector('.modal__closeBtn');

    closeBtn.addEventListener('click', closeModal);

    sendBtn.addEventListener('click', () => {
        const data = getSelectedAnswers(document.querySelector('.survey__wrapper'));
        if (guestName.value) {
            data.name = guestName.value;
        } else {
            alert('Пожалуйста, введите имя');
        }
        try {
            postData(data);
            cleanFields('.survey__wrapper');
            checkAnswers(document.querySelector('.survey__button'), quiz);
        } catch (error) {
            throw new Error(error);
        }
        document.querySelector('.modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    root.addEventListener('click', (e) => {
        if (e.target === root) {
            closeModal();
        }
    });
};

export function openModal() {
    document.querySelector('.modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
