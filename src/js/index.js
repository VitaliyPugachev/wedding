import '../styles/styles.scss';
import { Navbar } from './modules/Navbar/Navbar';
import { Timer } from './modules/Timer/Timer';
import { Answers } from './modules/Answers/Answers';
import { Survey } from './modules/Survey/Survey';
import { Modal } from './modules/Modal/Modal';
import { BackScroll } from './modules/BackScroll/BackScroll';
import { MessageToGuests } from './modules/MessageToGuests/MessageToGuests';

document.addEventListener('DOMContentLoaded', () => {
    BackScroll();
    Modal();
    Navbar();
    MessageToGuests();
    Timer();
    Answers();
    Survey();
}, false);