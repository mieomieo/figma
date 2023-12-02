import { useEffect, useState } from "react";
import { floralDecor } from "../../be";
type FloralDecor = {
  title: string;
  menu: {
    Floral: string;
    "Decor selection"?: undefined;
    "Hair & makeup"?: undefined;
    "Lighting & Sound"?: undefined;
  }[];
};
const FloralDecor = () => {
  const [data, setData] = useState<FloralDecor>();
  useEffect(() => {
    setData(floralDecor);
  }, []);

  return (
    <>
      <div className="bg-[#FFFDF4] ">
        <h2 className="mt-[66px] flex justify-center ">Floral & Decor</h2>
        <div className="mb-[66px]">
          <div className="flex justify-center ">
            <div className="w-[39%]">
              <img
                src="https://s3-alpha-sig.figma.com/img/cb03/02c4/23c7b2e265bc5524b5a09b80648692a1?Expires=1702252800&Signature=jkYSJueEMF3NnDeIcVPXppXIEw-hZb37X08BjNmRD8T3nnBni8jIqRwWxryaNehTZfpiGSRiOgmwda2X82BJxNn5WlOIz6lG56c5lJsAlRRNQENNxokZhHT~WALB-xCuI0ONU9U1ydHwM~tU32~iHLCphG-h3ryoklua3pimBumO7f~EncY3XB25B6AfPd3DmOERQzOnM0chAJe9B05UmSLfTOH-15m9hmH0zeAEKTh~s5vRrtMKvfdCCbpMU96HV19ASuDWZ5bCHyuN3CSHdPQ~EKdw5982hdFAHoudoEAcpfkq1bNYb~xOCJeUyXdI~8e~fLQ8REkU89Haw-JIuQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="w-[39%]">
              <img
                src="https://s3-alpha-sig.figma.com/img/4b3f/4060/dc3186476e2d0312a22156321288d864?Expires=1702252800&Signature=avRNj1tYfSuSJXlxHuzSVNbycxEUHAcR2hAuUbXtW4AnS830HoyMuUj87u4EEg-NUL5I-dQj4AX0ENBqJgeig-SHzazWfVjV5fI1w003cwybfy5hUWm5L-q8htBM9Auwgw2LWFhV~86IkPvhV7LY9I1myvtZgmMsJnO-1gInpkiMf4VZLK9-Zekt3f5h8Yy2~TeQnFV8kPCSco2NvMEvGOfTKvx6WMw-f8CJ8m4GK1JbKy68nk7hdyqRM-WZ1MWzM8pSgS9O~PgC9Z5onpeao~vYivJ0A1ooz1Tz1E6rjWggsMB6Teo6Hg1ue6Pj2Wzsk7KXAwT~Aa9-qgZ6IkhfHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FloralDecor;
