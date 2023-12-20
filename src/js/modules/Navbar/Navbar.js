import './Navbar.styles.scss';

export function Navbar() {
    const navLinks = ['Приглашение', 'Опрос', 'Ответы', 'Контакты'];

    const navRootElement = document.querySelector('.navigation');
    const survey = document.querySelector('.survey');
    const answers = document.querySelector('.answers');
    const appeal = document.querySelector('.appeal');

    const navigationItems = navLinks.map(link => {
        const navItem = document.createElement('a');
        navItem.addEventListener('click', () => {
            switch (link) {
                case 'Приглашение':
                    window.scrollTo(appeal.getBoundingClientRect());
                    break;
                case 'Опрос':
                    window.scrollTo(survey.getBoundingClientRect());
                    break;
                case 'Ответы':
                    window.scrollTo(answers.getBoundingClientRect());
                    break;
            
                default: return
            }
        })
        navItem.textContent = link;
        return (
            navItem
        )
    })

    
    navigationItems.forEach(item => {
        navRootElement.append(item);
    })
}