import ProductCard from "./ProductCard.jsx";

export default function ProductList({
  products,
  layout = "All",
  page = 1,
  pageSize = 10,
  featuredOnly = false,
}) {
  const collection = products.filter((product) =>
    featuredOnly
      ? product.featuredProduct
      : layout === "All" || product.layout === layout,
  );
  const displayedProducts = collection.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );
  return (
    <div className="row g-4 product-grid">
      {displayedProducts.map((product) => (
        <div
          className={
            featuredOnly
              ? "col-12 col-md-6 col-lg-4"
              : "col-12 col-sm-6 col-lg-4"
          }
          key={product.id}
        >
          <ProductCard product={product} headingLevel={featuredOnly ? 3 : 2} />
        </div>
      ))}
    </div>
  );
}
