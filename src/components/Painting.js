import PropTypes from "prop-types";
import defaultImage from "./default.jpg";

const Painting = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = "не відомо",
  price,
  quantity,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Ціна: {price} кредитів</p>
      <p>Доступність: {quantity < 10 ? "закінчується" : "є в наявності"}</p>
      <button type="button">Додати до корзини</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  profileUrl: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default Painting;
