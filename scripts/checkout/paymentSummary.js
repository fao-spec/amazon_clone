import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";

export function renderPaymentSummary() {
    let productPriceCent = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCent += product.priceCents * cartItem.quantity 

        
    });

    console.log(productPriceCent)
}