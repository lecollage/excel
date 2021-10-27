import {AbstractComponent} from '../../core/AbstractComponent';
import {Dom} from '../../core/dom';

export class HeaderComponent extends AbstractComponent {
    static className = 'excel__header';

    constructor($root: Dom) {
        super($root, {
            name: 'header',
        });
    }

    toHTML() {
        return `
      <input type="text" class="input" value="Новая таблица" />
      <div>
        <div class="button">
          <i class="material-icons">delete</i>
        </div>

        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>
      </div>`;
    }
}
