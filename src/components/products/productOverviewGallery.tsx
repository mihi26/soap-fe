import ProductRating from "./productRating";
import ProductImages from "./productImages";

interface Props {
  title: string;
  price: number;
  image: string;
  rating: number;
  description: string;
}

export default function productOverviewGallery({
  title,
  price,
  image,
  rating,
  description,
}: Props) {
  return (
    <>
      <div className="card card-product card-plain">
        <div className="row">
          <ProductImages image={image} />
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            {title && <h2>{title}</h2>}
            {price != 0 && (
              <>
                <div className="d-flex mb-3">
                  <h3 className="font-weight-normal">${price}</h3>
                  <input className="opacity-0" defaultValue={price} />
                </div>
              </>
            )}
            <ProductRating rating={rating} />
            <p className="mt-4">{description}</p>
            <div className="d-flex align-items-center mt-4">
              <button className="btn btn-primary btn-lg mb-0 me-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
