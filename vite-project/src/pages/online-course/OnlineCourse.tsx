import { onlineCouses } from "../../../be";
import Card from "../../components/Card";
import "./index.scss";
import { useEffect, useState } from "react";

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
      <div className=" px-[194px] pt-[70px] pb-[30px] bg-[#FFFDF4]">
        <div className="mb-10 lg:w-[519px] ">
          <h2 className=" sm:text-[35px] lg:text-[45px]   text-[#374639] mb-5">
            {data?.title}
          </h2>
          <p className="text-[19px] text-[#3F514B]">{data?.description}</p>
        </div>
        <div className="grid  xl:grid-cols-4 xl:gap-x-[23px] lg:grid-cols-2 lg:gap-x-[23px] mb-10 ">
          {data?.cards.map((item, index) => {
            return <Card key={index} content={item} />;
          })}
        </div>
      </div>
    </>
  );
};
export default OnlineCourse;
