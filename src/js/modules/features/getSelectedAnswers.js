export function getSelectedAnswers(selectContqiner) {
    const data = {};
    if (selectContqiner.childNodes) {
        const nodes = Array.from(selectContqiner.childNodes).filter((node) => node.tagName === 'DIV');
        nodes.forEach((node) => {
            data[node.querySelector('h3').textContent] = node.querySelector('input:checked').value;
        });
    }

    return data;
}
