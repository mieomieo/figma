import "./App.css";
import FloralDecor from "./pages/FloralDecor";
import OnlineCourse from "./pages/OnlineCourse";

function App() {
  return (
    <>
      <div className="section-1 mb-36">
        <OnlineCourse />
      </div>
      <div className="section-2">
        <FloralDecor />
      </div>
    </>
  );
}

export default App;
