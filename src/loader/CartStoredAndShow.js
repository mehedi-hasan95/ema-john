import { getStoredProduct } from "../utilities/fakedb";

export const CartStoredAndShow = async () => {
    const allProducts = await fetch('products.json');
    const products = await allProducts.json();

    const saveCart = getStoredProduct();
    const initialCart = [];
    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id ===id);
        if(addedProduct) {
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return {products, initialCart};
}