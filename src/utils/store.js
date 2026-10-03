export const money = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    value,
  );
export const unitPrice = (product) => product.salePrice ?? product.price;
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
export const variantKey = (id, color, switches) =>
  JSON.stringify([id, color, switches]);
export const cartCount = (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0);
export const subtotal = (items) =>
  items.reduce(
    (sum, item) => sum + Math.round(item.unitPrice * 100) * item.quantity,
    0,
  ) / 100;
export const productCount = (items, id) =>
  items
    .filter((item) => item.productId === id)
    .reduce((sum, item) => sum + item.quantity, 0);
