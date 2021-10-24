import {AbstractComponent} from '../../core/AbstractComponent';

export class FormulaComponent extends AbstractComponent {
    static className = 'excel__formula';

    toHTML(): string {
        return `
        <div class="info">fx</div>
        <div class="input" contenteditable="true" spellcheck="false"></div>
        `;
    }
}
