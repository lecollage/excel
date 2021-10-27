import {Dom} from './dom';

export class DomListener {
    $root: Dom = null;
    listeners: string[] = [];

    constructor(
        $root: Dom,
        listeners: string[] = []
    ) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener!`);
        }

        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const methodName = this.getMethodName(listener);
            const method = (this as any)[methodName];

            if (!(typeof method === 'function')) {
                throw new Error(`Method ${methodName} is not implemented`);
            }

            (this as any)[methodName] = (this as any)[methodName].bind(this);

            this.$root.on(listener, (this as any)[methodName]);
        });
    }

    removeEventListeners() {
        this.listeners.forEach(listener => {
            const methodName = this.getMethodName(listener);
            const method = (this as any)[methodName];

            this.$root.off(methodName, method.bind(this));
        });
    }

    private getMethodName(method: string) {
        const capitalised = this.capitalise(method);

        return `on${capitalised}`;
    }

    private capitalise(word: string): string {
        return word[0].toUpperCase() + word.substring(1);
    }
}
