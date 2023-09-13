import Button from "@/components/Button";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className=" p-4 pt-2 text-cyan-500">Hi</div>
      <Button variant="ghost" isLoading={true}>
        {" "}
        Me
      </Button>
    </>
  );
};

export default page;
