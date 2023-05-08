import "./cardProduct.scss"

interface Props {
  thumb_src: Array<string>;
  id: string;
  title: string;
  description: string;
  price: number;
  position: string;
}

export default function CardProduct({
  thumb_src,
  id,
  title,
  description,
  price,
  position,
}: Props) {
  const classList = "card-body " + "text-" + position;

  return (
    <>
      <div className="card card-product border border-white mb-5 shadow-xs">
        <a href={`/product/${id}`}>
          <div className="height-300">
            <img
              className="w-100 h-100 rounded-top"
              src={thumb_src[0]}
              alt="Product Image"
            />
          </div>
          <div className={classList}>
            {title && <h5 className="font-weight-bold product-title">{title}</h5>}

            {description && <p className="text-body text-sm">{description}</p>}

            {price && (
              <p className="mb-0 text-sm text-body mt-1 mb-3">
                {price} VND
              </p>
            )}
          </div>
        </a>
      </div>
    </>
  );
}
