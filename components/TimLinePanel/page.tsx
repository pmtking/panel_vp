import KeyValueComponents from "../KeyValueComponents/page";

const TimeLinePanel = () => {
  return (
    <>
      <div className=" flex justify-between items-center bg-background/20 shadow-lg shadow-primary/10 border border-primary/20 rounded-lg px-10 py-10  ">
        <div className="w-[50%] flex flex-col gap-5">
          <KeyValueComponents name={"Total Sent/Receved"} value={"1.44TB"} />
          <KeyValueComponents name={"Total Sent/Receved"} value={"1.44TB"} />
        </div>
        <div className="w-[50%] flex flex-col gap-5">
          <KeyValueComponents name={"Total Sent/Receved"} value={"1.44TB"} />
          <KeyValueComponents name={"Total Sent/Receved"} value={"1.44TB"} />
        </div>
      </div>
    </>
  );
};

export default TimeLinePanel;
+-663;
