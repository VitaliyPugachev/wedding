import './Notification.style.scss';

export const UserNotification = (message) => {
    const wrapper = document.createElement('div');
    document.body.appendChild(wrapper);
    wrapper.classList.add('notification');
    wrapper.classList.add('notification__hide');
    wrapper.innerHTML = `<div class="notification__message">
        <img src=""><span>${message}</span>
    </div>`;
};
