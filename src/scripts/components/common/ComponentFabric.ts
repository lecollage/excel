import {HeaderComponent} from '../header/header.component';
import {FormulaComponent} from '../formula/formula.component';
import {Dom} from '../../core/dom';

export type ComponentTypes = typeof HeaderComponent | typeof FormulaComponent;
export type Component = HeaderComponent | FormulaComponent;

export class ComponentFabric {
    static createComponent(ClassToInstantiate: ComponentTypes, root: Dom): Component {
        return new ClassToInstantiate(root);
    }
}
