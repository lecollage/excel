import {$, Dom} from '../../core/dom';
import {AbstractComponent} from '../../core/AbstractComponent';
import {ComponentFabric, ComponentTypes} from '../common/ComponentFabric';

export class ExcelComponent {
    private readonly $el: Dom = null;
    private readonly componentsToInstantiate: typeof AbstractComponent[] = [];

    private components: {$el: Dom, component: AbstractComponent}[] = [];

    constructor(selector: string, options: {componentsToInstantiate: typeof AbstractComponent[]}) {
        this.$el = $(selector);
        this.componentsToInstantiate = options.componentsToInstantiate || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel');

        this.components = this.componentsToInstantiate.map((Component: ComponentTypes)  => {
            const $el = $.create('div', Component.className);
            const component: AbstractComponent = ComponentFabric.createComponent(Component, $el);

            return {$el, component};
        });

        this.components.forEach(({$el, component})  => {
            $el.html(component.toHTML());
            $root.append($el);
        });

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
        this.components.forEach(({component}) => component.init());
    }
}
