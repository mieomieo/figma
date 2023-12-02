import { useState } from "react";
import DropdownButton from "./buttons/DropdownButton";

type Props = {
  data: { [key: string]: string } | undefined;
};

const DropDown = ({ data }: Props) => {
  const [toggles, setToggles] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (key: string) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [key]: !prevToggles[key],
    }));
  };

  return (
    <>
      <div>
        <ul>
          {data &&
            Object.entries(data).map(([key, value]) => (
              <div className="border-t-[1px] p-[18px]  ">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => handleToggle(key)}
                >
                  <li key={key} className="text-[#462B20] text-[26px]">
                    {key}
                  </li>
                  <span className="w-3 h-3">
                    <DropdownButton />
                  </span>
                </div>
                {toggles[key] && (
                  <div className="inter-font description-text text-[15px] mt-4 mb-6 ">
                    {value}
                  </div>
                )}
              </div>
            ))}
        </ul>
      </div>
    </>
  );
};
export default DropDown;
