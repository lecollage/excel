import {AbstractComponent} from '../../core/AbstractComponent';
import {Dom} from '../../core/dom';

export class ToolbarComponent extends AbstractComponent {
    static className = 'excel__toolbar';

    constructor($root: Dom) {
        super($root, {
            name: 'toolbar',
        });
    }

    private readonly buttons = [
        'format_align_left',
        'format_align_center',
        'format_align_right',
        'format_bold',
        'format_italic',
        'format_underlined',
    ];

    toHTML(): string {
        return this.buttons.map(button => `
            <div class="button">
                <i class="material-icons">${button}</i>
            </div>
        `).join('');
    }
}
