import ProductType from "../interfaces/Product/Product";

function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="card py-1" style={{ maxWidth: "200px" }}>
      <img
        // variant="top"
        src={product.image}
        className="card-img card-img-top mx-auto "
        style={{ height: "150px", width: "150px" }}
      />
      <div className="card-body d-flex flex-column gap-1 p-1">
        <p className="card-title fs-5 fw-bold text-truncate">{product.title}</p>
        <p className="card-text text-truncate fs-6">{product.description}</p>
        <span className="card-subtitle fw-bold">Price: {product.price}</span>
        <button type="button" className="btn btn-primary ">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
