export function checkAnswers(buttonToDisable, questions) {
    const inputChecked = [];
    for (let i = 0; i < questions.length; i++) {
        const answers = document.querySelectorAll(`input.question${i}`);

        answers.forEach((input) => {
            inputChecked.push(input.checked);
        });
    }

    const result = inputChecked.filter((item) => item === true).length;

    if (result === questions.length) {
        buttonToDisable.removeAttribute('disabled');
    } else {
        buttonToDisable.setAttribute('disabled', true);
    }
}
