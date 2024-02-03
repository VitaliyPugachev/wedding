import { addElement } from '../features/addElement';
import './Survey.styles.scss';
import { quiz } from '../../../config';
import { openModal } from '../Modal/Modal';
import { checkAnswers } from '../features/checkAnswers';

const questions = quiz;

export function Survey() {
    const surveyRoot = addElement('div', '.survey', '', 'survey__wrapper');
    surveyRoot.innerHTML += '<h2 class="survey__title">Опрос</h2>';

    function renderAnswers(text, parent) {
        const root = document.querySelector(`.${parent}`);
        const optionTag = text === 'answer'
            ? `<input placeholder="Свой вариант" class="survey_input" name="${parent}"></input>`
            : `<label for="${parent}">${text}</label>`;

        const questionAndAnswerBlock = `
            <div>
                <input type="radio" name="${parent}" class="survey_radio ${parent}" value="${text}">
                ${optionTag}
            </div>`;

        root.innerHTML += questionAndAnswerBlock;
    }

    questions.forEach((item, index) => {
        const answersWrapper = addElement('div', '.survey__wrapper', '', `question${index}`);
        answersWrapper.classList.add('wrapper');
        addElement('h3', `.question${index}`, item.question, 'question__title');
        item.options.forEach((option) => {
            renderAnswers(option, `question${index}`);
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
}
