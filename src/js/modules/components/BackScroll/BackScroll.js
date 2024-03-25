import './backScroll.scss';
import { throttle } from '../../features/throttle';
import BackArrow from '../../../../assets/svg/angles.svg';

export const BackScroll = () => {
    document.body.innerHTML += `
        <div class="backBtn">
            ${BackArrow}
        </div>`;

    window.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.backBtn');
        btn.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    });

    function scrollHandler() {
        if (window.scrollY >= window.innerHeight) {
            document.querySelector('.backBtn').style.display = 'block';
        } else {
            document.querySelector('.backBtn').style.display = 'none';
        }
    }

    window.addEventListener('scroll', throttle(scrollHandler, 500));
};
