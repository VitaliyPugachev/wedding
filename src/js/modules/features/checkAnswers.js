export function checkAnswers(buttonToDisable, questions) {
    const inputChecked = [];
    const multipleCheck = [];
    for (let i = 0; i < questions.length; i++) {
        const answers = document.querySelectorAll(`input.question${i}`);
        answers.forEach((input) => {
            if (input.attributes.type.value === 'checkbox') {
                multipleCheck.push(input.checked);
            } else {
                inputChecked.push(input.checked);
            }
        });
    }

    const checkboxes = Number(multipleCheck.filter((item) => item === true).length > 0);
    const result = inputChecked.filter((item) => item === true).length + checkboxes;

    if (result === questions.length) {
        buttonToDisable.removeAttribute('disabled');
    } else {
        buttonToDisable.setAttribute('disabled', true);
    }
}
