import {ICartProduct} from "@/interfaces/ICartProduct";
import IProduct from "@/interfaces/IProduct";
import {defineStore} from "pinia";

interface State {
    productsInCart: ICartProduct[];
}

export const useCartStore = defineStore("cart", {
    state: (): State => ({
        productsInCart: [],
    }),
    actions: {
        addNewProduct(newProduct: ICartProduct): void {
            const productInCart = this.productsInCart.find((product: ICartProduct) =>
                product.id === newProduct.id,
            );
            if (productInCart) productInCart.count++;
            else this.productsInCart.push({...newProduct, count: 1});
        },
        removeProduct(productToRemove: ICartProduct): void {
            this.productsInCart.filter((product: ICartProduct) => {
                return product.id !== productToRemove.id;
            });
        },
        changeProductCount(productToChangeCount: ICartProduct, valueChanger: number): void {
            const product = this.productsInCart.find((productTemp: ICartProduct) =>
                productToChangeCount.id === productTemp.id,
            );

            if (product) {
                product.count += valueChanger;
                if (!product.count) this.removeProduct(product);
            }
        },
    },
    getters: {
        getTotalPrice(): number {
            let price: number = 0;
            this.productsInCart.forEach((product: ICartProduct) => {
                price += product.price * product.count;
            });
            return price;
        },
        getProductPrice(state) {
            return (productToGetPrice: IProduct): number | undefined => {
                const product = state.productsInCart.find((product) =>
                    product.id === productToGetPrice.id,
                );
                if (product) return product.price * product.count;
            };
        },
    },
});