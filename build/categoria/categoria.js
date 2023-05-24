"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
class Categoria {
    constructor(id, name) {
        this._id = 0;
        this._name = "";
        this.id = id;
        this.name = name;
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
}
exports.Categoria = Categoria;
