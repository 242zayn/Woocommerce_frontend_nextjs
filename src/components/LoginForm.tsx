import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Logo } from "@/images/image";
import Image from "next/image";
import { Button } from "./ui/button";

export default async function LoginForm() {
  const handleForm = async (e: FormData) => {
    "use server";
    const email = e.get("email")?.toString();
    const password = e.get("password")?.toString();
    const newProduct = {
      email,
      password,
    };
    console.log(newProduct);
  };
  return (
    <div className=" h-screen loginbanner relative     ">
      <Link href="/" className=" absolute  ">
        <Image className="  w-[200px] ml-[100px] " src={Logo} alt="" />
      </Link>
      <div className=" w-full h-full flex justify-center items-center ">
        <div className="  relative w-[450px] h-[600px] logCard  flex flex-col justify-center items-center rounded-xl pt-7  ">
          <h1 className=" absolute text-center text-3xl font-extrabold text-[#e30914]  mb-[360px]    ">
            Login
          </h1>

          <form
            className="  w-[80%] h-[300px] flex flex-col justify-center items-center gap-4  "
            action={handleForm}
          >
            <input
              type="email"
              name="email"
              className=" bg-transparent search w-[100%] mx-auto h-12  border border-white  text-white rounded-xl pl-4 "
              placeholder="Email address"
            />
            <div className=" w-full flex flex-row   ">
              <input
                name="password"
                type="password"
                className=" inborder bg-transparent search w-[100%] mx-auto h-12  border-l border-t border-b  rounded-l-xl  border-white only:first-letter:text-red-500 text-white  pl-4 "
                placeholder="Email password"
              />
              <div className=" border-y px-4 py-2 border-r  rounded-tr-2xl rounded-br-2xl cursor-pointer "></div>
            </div>

            <button className="w-[90%] mx-auto mt-[30px] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-600 cursor-pointer   font-bold rounded-md hover:bg-[#e30914] focus:outline-none focus:bg-[#e30914] ">
              {" "}
              Login
            </button>
            <Button className=" ">Login</Button>
          </form>

          <span className="mt-8 text-xs font-light text-center text-white  w-full  ">
            {" "}
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
