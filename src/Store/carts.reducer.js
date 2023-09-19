const cartitems = {
  totalProducts: 0,
  totalPrice: 0,
  products: [],
};
function cart(old = cartitems, newData) {
  if (newData.type == "Cart-Item") {
    old.totalProducts += newData.payload.qty;

    old.totalPrice += newData.payload.price * newData.payload.qty;

    old.products.push(newData.payload);

    return { ...old };
  } else if (newData.type == "Remove-Item") {
    let index = newData.payload.index;
    old.totalProducts -= newData.payload.item.qty;

    old.totalPrice -= newData.payload.item.price * newData.payload.item.qty;

    old.products[index].qty = 1;
    old.products.splice(index, 1);

    return { ...old };
  } else if (newData.type == "Increment") {
    old.products[newData.payload].qty++;
    old.totalProducts++;

    old.totalPrice += old.products[newData.payload].price;

    return { ...old };
  } else if (newData.type == "decrement") {
    old.products[newData.payload].qty--;
    old.totalProducts--;

    old.totalPrice -= old.products[newData.payload].price;

    return { ...old };
  } else if (newData.type == "LOGIN") {
    return { ...newData.payload.cart };
  } else if (newData.type == "CHECKOUT") {
    return { ...cartitems };
  } else {
    return { ...old };
  }
}

export default cart;
