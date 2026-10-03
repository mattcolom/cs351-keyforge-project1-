import { asset, money, unitPrice } from "../utils/store.js";

export default function ProductCard({
  product,
  detailed = false,
  headingLevel = 2,
  children,
}) {
  const Heading = `h${headingLevel}`;
  if (detailed)
    return (
      <div className="row g-4 g-lg-5 product-detail">
        <div className="col-lg-7">
          <div className="detail-image">
            <span className="eyebrow image-caption">
              KEYFORGE / {product.layout} COLLECTION
            </span>
            <img
              src={asset(product.image)}
              alt={`${product.name} keyboard in ${product.imageColor}`}
            />
            <span className="image-note">
              Shown in {product.imageColor} · product illustration
            </span>
          </div>
        </div>
        <div className="col-lg-5">
          <p className="eyebrow">{product.layout} MECHANICAL KEYBOARD</p>
          <h1>{product.name}</h1>
          <p className="product-rating">
            <span aria-hidden="true">★</span> {product.rating.toFixed(1)}{" "}
            <span className="text-muted">
              ({product.numberOfReviews} reviews)
            </span>
          </p>
          <div className="detail-price">
            {money(unitPrice(product))}{" "}
            {product.salePrice != null && <del>{money(product.price)}</del>}
          </div>
          <p className="detail-description">{product.description}</p>
          {children}
        </div>
      </div>
    );
  return (
    <article className="product-card h-100">
      <a
        href={`#product/${product.id}`}
        className="product-link"
        aria-label={`View ${product.name}`}
      >
        <div className="card-image">
          {product.salePrice != null ? (
            <span className="product-badge">
              SAVE {money(product.price - product.salePrice)}
            </span>
          ) : (
            product.newArrival && (
              <span className="product-badge">NEW ARRIVAL</span>
            )
          )}
          <img
            src={asset(product.image)}
            alt={`${product.name} keyboard in ${product.imageColor}`}
            loading="lazy"
          />
          <span className="view-product">View keyboard</span>
        </div>
        <div className="card-content">
          <div className="d-flex justify-content-between gap-2">
            <span className="eyebrow">
              {product.layout} /{" "}
              {product.connectivity.length > 1 ? "WIRELESS" : "WIRED"}
            </span>
            <span
              className="product-rating"
              role="img"
              aria-label={`Rated ${product.rating} out of 5`}
            >
              ★ {product.rating.toFixed(1)}
            </span>
          </div>
          <Heading className="product-name">{product.name}</Heading>
          <p>{product.description}</p>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <span className="card-price">
              {money(unitPrice(product))}{" "}
              {product.salePrice != null && <del>{money(product.price)}</del>}
            </span>
            <span className="color-label">{product.colors.length} colors</span>
          </div>
        </div>
      </a>
    </article>
  );
}
