import Display from "./components/Display";
import SummaryList from "./components/SummaryList";

function App() {
  return (
    <>
      <div className="h-full lg:w-[900px] lg:mx-auto lg:mt-[20%] lg:mb-[10%] xl:mt-[10%] md:w-[700px] md:mx-auto md:mt-[30%] flex flex-col items-center justify-center shadow-2xl rounded-3xl mobile:flex-row">
        <Display />
        <SummaryList />
      </div>
    </>
  );
}

export default App;
