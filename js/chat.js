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
                <div class="info">
                    <div class="user-name">olivia rhey</div>
                    <div class="message-time">2 hours ago</div>
                </div> <!-- end of .info -->

                <div class="actions">
                    <button>
                        <div class="icon">
                            <div class="trash-icon"></div>
                    </button>
                </div> <!-- end of .actions -->
                
                <div class="message-body">
                    <p class="text">>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod</p>
                </div>
            </div> <!-- end of .message-header -->
        `;

        this.messageCard.appendChild(msg);
    }
}