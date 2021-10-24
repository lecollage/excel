export class Dom {
    private $el: HTMLElement = null;

    constructor(selector: string | HTMLElement) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;
    }

    html(html: string): string | Dom {
        if (typeof html === 'string') {
            this.$el.innerHTML = html;

            return this;
        }

        return this.$el.outerHTML.trim();
    }

    clear(): string | Dom {
        return this.html('');
    }

    on() {

    }

    append(node: HTMLElement | Dom) {
        if (node instanceof Dom) {
            node = node.$el;
        }

        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }

        return this;
    }
}

export function $(selector: string | HTMLElement): Dom {
    return new Dom(selector);
}

$.create = (tagName: string, classes = '') => {
    const el = document.createElement(tagName);

    if (classes) {
        el.classList.add(classes);
    }

    return $(el);
};
