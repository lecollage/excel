import {AbstractComponent} from '../../core/AbstractComponent';
import {Dom} from '../../core/dom';

export class TableComponent extends AbstractComponent {
    static className = 'excel__table';

    constructor($root: Dom) {
        super($root,  {
            name: 'table',
            listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
        });
    }

    toHTML() {
        return createTable(25);
    }

    onClick() {
        console.log(`onClick >> `);
    }

    onMousedown() {
        console.log(`onMousedown >> `);
    }

    onMousemove() {
        console.log(`onMousemove >>  `);
    }

    onMouseup() {
        console.log(`onMouseup >>  `);
    }
}

const CODES = {
    A: 65,
    Z: 90
};

const createTable = (rowsCount = 15): string => {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows: string[] = [];

    const cellsHeader = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('');

    rows.push(createRow(cellsHeader, null));

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('');

        rows.push(createRow(cells, i + 1));
    }

    return rows.join('');
};

const createRow = (content: string = '', index: number) => {
    return `
        <div class="row">
            <div class="row-info">${index ?? ''}</div>
            <div class="row-data ${index === null ? 'row-header' : ''}">${content}</div>
        </div>
    `;
};

const toCell = () => {
    return `<div class="cell" contenteditable="true"></div>`;
};

const toColumn = (col: string) => {
    return `
    <div class="cell">
        ${col}
        <div class='column-resize-mark'></div>
    </div>
  `;
};

const toChar = (_: string, index: number) => {
    return String.fromCharCode(CODES.A + index);
};
