import {DomListener} from './DomListener';

export abstract class AbstractComponent extends DomListener {
    static className = '';

    abstract toHTML(): string;

    init() {
        this.initDOMListeners();
    }

    destroy() {
        this.removeEventListeners();
    }
}
