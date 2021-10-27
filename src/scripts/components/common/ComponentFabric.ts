import {HeaderComponent} from '../header/header.component';
import {FormulaComponent} from '../formula/formula.component';
import {Dom} from '../../core/dom';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {TableComponent} from '../table/table.component';

export type ComponentTypes = typeof HeaderComponent | typeof FormulaComponent | typeof ToolbarComponent | typeof TableComponent;
export type Component = HeaderComponent | FormulaComponent | ToolbarComponent | TableComponent;

export class ComponentFabric {
    static createComponent(ClassToInstantiate: ComponentTypes, $root: Dom): Component {
        return new ClassToInstantiate($root);
    }
}
