class Storage {
  #items; // Оголошення приватної властивості

  constructor(initialItems) {
    this.#items = initialItems; // Ініціалізація приватної властивості
  }

  getItems() {
    return this.#items; // Повертаємо масив товарів
  }

  addItem(newItem) {
    this.#items.push(newItem); // Додаємо новий товар
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove); // Видаляємо товар
  }
}

// Код для перевірки
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]