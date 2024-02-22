import './Contacts.styles.scss';
import Instagram from '../../../../assets/svg/instagram.svg';
import Vk from '../../../../assets/svg/vk.svg';
import Youtube from '../../../../assets/svg/youtube.svg';

export function Contacts() {
    const root = document.querySelector('.contacts');

    root.innerHTML += `
        <h2>Контакты</h2>
        <div class="contacts__container">
            <div class="contacts__person">
                <h3>Организатор свадьбы</h3>
                <div class="contacts__person__name">
                    <span>Татьяна</span>
                    <span class="contacts__person__phone">+7(999) 999-99-99</span>
                </div>
                <div class="contacts__socials">
                    <ul class="contacts__socials__list">
                        <li class="contacts__socials__item">${Instagram}</li>
                        <li class="contacts__socials__item">${Vk}</li>
                        <li class="contacts__socials__item">${Youtube}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    return root;
}
