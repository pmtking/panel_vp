import { GlobalStateContext } from "@/libs/GlobalStateProvider";
import { Button } from "@heroui/button";
import { Add } from "iconsax-react";
import { useContext } from "react";

const TabelInbunds = ({ type }: any) => {
  const context = useContext(GlobalStateContext);

  // Ensure the context is not undefined
  if (!context) {
    throw new Error(
      "GlobalStateContext must be used within GlobalStateProvider"
    );
  }

  const { isAdmin } = context;
  console.log("ddd", isAdmin);

  return (
    <div className="py-5 px-5 bg-background/20 shadow shadow-primary/10">
      {type === 'admin' ? (
        <div className="flex "></div>
      ) : (
        <>
          <p>{isAdmin}</p>
        </>
      )}
    </div>
  );
};

export default TabelInbunds;
