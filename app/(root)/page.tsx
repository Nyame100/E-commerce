import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="px-4 py-2">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default SetupPage;
