import {AbstractComponent} from '../../core/AbstractComponent';
import {Dom} from '../../core/dom';

export class FormulaComponent extends AbstractComponent {
    static className = 'excel__formula';

    constructor($root: Dom) {
        super($root, [
            'input',
            'click',
        ]);
    }

    toHTML(): string {
        return `
        <div class="info">fx</div>
        <div class="input" contenteditable="true" spellcheck="false"></div>
        `;
    }

    onInput() {
        console.log(`FormulaComponent.onInput >> `, {});
    }

    onClick() {
        console.log(`FormulaComponent.onClick >> `, {});
    }
}
