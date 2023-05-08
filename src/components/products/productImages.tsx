interface Props {
  image: string;
}

export default function ProductImages({ image }: Props) {
  return (
    <>
      <div className="col-12 col-lg-6">
        <img
          className="w-90 rounded-2"
          src={image}
          alt="Product Image"
        />
      </div>
    </>
  );
}
