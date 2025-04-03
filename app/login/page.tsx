import LoginComponents from "@/components/LoginConponents/page";
import useAuth from "@/hooks/useAuth";
import { Button } from "@heroui/button";

const LoginPage = () => {
  const { login } = useAuth();
  const HanddleLogin = () => {};
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full h-[70vh]">
        <div className="flex justify-center items-center gap-2 h-full">
          <LoginComponents type={'login'} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
