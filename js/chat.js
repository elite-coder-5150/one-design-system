export class Chat {
    init() {
        this.cacheDom();
        this.initEvents();
    }

    cacheDom() {
        this.messageCard = document.querySelector('.message-card')

    }

    initEvents() {}

    addMessage() {
        const msg = document.createElement('div');
        msg.classList.add('message');

        msg.innerHTML = /*html*/`
            <div class="message-header">
                <div class="message-header-img">
                    
                </div>
            </div>
        `;
    }
}