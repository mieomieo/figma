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
      <div className=" md:mb-10 sm:mb-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="mt-[18px]">
          <h3 className="mb-2 text-[#414F42]">{title}</h3>
          <p className="mb-[6px] text-[#3F514B]">{description}</p>
          <div className="mb-5">
            <span className="line-through mr-[6px] text-[#72776C] text-[13px]">
              ${price}
            </span>
            <span className="text-[#3F514B] text-lg">${sale}</span>
          </div>
          <div>
            {lessons.map((lesson, index) => (
              <div key={index} className="lesson border-b-[1px] p-[3px]">
                <span className="text-[15px] mr-6 text-[#72776C] ">
                  {`WEEK ${index + 1}`}
                </span>
                <span className="text-[14px]"> {lesson}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
