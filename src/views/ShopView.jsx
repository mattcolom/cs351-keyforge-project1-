import { useState } from "react";
import ProductList from "../components/ProductList.jsx";

export default function ShopView({ products }) {
  const [layout, setLayout] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const count = products.filter(
    (product) => layout === "All" || product.layout === layout,
  ).length;
  const pages = Math.ceil(count / pageSize);
  return (
    <section className="container section-space">
      <p className="eyebrow">THE KEYFORGE COLLECTION</p>
      <h1>Find your kind of keys.</h1>
      <p className="page-intro">
        From compact companions to full-size workhorses. All built for a better
        daily feel.
      </p>
      <div className="shop-toolbar">
        <div
          className="layout-filters"
          role="group"
          aria-label="Filter by keyboard layout"
        >
          {["All", "60%", "65%", "75%", "TKL", "100%"].map((option) => (
            <button
              key={option}
              className={`layout-filter ${layout === option ? "selected" : ""}`}
              type="button"
              aria-pressed={layout === option}
              onClick={() => {
                setLayout(option);
                setPage(1);
              }}
            >
              {option === "All" ? "All keyboards" : option}
            </button>
          ))}
        </div>
        <p className="results-count" aria-live="polite">
          {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, count)} of{" "}
          {count} keyboards
        </p>
      </div>
      <ProductList
        products={products}
        layout={layout}
        page={page}
        pageSize={pageSize}
      />
      <nav className="pagination-wrap" aria-label="Product pages">
        <button
          className="btn btn-outline-dark"
          type="button"
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
            window.scrollTo(0, 0);
          }}
        >
          Previous
        </button>
        {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            className={`page-number ${p === page ? "selected" : ""}`}
            type="button"
            aria-label={`Page ${p}`}
            aria-current={p === page ? "page" : undefined}
            onClick={() => {
              setPage(p);
              window.scrollTo(0, 0);
            }}
          >
            {p}
          </button>
        ))}
        <button
          className="btn btn-outline-dark"
          type="button"
          disabled={page === pages}
          onClick={() => {
            setPage(page + 1);
            window.scrollTo(0, 0);
          }}
        >
          Next
        </button>
      </nav>
    </section>
  );
}
