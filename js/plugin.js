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
