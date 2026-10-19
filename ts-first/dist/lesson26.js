"use strict";
// Завдання до заняття №26 - Класи в TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasNode = void 0;
// 1. спосіб без конструктора (readonly поля)
class CanvasNodeInitial {
    x = 0;
    y = 0;
}
// 1. спосіб з конструктором
class CanvasNodeWithConstructor {
    x;
    y;
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
// 2. клас з методом move
class CanvasNodeMovable {
    x = 0;
    y = 0;
    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}
// 3. клас з опціональним position у конструкторі та гетером
class CanvasNodeWithGetter {
    x;
    y;
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
    #x;
    #y;
    constructor(position) {
        this.#x = position?.x ?? 0;
        this.#y = position?.y ?? 0;
    }
    // гетер
    get position() {
        return { x: this.#x, y: this.#y };
    }
    // сетер
    set position(pos) {
        this.#x = pos.x;
        this.#y = pos.y;
    }
    move(x, y) {
        this.#x = x;
        this.#y = y;
    }
}
exports.CanvasNode = CanvasNode;
// перевірка роботи
const node = new CanvasNode({ x: 5, y: 10 });
console.log("Початкова позиція:", node.position);
node.move(20, 30);
console.log("Після move:", node.position);
node.position = { x: 50, y: 60 };
console.log("Після сетера:", node.position);
//# sourceMappingURL=lesson26.js.map