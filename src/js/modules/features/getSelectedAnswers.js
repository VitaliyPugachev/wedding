export function getSelectedAnswers(selectContainer) {
    const data = {};
    if (selectContainer.childNodes) {
        const nodes = Array.from(selectContainer.childNodes).filter((node) => node.tagName === 'DIV');
        nodes.forEach((node) => {
            let content;
            if (node.querySelector('input[type="checkbox"]')) {
                content = [...node.querySelectorAll('input[type="checkbox"]')]
                    .filter((checkbox) => checkbox.checked)
                    .map((element) => {
                        if (element.value === 'answer') {
                            return node.querySelector('[placeholder="Свой вариант"]').value;
                        }
                        return element.value;
                    });
            } else if (node.querySelector('input:checked').value === 'answer') {
                content = node.querySelector('[placeholder="Свой вариант"]').value;
            } else {
                content = node.querySelector('input:checked').value;
            }
            data[node.querySelector('h3').textContent] = content;
        });
    }

    return data;
}
