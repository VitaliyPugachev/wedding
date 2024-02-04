import { addElement } from '../../features/addElement';
import './Answers.styles.scss';
import { questionsAndAnswers } from '../../../../config';

export function Answers() {
    const questions = questionsAndAnswers;
    const root = document.querySelector('.answers');

    questions.forEach((question, index) => {
        addElement('div', '.answers', '', `answers__item${index}`);
        addElement('h3', `.answers__item${index}`, question[0], 'question');
        addElement('p', `.answers__item${index}`, question[1], 'answer');
    });

    return root;
}
