class StringBuilder {
  #value; // Оголошення приватної властивості

  constructor(initialValue) {
    this.#value = initialValue; // Ініціалізація приватної властивості
  }

  getValue() {
    return this.#value; // Повертає поточне значення
  }

  padEnd(str) {
    this.#value += str; // Додає рядок до кінця значення
  }

  padStart(str) {
    this.#value = str + this.#value; // Додає рядок на початок значення
  }

  padBoth(str) {
    this.#value = str + this.#value + str; // Додає рядок на початок і в кінець значення
  }
}

// Код для перевірки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
