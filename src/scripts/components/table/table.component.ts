import {AbstractComponent} from '../../core/AbstractComponent';

export class TableComponent extends AbstractComponent {
    static className = 'excel__table';

    toHTML() {
        return createTable();
    }
}

const CODES = {
    A: 65,
    Z: 90
};

const toColumn = (col: string) => {
    return `
    <div class="cell">${col}</div>
  `;
};

const toChar = (_: string, index: number) => {
    return String.fromCharCode(CODES.A + index);
};

const createTable = (rowsCount = 15): string => {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows: string[] = [];

    const cells = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('');

    rows.push(createRow(cells));

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow());
    }

    return rows.join('');
};

const createRow = (content: string = '') => {
    return `
        <div class="row">
            <div class="row-info"></div>
            <div class="row-data row-header">
                ${content}
            </div>
        </div>
    `;
};
