interface Props {
  thumb_src: string;
  title: string;
  price: number;
}

export default function CheckoutSingleItem({
  thumb_src,
  title,
  price,
}: Props) {
  return (
    <>
      <div className="d-flex mb-4">
        <img
          className="w-20 rounded-3 shadow-xs"
          src={thumb_src}
          alt="Product Image"
        />
        <div className="w-40 w-md-70 ps-3 ps-md-4">
          <h6 className="text-lg text-white mb-1">{title}</h6>
        </div>

        <div className="w-10 text-end">
          <p className="text-white mb-0">${price}</p>
        </div>
      </div>
    </>
  );
}
