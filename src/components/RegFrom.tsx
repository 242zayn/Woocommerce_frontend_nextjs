// "use client";
// /* eslint-disable react/no-unescaped-entities */
// import Link from "next/link";
// import React, { useState } from "react";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { Logo } from "@/images/image";
// import Image from "next/image";
// import { RegFormDataType } from "@/types/type";
// import axios from "axios";

import Link from "next/link";

// const Ragister = () => {
//   const [invalue, setInputValue] = useState<RegFormDataType>({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...invalue,
//       [name]: value,
//     });
//   };
//   const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const apiRes = await axios.post(
//       "http://localhost:5513/api/users/register",
//       invalue
//     );
//     console.log(apiRes);
//   };
//   return (
//     <div classNameName=" h-screen loginbanner relative     ">
//       <Link href="/" classNameName=" absolute  ">
//         <Image classNameName="  w-[200px] ml-[100px] " src={Logo} alt="" />
//       </Link>
//       <div classNameName=" w-full h-full flex justify-center items-center ">
//         <div classNameName="  relative w-[450px] h-[600px] logCard  flex flex-col justify-center items-center rounded-xl pt-7  ">
//           <h1 classNameName=" absolute text-center text-3xl font-extrabold text-[#e30914]  mb-[420px]    ">
//             Ragister
//           </h1>

//           <form
//             classNameName="  w-[80%] h-300px] flex flex-col justify-center items-center gap-4  "
//             onSubmit={handleForm}
//           >
//             <input
//               type="text"
//               name="name"
//               value={invalue.name}
//               onChange={setValue}
//               classNameName=" bg-transparent search w-[100%] mx-auto h-12  border border-white  text-white rounded-xl pl-4 "
//               placeholder="Enter name"
//             />
//             <input
//               type="email"
//               name="email"
//               onChange={setValue}
//               value={invalue.email}
//               classNameName=" bg-transparent search w-[100%] mx-auto h-12  border border-white  text-white rounded-xl pl-4 "
//               placeholder="Email address"
//             />
//             <div classNameName=" w-full flex flex-row   ">
//               <input
//                 name="password"
//                 type="password"
//                 onChange={setValue}
//                 value={invalue.password}
//                 classNameName=" inborder bg-transparent search w-[100%] mx-auto h-12  border-l border-t border-b  rounded-l-xl  border-white only:first-letter:text-red-500 text-white  pl-4 "
//                 placeholder="Email password"
//               />
//               <div classNameName=" border-y px-4 py-2 border-r  rounded-tr-2xl rounded-br-2xl cursor-pointer "></div>
//             </div>

//             <button classNameName="w-[90%] mx-auto mt-[30px] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-600 cursor-pointer   font-bold rounded-md hover:bg-[#e30914] focus:outline-none focus:bg-[#e30914] ">
//               {" "}
//               Ragister
//             </button>
//           </form>

//           <span classNameName="mt-8 text-xs font-light text-center text-white  w-full  ">
//             {" "}
//             Don&apos;t have an account?{" "}
//             <Link
//               href="/register"
//               classNameName="font-medium text-blue-600 hover:underline"
//             >
//               Sign up
//             </Link>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ragister;

<div className="grid h-screen bg-gray-800 lg:grid-cols-3 justify-center">
  <div></div>
  <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
    <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
      <img className="peer absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
      <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
      <svg className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
       <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> -->
    </a>
    <div className="mt-4 px-5 pb-5">
      <a href="#">
        <h5 className="text-xl tracking-tight text-white">Nike Air MX Super 2500 - Red</h5>
      </a>
      <div className="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span className="text-3xl font-bold text-white">$449</span>
          <span className="text-sm text-white line-through">$699</span>
        </p>
      </div>
      <Link href="#" className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Add to cart</Link>
      
    </div>
  </div>
</div>

