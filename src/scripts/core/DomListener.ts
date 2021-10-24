import {Dom} from "./dom";

export class DomListener {
    $root: Dom = null;

    constructor($root: Dom) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener!`);
        }

        this.$root = $root;
    }
}
