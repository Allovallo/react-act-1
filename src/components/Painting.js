const Painting = ({ url, title, profileUrl, author, price }) => {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Ціна: {price} кредитів</p>
      <p>Доступність: закінчується або є в наявності</p>
      <button type="button">Додати до корзини</button>
    </div>
  );
};

export default Painting;
