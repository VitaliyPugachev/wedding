export function addElement(element = 'div', parentSelector = 'body', content = '', initClass = '') {
    const parent = document.querySelector(parentSelector);
    const newElement = parent.appendChild(document.createElement(element));
    newElement.textContent = content;
    newElement.classList.add(initClass);

    return newElement;
}
