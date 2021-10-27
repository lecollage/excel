import {DomListener} from './DomListener';
import {Dom} from './dom';

export abstract class AbstractComponent extends DomListener {
    static className = '';
    private name: string = '';

    protected constructor($root: Dom, options: {name: string, listeners?: string[]}) {
        super($root, options.listeners);

        this.name = options.name || '';
    }

    abstract toHTML(): string;

    init() {
        this.initDOMListeners();
    }

    destroy() {
        this.removeEventListeners();
    }
}
