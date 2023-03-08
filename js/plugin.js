import $ from 'jquery';
class MyPlugin {
    constructor(elem, option) {
        this.elem = $(elem);
        this.options = option;
    }

    init() {
        // plugin code goes here
    }
}

$.fn.myPlugin = (options) => {
    return this.each(() => {
        if (!$.data(this, 'plugin_myPlugin')) {
            $.data(this, 'plugin_myPlugin', new MyPlugin(this, options));
        }
    });
};

class Modal {
    constructor(elem, option) {
        this.elem = $(elem);
        this.options = option;
    }

    init() {
        // modal code goes here
    }
}

$.fn.modal = (options) => {
    return this.each(() => {
        if ($.data(this, 'plugin_modal')) {
            $.data(this, 'plugin_modal', new Modal(this, options));
        }
    });
};

class DropDownMenu {
    constructor(elem, option) {
        this.elem = $(elem);
        this.options = option;
    }

    init() {
        this.cacheDom();
        this.bindEvents();
    }

    bindEvents() {
        this.button.on('click', () => {
            this.rotateIcon();
            this.toggle();
        });
    }
    cacheDom() {
        this.menu = this.elem.find('.dropdown-menu');
        this.button = this.elem.find('.dropdown-button');
        this.icon = document.querySelector('.chevron-down');
    }
    toggle() {
        if (!(this.elem.hasClass('open'))) {
            this.open();
        } else {
            this.close();
        }
    }

    rotateIcon() {
        this.icon.style.transform = 'rotate(180deg)';
    }

    open() {

    }

    close() {
        this.elem.removeClass('open');
    }
}

$.fn.dropdown = (options) => {
    return this.each(() => {
        if ($.data(this, 'plugin_dropdown')) {
            $.data(this, 'plugin_dropdown', new DropDownMenu(this, options));
        }
    });
};
