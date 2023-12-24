import './backScroll.scss';
import { throttle } from '../features/throttle';

export const BackScroll = () => {
    document.body.innerHTML += `
        <div class="backBtn">
            <img class="backBtn__img" src="../../../assets/angles.svg" alt="back to top"/>
        </div>`;

    window.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.backBtn');
        btn.addEventListener('click', () => {
            window.scrollTo(0, 0);
        })
    });

    function scrollHandler() {
        if (window.scrollY >= window.innerHeight) {
            document.querySelector('.backBtn__img').style.display = 'block';
        } else {
            document.querySelector('.backBtn__img').style.display = 'none';
        }
    }

    window.addEventListener('scroll', throttle(scrollHandler, 500));
    
}