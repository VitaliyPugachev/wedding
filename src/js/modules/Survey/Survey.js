import { addElement } from "../features/addElement";
import './Survey.styles.scss';
import {quiz} from '../../../config';

const questions = quiz;



export function Survey() {
    const surveyRoot = addElement('div', '.survey','', 'survey__wrapper');
    surveyRoot.innerHTML += `<h2 class="survey__title">Опрос</h2>`

    function renderAnswers(text, parent) {
        const root = document.querySelector(`.${parent}`);
        const optionTag = text === 'answer' ? `<input class="survey_input" name="${parent}"></input>` 
        : `<span name="${parent}">${text}</span>`

        const questionAndAnswerBlock = `
            <div>
                <input type="radio" name="${parent}" class="survey_radio">
                ${optionTag}
            </div>`;

        root.innerHTML += questionAndAnswerBlock;
    }

    questions.forEach((item, q_index) => {
        const answersWrapper = addElement('div', '.survey__wrapper', '', `question${q_index}`);
        answersWrapper.classList.add('wrapper');
        addElement('h3', `.question${q_index}`, item.question, `question__title`);
        item.options.forEach((option) => {
            renderAnswers(option, `question${q_index}`)
        })
    });

    //Create Button 

    surveyRoot.innerHTML += `<button class="survey__button">Отправить</button>`

    
}