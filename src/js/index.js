import '../styles/styles.scss';
import { Navbar } from './modules/components/Navbar/Navbar';
import { Timer } from './modules/components/Timer/Timer';
import { Answers } from './modules/components/Answers/Answers';
import { Survey } from './modules/components/Survey/Survey';
import { Modal } from './modules/components/Modal/Modal';
import { BackScroll } from './modules/components/BackScroll/BackScroll';
import { MessageToGuests } from './modules/components/MessageToGuests/MessageToGuests';
import { Location } from './modules/components/Location/Location';
import { addObserver } from './modules/features/addObserver';
import { Contacts } from './modules/components/Contacts/Contacts';
import { UserNotification } from './modules/components/Notification/Notification';

document.addEventListener('DOMContentLoaded', () => {
    BackScroll();
    Modal();
    Navbar();
    addObserver(MessageToGuests());
    Timer();
    addObserver(Answers());
    addObserver(Survey());
    Location();
    Contacts();
    UserNotification('Спасибо! Ваши пожелания будут учтены!');
}, false);
