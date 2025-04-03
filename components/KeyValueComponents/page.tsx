import { KeyValueComponentType } from "@/types";

const KeyValueComponents = ({ name, value }: KeyValueComponentType) => {
  return (
    <>
      <h1 className="flex items-center justify-start gap-2 text-sm">
        {name} :
        <span className=" text-sm text-primary bg-primary/10 px-6 py-1 rounded-lg border border-primary">
         {value}
        </span>
      </h1>
    </>
  );
};

export default KeyValueComponents;
