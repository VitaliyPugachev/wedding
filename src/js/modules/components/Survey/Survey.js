import { addElement } from '../../features/addElement';
import './Survey.styles.scss';
import { quiz } from '../../../../config';
import { openModal } from '../Modal/Modal';
import { checkAnswers } from '../../features/checkAnswers';

const questions = quiz;

export function Survey() {
    const surveyRoot = addElement('div', '.survey', '', 'survey__wrapper');
    surveyRoot.innerHTML += '<h2 class="survey__title">Опрос</h2>';

    function renderAnswers(text, parent, multiple = false) {
        const root = document.querySelector(`.${parent}`);
        const optionTag = text === 'answer'
            ? `<input placeholder="Свой вариант" class="survey__input" name="${multiple ? parent + text : parent}"></input>`
            : `<label for="${`${parent}-${text}`}" class="label">${text}</label>`;

        const questionAndAnswerBlock = `
            <div>
                <input type="${multiple ? 'checkbox' : 'radio'}" name="${multiple ? parent + text : parent}" class="survey_radio ${parent}" value="${text}" id="${`${parent}-${text}`}">
                ${optionTag}
            </div>`;

        root.innerHTML += questionAndAnswerBlock;
    }

    questions.forEach((item, index) => {
        const answersWrapper = addElement('div', '.survey__wrapper', '', `question${index}`);
        answersWrapper.classList.add('wrapper');
        addElement('h3', `.question${index}`, item.question, 'question__title');
        item.options.forEach((option) => {
            renderAnswers(option, `question${index}`, item.multiple);
        });
    });

    // Create Button

    surveyRoot.innerHTML += '<button class="survey__button">Отправить</button>';
    const sendBtn = document.querySelector('.survey__button');
    sendBtn.setAttribute('disabled', true);
    sendBtn.addEventListener('click', () => {
        openModal();
    });

    checkAnswers(sendBtn, questions);

    document.querySelectorAll('.survey_radio')
        .forEach((element) => { element.addEventListener('click', () => { checkAnswers(sendBtn, questions); }); });

    return document.querySelector('.survey');
}
