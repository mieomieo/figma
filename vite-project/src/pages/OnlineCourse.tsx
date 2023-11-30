import { onlineCouses } from "../../be";
import { useEffect, useState } from "react";
import Card from "./layout/Card";
type onlineCouses = {
  title: string;
  description: string;
  cards: {
    title: string;
    description: string;
    image: string;
    price: number;
    sale: number;
    lessons: string[];
  }[];
};

const OnlineCourse = () => {
  const [data, setData] = useState<onlineCouses>();

  useEffect(() => {
    setData(onlineCouses);
  }, []);
  return (
    <>
      <h2>{data?.title}</h2>
      <p>{data?.description}</p>
      <div>
        {data?.cards.map((item) => {
          return <Card content={item} />;
        })}
      </div>
    </>
  );
};
export default OnlineCourse;
