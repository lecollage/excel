import {ExcelComponent} from './components/excel/excel.component';
import {HeaderComponent} from './components/header/header.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {FormulaComponent} from './components/formula/formula.component';

const excel = new ExcelComponent('#app', {
    componentsToInstantiate: [
        HeaderComponent,
        ToolbarComponent,
        FormulaComponent
    ]
});

excel.render();
