import { useEffect, useState } from "react";

export default function useLogin(){
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  return {isLogin, setIsLogin};
}