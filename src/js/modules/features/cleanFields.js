export function cleanFields(containerSelector) {
    const container = document.querySelector(containerSelector);
    container.querySelectorAll('input').forEach((inputElement) => {
        switch (inputElement.type) {
        case 'radio':
            inputElement.checked = false;
            break;
        case 'text':
            inputElement.value = '';
            break;

        default:
        }
    });
}
