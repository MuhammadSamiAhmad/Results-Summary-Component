const Display = () => {
  return (
    <div
      className="flex flex-col items-center justify-center size-full
    bg-gradient-to-b from-cobalt-blue to-violet-blue text-center mobile:rounded-3xl rounded-b-3xl"
    >
      <h1 className="mt-8 mb-8 text-gray-400 font-medium text-2xl">
        Your Result
      </h1>
      <div
        id="circle"
        className="relative mb-10 size-52 rounded-full bg-gradient-to-b from-violet-blue to-cobalt-blue flex flex-col"
      >
        <div id="score" className="absolute top-[28%] left-[30%]">
          <h1 className="text-white font-bold text-7xl">76</h1>
          <p className="text-gray-400 font-medium">of 100</p>
        </div>
      </div>
      <div id="note" className="mb-16">
        <h1 className="font-medium text-gray-200 text-3xl">Great</h1>
        <p className="text-paragraph mt-5 text-gray-400 font-medium">
          You scored higher than 65% of <br /> the people who have taken <br />{" "}
          these tests.
        </p>
      </div>
    </div>
  );
};

export default Display;
