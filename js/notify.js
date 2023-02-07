export class Notify {
    init() {
        this.cacheDom();
    }

    cacheDom() {
       this.notifyCard = document.querySelector('.notifications-card');
       this.bellIcon = document.querySelector('.bell-icon');
    }

    initEvents() {
        this.bellIcon.addEventListener('click', this.toggleNotification.bind(this));
    }

    toggleNotification() {
        if (!(this.notifyCard.classList.contains('show'))) {
            this.notifyCard.classList.add('show');
            this.notifyCard.classList.remove('hidden');
        } else if (this.notifyCard.classList.contains('show')) {
            this.notifyCard.classList.remove('show');
            this.notifyCard.classList.add('hidden');
        }
    }
}