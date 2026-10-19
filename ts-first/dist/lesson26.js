"use strict";
// Завдання до заняття №26 - Класи в TypeScript
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CanvasNode_x, _CanvasNode_y;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasNode = void 0;
// 1. спосіб без конструктора (readonly поля)
class CanvasNodeInitial {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
// 1. спосіб з конструктором
class CanvasNodeWithConstructor {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
// 2. клас з методом move
class CanvasNodeMovable {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}
// 3. клас з опціональним position у конструкторі та гетером
class CanvasNodeWithGetter {
    constructor(position) {
        this.x = position?.x ?? 0;
        this.y = position?.y ?? 0;
    }
    // гетер для position
    get position() {
        return { x: this.x, y: this.y };
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
// 4. клас з приватними полями #x, #y та гетером/сетером для position
class CanvasNode {
    constructor(position) {
        _CanvasNode_x.set(this, void 0);
        _CanvasNode_y.set(this, void 0);
        __classPrivateFieldSet(this, _CanvasNode_x, position?.x ?? 0, "f");
        __classPrivateFieldSet(this, _CanvasNode_y, position?.y ?? 0, "f");
    }
    // гетер
    get position() {
        return { x: __classPrivateFieldGet(this, _CanvasNode_x, "f"), y: __classPrivateFieldGet(this, _CanvasNode_y, "f") };
    }
    // сетер
    set position(pos) {
        __classPrivateFieldSet(this, _CanvasNode_x, pos.x, "f");
        __classPrivateFieldSet(this, _CanvasNode_y, pos.y, "f");
    }
    move(x, y) {
        __classPrivateFieldSet(this, _CanvasNode_x, x, "f");
        __classPrivateFieldSet(this, _CanvasNode_y, y, "f");
    }
}
exports.CanvasNode = CanvasNode;
_CanvasNode_x = new WeakMap(), _CanvasNode_y = new WeakMap();
// перевірка роботи
const node = new CanvasNode({ x: 5, y: 10 });
console.log("Початкова позиція:", node.position);
node.move(20, 30);
console.log("Після move:", node.position);
node.position = { x: 50, y: 60 };
console.log("Після сетера:", node.position);
