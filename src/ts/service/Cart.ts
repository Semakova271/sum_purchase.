import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    // Метод для подсчёта общей стоимости без скидки
    calculateTotal(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    // Метод для подсчёта общей стоимости со скидкой (скидка передаётся как параметр)
    calculateTotalWithDiscount(discount: number): number {
        const total = this.calculateTotal();
        return total - (total * discount / 100);
    }

    // Метод для удаления товара из корзины по его id
    removeItemById(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}
