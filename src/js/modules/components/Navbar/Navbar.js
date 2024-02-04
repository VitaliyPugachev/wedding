import './Navbar.styles.scss';

export function Navbar() {
    const navLinks = ['Приглашение', 'Опрос', 'Ответы', 'Контакты'];

    const navRootElement = document.querySelector('.navigation');
    const survey = document.querySelector('.survey');
    const answers = document.querySelector('.answers');
    const message = document.querySelector('.message');

    const navigationItems = navLinks.map((link) => {
        const navItem = document.createElement('a');
        navItem.addEventListener('click', () => {
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
        navItem.textContent = link;
        return (
            navItem
        );
    });

    navigationItems.forEach((item) => {
        navRootElement.append(item);
    });
}
