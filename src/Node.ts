export default class Node {
    private _value: any;
    public next : Node | undefined;

    constructor(value: any = null) {
        this._value = value;
        this.next = undefined;
    }

    public get value() {
        return this._value;
    }

    public set value(val) {
        this._value = val;
    }
}
