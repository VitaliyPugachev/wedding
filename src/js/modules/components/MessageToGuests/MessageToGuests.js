import './messageToGuests.style.scss';
import { inviteMessage } from '../../../../config';

export const MessageToGuests = () => {
    const root = document.querySelector('.message');
    root.innerHTML += `
    <div class="message__content">
        ${inviteMessage}
    </div>
    `;
    return root;
};
