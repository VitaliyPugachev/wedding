import './Dropdown.styles.scss';
import List from '../../../../assets/svg/list.svg';

export const Dropdown = (root, links) => {
    // const elements = links.map((link) => `<a>${link}</a>`);

    root.innerHTML += `
    <div class="dropdown">
        <button class="dropbtn">${List}</button>
        <div class="dropdown-content">
        </div>
    </div>
    `;

    const content = document.querySelector('.dropdown-content');
    links.forEach((element) => {
        content.appendChild(element);
    });

    function toggleDropdown() {
        content.classList.toggle('opened');
    }

    document.querySelector('.dropbtn').addEventListener('click', () => toggleDropdown());
    window.addEventListener('click', ({ target }) => {
        if (!target.matches('.dropbtn') && !target.matches('.dropdown-content')) {
            if (target !== document.querySelector('svg')) {
                content.classList.remove('opened');
            }
        }
    });
};
