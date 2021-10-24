import {Excel} from "./components/Excel";
import {Header} from "./components/header/Header";

const excel = new Excel('#app', {
    components: [Header]
});

excel.render();
