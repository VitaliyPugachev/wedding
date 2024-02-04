import './Timer.styles.scss';
import { addElement } from '../../features/addElement';

export function Timer() {
    const timerRootElement = document.querySelector('.timer');
    const date = new Date(2024, 8, 21, 17, 0, 0);
    const timerWrapper = addElement('div', '.timer', '', 'timer_wrapper');
    const timerDays = addElement('div', '.timer_wrapper', '', 'timer_item');
    const timerHours = addElement('div', '.timer_wrapper', '', 'timer_item');
    const timerMinutes = addElement('div', '.timer_wrapper', '', 'timer_item');
    const timerSeconds = addElement('div', '.timer_wrapper', '', 'timer_item');

    const addZero = (number) => {
        if (number < 10) {
            return `0${number}`;
        }
        return number;
    };

    const updateDate = () => {
        timerDays.innerHTML = `<span class="time">${addZero(Math.floor((date - Date.now()) / 1000 / 60 / 60 / 24))}</span> ДНЕЙ`;
        timerHours.innerHTML = `<span class="time">${addZero(Math.floor((date - Date.now()) / 1000 / 60 / 60) % 24)}</span> ЧАСОВ`;
        timerMinutes.innerHTML = `<span class="time">${addZero(Math.floor((date - Date.now()) / 1000 / 60) % 60)}</span> МИНУТ`;
        timerSeconds.innerHTML = `<span class="time">${addZero(Math.floor((date - Date.now()) / 1000) % 60)}</span> СЕКУНД`;
    };

    setInterval(() => {
        updateDate();
    }, 1000);
}
