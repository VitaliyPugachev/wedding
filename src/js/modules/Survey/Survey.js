import { addElement } from "../features/addElement";
import './Survey.styles.scss';
import {quiz} from '../../../config';
import { openModal } from "../Modal/Modal";

const questions = quiz;



export function Survey() {
    const surveyRoot = addElement('div', '.survey','', 'survey__wrapper');
    surveyRoot.innerHTML += `<h2 class="survey__title">Опрос</h2>`

    function renderAnswers(text, parent) {
        const root = document.querySelector(`.${parent}`);
        const optionTag = 
            text === 'answer' 
            ? `<input placeholder="Свой вариант" class="survey_input" name="${parent}"></input>` 
            : `<label for="${parent}">${text}</label>`;

        const questionAndAnswerBlock = `
            <div>
                <input type="radio" name="${parent}" class="survey_radio ${parent}" value="${text}">
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
    const sendBtn = document.querySelector('.survey__button');
    sendBtn.setAttribute('disabled', true);
    sendBtn.addEventListener('click', () => {
        openModal();
    })

    checkAnswers();

    document.querySelectorAll('.survey_radio')
        .forEach(element => {element.addEventListener('click', () => {checkAnswers()})});
        
    function checkAnswers() {
        const inputChecked = [];
        for(let i = 0; i < questions.length; i++) {
            const answers = document.querySelectorAll(`input.question${i}`);
    
            answers.forEach(input => {
                inputChecked.push(input.checked);
            })
        }
    
        const result = inputChecked.filter((item) => item === true).length;
    
        if (result === questions.length) {
            sendBtn.removeAttribute('disabled');
        } else {
            sendBtn.setAttribute('disabled', true);
        }
    
    }
    
}
