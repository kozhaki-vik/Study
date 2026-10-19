// Завдання до заняття №26 - Класи в TypeScript

// 1. спосіб без конструктора (readonly поля)
class CanvasNodeInitial {
  readonly x: number = 0;
  readonly y: number = 0;
}

// 1. спосіб з конструктором
class CanvasNodeWithConstructor {
  readonly x: number;
  readonly y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

// 2. клас з методом move
class CanvasNodeMovable {
  x: number = 0;
  y: number = 0;

  move(newX: number, newY: number): void {
    this.x = newX;
    this.y = newY;
  }
}

// 3. клас з опціональним position у конструкторі та гетером
class CanvasNodeWithGetter {
  x: number;
  y: number;

  constructor(position?: { x: number; y: number }) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  // гетер для position
  get position(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}

// 4. клас з приватними полями #x, #y та гетером/сетером для position
export class CanvasNode {
  #x: number;
  #y: number;

  constructor(position?: { x: number; y: number }) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

  // гетер
  get position(): { x: number; y: number } {
    return { x: this.#x, y: this.#y };
  }

  // сетер
  set position(pos: { x: number; y: number }) {
    this.#x = pos.x;
    this.#y = pos.y;
  }

  move(x: number, y: number): void {
    this.#x = x;
    this.#y = y;
  }
}

// перевірка роботи
const node = new CanvasNode({ x: 5, y: 10 });
console.log("Початкова позиція:", node.position);
node.move(20, 30);
console.log("Після move:", node.position);
node.position = { x: 50, y: 60 };
console.log("Після сетера:", node.position);
