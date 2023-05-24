"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargo = void 0;
class Cargo {
    constructor(id, name, func) {
        this._id = 0;
        this._name = "";
        this._function = "";
        this.id = id;
        this.name = name;
        this.function = func;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set function(func) {
        this._function = func;
    }
    get function() {
        return this._function;
    }
}
exports.Cargo = Cargo;
