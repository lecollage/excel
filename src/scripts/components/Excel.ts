import {$, Dom} from "../core/dom";
import {ExcelComponent} from "../core/ExcelComponent";

export class Excel {
    private readonly $el: Dom = null;
    private readonly components: typeof ExcelComponent[] = [];

    constructor(selector: string, options: {components: typeof ExcelComponent[]}) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel');

        this.components.forEach(Component => {
            const $el = $.create('div', Component.className);
            const component = new Component($el);
            $el.html(component.toHTML());
            $root.append($el);
        });

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
    }
}
