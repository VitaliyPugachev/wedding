import './Answers.styles.scss';
import { questionsAndAnswers } from '../../../../config';
import arrowIcon from '../../../../assets/svg/arrow.svg';

export function Answers() {
    const questions = questionsAndAnswers;
    const root = document.querySelector('.answers');
    root.innerHTML += '<h2>Ответы на вопросы</h2>';

    function toggleAnswer(answerSelector, arrowSelector) {
        const element = document.querySelector(answerSelector);

        if (element.style.display === 'none' || !element.style.display) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }

        const arrow = document.querySelector(arrowSelector);
        arrow.classList.toggle('rotate');
    }

    questions.forEach((question, index) => {
        root.insertAdjacentHTML('beforeend', `    
            <button class="answers__question${index} answers__btn">
                <h3>${question[0]}</h3>
                <div class="answers__arrow${index}">
                    ${arrowIcon}
                </div>
            </button>
            <div class="answers__answerItem${index} answerWrapper"><p>${question[1]}</p></div>`);

        const btn = document.querySelector(`.answers__question${index}`);
        btn.addEventListener('click', () => toggleAnswer(`.answers__answerItem${index}`, `.answers__arrow${index}`));
    });

    return root;
}
