import "./App.css";
import FloralDecor from "./pages/floral-decor/FloralDecor";
import OnlineCourse from "./pages/online-course/OnlineCourse";

function App() {
  return (
    <>
      <div className=" poppins-font section-1 mb-36">
        <OnlineCourse />
      </div>
      <div className=" instrument-font section-2 mb-36">
        <FloralDecor />
      </div>
    </>
  );
}

export default App;
