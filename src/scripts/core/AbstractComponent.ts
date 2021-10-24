import {DomListener} from './DomListener';

export abstract class AbstractComponent extends DomListener {
    static className = '';

    abstract toHTML(): string;
}
