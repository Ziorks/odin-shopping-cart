import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { description, image, price, title } = product;

  return (
    <>
      <div>Product Card</div>;
      <img src={image} alt={title} style={{ width: "50px" }} />
      <p>{price}</p>
      <p>{description}</p>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
  }),
};

export default ProductCard;
