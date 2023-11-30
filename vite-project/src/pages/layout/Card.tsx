type Props = {
  content: {
    title: string;
    description: string;
    image: string;
    price: number;
    sale: number;
    lessons: string[];
  };
};

const Card = ({ content }: Props) => {
  const { title, description, image, price, sale, lessons } = content;
  return (
    <>
      <div className="w-80">
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <span>{price} </span>
        <span>{sale}</span>
      </div>
      {lessons.map((lesson) => lesson)}
    </>
  );
};
export default Card;
