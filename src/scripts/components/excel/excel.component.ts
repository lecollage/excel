import {$, Dom} from '../../core/dom';
import {AbstractComponent} from '../../core/AbstractComponent';
import {ComponentFabric, ComponentTypes} from '../common/ComponentFabric';

export class ExcelComponent {
    private readonly $el: Dom = null;
    private readonly components: typeof AbstractComponent[] = [];

    constructor(selector: string, options: {components: typeof AbstractComponent[]}) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel');

        this.components.forEach((Component: ComponentTypes)  => {
            const $el = $.create('div', Component.className);
            const component: AbstractComponent = ComponentFabric.createComponent(Component, $el);

            $el.html(component.toHTML());
            $root.append($el);
        });

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
    }
}
