import { GlobalStateContext } from "@/libs/GlobalStateProvider";
import { Button } from "@heroui/button";
import { useContext } from "react";

const TabelInbunds = () => {
  const context = useContext(GlobalStateContext);

  // Ensure the context is not undefined
  if (!context) {
    throw new Error("GlobalStateContext must be used within GlobalStateProvider");
  }

  const { isAdmin } = context;
  console.log('ddd' , isAdmin)

  return (
    <div className="py-5 px-5 bg-background/20 shadow shadow-primary/10">
      {isAdmin ? (
        <>
          <Button>Add Inbound</Button>
          <div className="mt-5">
            {/* Add your table content here */}
            Table Data for Admin
          </div>
        </>
      ) : (
        <>
          <Button>Add Client</Button>
        </>
      )}
    </div>
  );
};

export default TabelInbunds;