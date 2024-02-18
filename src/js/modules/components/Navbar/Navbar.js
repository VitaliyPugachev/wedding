import { Dropdown } from '../Dropdown/Dropdown';
import './Navbar.styles.scss';

export function Navbar() {
    const sections = ['Приглашение', 'Опрос', 'Ответы', 'Контакты'];

    const root = document.querySelector('.navigation');
    const survey = document.querySelector('.survey');
    const answers = document.querySelector('.answers');
    const message = document.querySelector('.message');

    const navigationItems = sections.map((link) => {
        const navLink = document.createElement('a');
        navLink.addEventListener('click', () => {
            switch (link) {
            case 'Приглашение':
                if (message) {
                    window.scrollTo(message.getBoundingClientRect());
                }
                break;
            case 'Опрос':
                if (survey) {
                    window.scrollTo(survey.getBoundingClientRect());
                }
                break;
            case 'Ответы':
                if (answers) {
                    window.scrollTo(answers.getBoundingClientRect());
                }
                break;
            default:
            }
        });
        navLink.textContent = link;
        return (
            navLink
        );
    });

    if (window.navigator.userAgent.includes('iPhone') || window.navigator.userAgent.includes('Android')) {
        return Dropdown(root, navigationItems);
    }

    navigationItems.forEach((item) => {
        root.append(item);
    });
}
