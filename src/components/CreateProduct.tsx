// "use client";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { CreateBookType, RegFormDataType } from "@/types/type";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import axios, { AxiosError } from "axios";
// import React, { FormEvent, useEffect, useState } from "react";
// import { LoaderCircle } from "lucide-react";

// import { json } from "stream/consumers";
// import { error } from "console";
// import { PlusCircle } from "lucide-react";
// import { cn } from "@/lib/utils";

// const CreateProduct = () => {
//   const [error, setError] = useState("");
//   const [sec, setSec] = useState("");
//   const [spin, setSpin] = useState(false);
//   const [inpValue, setInputVal] = useState<CreateBookType>({
//     title: "",
//     genre: "",
//     description: "",
//     coverImage: null,
//     file: null,
//   });
//   const handleInut = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     console.log("hellow modal");

//     setInputVal({
//       ...inpValue,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const token = localStorage.getItem("jwtToken");

//     if (!token) {
//       console.error("No token found");
//       return;
//     }
//     try {
//       const apiRes = await axios.post(
//         "http://localhost:5513/api/books",
//         inpValue,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(apiRes);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <AlertDialog>
//         <AlertDialogTrigger>
//           <Button size="sm" className="h-7 gap-1">
//             <PlusCircle className="h-3.5 w-3.5" />
//             <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
//               Add Product
//             </span>
//           </Button>
//         </AlertDialogTrigger>
//         <AlertDialogContent className={cn("top-[50%] ")}>
//           <AlertDialogHeader className={cn("flex relative ")}>
//             <AlertDialogCancel className={cn(" absolute right-0  ")}>
//               x
//             </AlertDialogCancel>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <form onSubmit={handleSubmit} className=" m-auto ">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Create book</CardTitle>
//                 <CardDescription>
//                   Enter your email below to login to your account.
//                 </CardDescription>
//                 <CardDescription className={cn("text-red-500")}>
//                   {error}
//                 </CardDescription>
//                 <CardDescription className={cn("text-green-500")}>
//                   {sec}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-4">
//                 <div className=" flex gap-3">
//                   <div className="grid gap-2">
//                     <Label htmlFor="email">Title</Label>
//                     <Input
//                       id="title"
//                       type="text"
//                       name="title"
//                       required
//                       value={inpValue.title}
//                       placeholder="Enter your name"
//                       onChange={handleInut}
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="email">Genre</Label>
//                     <Input
//                       id="genre"
//                       type="text"
//                       name="genre"
//                       value={inpValue.genre}
//                       placeholder="Enter genre"
//                       required
//                       onChange={handleInut}
//                     />
//                   </div>
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="content">Description</Label>
//                   <Textarea
//                     id="description"
//                     name="description"
//                     placeholder="You are a..."
//                     value={inpValue.description}
//                     required
//                     className="min-h-[9.5rem] text-white "
//                     //@ts-ignore
//                     onChange={handleInut}
//                   />
//                 </div>
//                 <div className="grid w-full max-w-sm items-center gap-1.5 ">
//                   <Label htmlFor="picture">Cover Image</Label>
//                   <Input
//                     id="coverImage"
//                     type="file"
//                     accept=".png, .jpg, .jpeg"
//                     className=" cursor-pointer text-white"
//                     value={inpValue.coverImage}
//                     onChange={handleInut}
//                     name="coverImage"
//                   />
//                 </div>
//                 <div className="grid w-full max-w-sm items-center gap-1.5 ">
//                   <Label htmlFor="picture">File</Label>
//                   <Input
//                     id="file"
//                     type="file"
//                     name="file"
//                     accept=".pdf"
//                     className=" cursor-pointer"
//                     value={inpValue.file}
//                     onChange={handleInut}
//                   />
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full">
//                   {spin ? <LoaderCircle className={`animate-spin`} /> : ""}
//                   Create account
//                 </Button>
//               </CardFooter>
//             </form>
//             {/* <AlertDialogAction>Continue</AlertDialogAction> */}
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// };

// export default CreateProduct;

// "use client";
// import React, { useState, FormEvent, ChangeEvent } from "react";
// import axios from "axios";
// import {
//   AlertDialog,
//   AlertDialogTrigger,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogFooter,
//   AlertDialogTitle,
//   AlertDialogCancel,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { LoaderCircle, PlusCircle } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { CreateBookType } from "@/types/type";

// const CreateProduct = () => {
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [inpValue, setInputVal] = useState<CreateBookType>({
//     title: "",
//     genre: "",
//     description: "",
//     coverImage: null,
//     file: null,
//   });

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, files } = e.target as HTMLInputElement;
//     if (files) {
//       setInputVal({
//         ...inpValue,
//         [name]: files[0],
//       });
//     } else {
//       setInputVal({
//         ...inpValue,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const token = localStorage.getItem("jwtToken");

//     if (!token) {
//       setError("No token found");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", inpValue.title);
//     formData.append("genre", inpValue.genre);
//     formData.append("description", inpValue.description);
//     if (inpValue.coverImage) {
//       formData.append("coverImage", inpValue.coverImage);
//     }
//     if (inpValue.file) {
//       formData.append("file", inpValue.file);
//     }

//     setLoading(true);

//     try {
//       const apiRes = await axios.post(
//         "http://localhost:5513/api/books",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setSuccess("Book created successfully!");
//       setError("");
//       if (apiRes.status == 201) {
//         setInputVal({
//           ...inpValue,
//           title: "",
//           genre: "",
//           description: "",
//           coverImage: "",
//           file: "",
//         });
//       }
//       console.log(apiRes);
//       // console.log(apiRes.data);
//     } catch (err) {
//       const errorMsg =
//         err instanceof Error ? err.message : "Error creating book";
//       setError(errorMsg);
//       setSuccess("");
//       console.error(errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <AlertDialog>
//         <AlertDialogTrigger>
//           <Button size="sm" className="h-7 gap-1">
//             <PlusCircle className="h-3.5 w-3.5" />
//             <p className="sr-only sm:not-sr-only sm:whitespace-nowrap">
//               Add Product
//             </p>
//           </Button>
//         </AlertDialogTrigger>
//         <AlertDialogContent className={cn("top-[50%] ")}>
//           <AlertDialogHeader className={cn("flex relative ")}>
//             <AlertDialogCancel className={cn(" absolute right-0  ")}>
//               x
//             </AlertDialogCancel>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <form onSubmit={handleSubmit} className="m-auto">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Create Book</CardTitle>
//                 <CardDescription>
//                   Enter details below to add a new book.
//                 </CardDescription>
//                 {error && (
//                   <CardDescription className={cn("text-red-500")}>
//                     {error}
//                   </CardDescription>
//                 )}
//                 {success && (
//                   <CardDescription className={cn("text-green-500")}>
//                     {success}
//                   </CardDescription>
//                 )}
//               </CardHeader>
//               <CardContent className="grid gap-4">
//                 <div className="flex gap-3">
//                   <div className="grid gap-2">
//                     <Label htmlFor="title">Title</Label>
//                     <Input
//                       id="title"
//                       type="text"
//                       name="title"
//                       required
//                       value={inpValue.title}
//                       placeholder="Enter book title"
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="genre">Genre</Label>
//                     <Input
//                       id="genre"
//                       type="text"
//                       name="genre"
//                       value={inpValue.genre}
//                       placeholder="Enter book genre"
//                       required
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="description">Description</Label>
//                   <Textarea
//                     id="description"
//                     name="description"
//                     placeholder="Enter book description"
//                     value={inpValue.description}
//                     required
//                     className="min-h-[9.5rem]"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="grid w-full max-w-sm items-center gap-1.5">
//                   <Label htmlFor="coverImage">Cover Image</Label>
//                   <Input
//                     id="coverImage"
//                     type="file"
//                     accept=".png, .jpg, .jpeg"
//                     className="cursor-pointer"
//                     onChange={handleInputChange}
//                     name="coverImage"
//                   />
//                 </div>
//                 <div className="grid w-full max-w-sm items-center gap-1.5">
//                   <Label htmlFor="file">File</Label>
//                   <Input
//                     id="file"
//                     type="file"
//                     name="file"
//                     accept=".pdf"
//                     className="cursor-pointer"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button type="submit" className="w-full" disabled={loading}>
//                   {loading ? (
//                     <LoaderCircle className="animate-spin" />
//                   ) : (
//                     "Create Book"
//                   )}
//                 </Button>
//               </CardFooter>
//             </form>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// };

// export default CreateProduct;

"use client";
import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { CreateBookType, GetBookDataType } from "@/types/type";
import Link from "next/link";

const CreateProduct = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  // const [inpValue, setInputVal] = useState<CreateBookType>(data);
  const router = useRouter();
  const [inpValue, setInputVal] = useState<CreateBookType>({
    title: "",
    genre: "",
    description: "",
    coverImage: null,
    file: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setInputVal({
        ...inpValue,
        [name]: files[0],
      });
    } else {
      setInputVal({
        ...inpValue,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setError("No token found");
      return;
    }

    const formData = new FormData();
    formData.append("title", inpValue.title);
    formData.append("genre", inpValue.genre);
    formData.append("description", inpValue.description);
    if (inpValue.coverImage) {
      formData.append("coverImage", inpValue.coverImage);
    }
    if (inpValue.file) {
      formData.append("file", inpValue.file);
    }

    setLoading(true);

    try {
      const apiRes = await axios.post(
        "http://localhost:5513/api/books",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess("Book created successfully!");
      setError("");
      if (apiRes.status == 201) {
        setInputVal({
          ...inpValue,
          title: "",
          genre: "",
          description: "",
          coverImage: "",
          file: "",
        });
      }
      console.log(apiRes);
      // console.log(apiRes.data);
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Error creating book";
      setError(errorMsg);
      setSuccess("");
      console.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };
  const rerunderbook = () => {
    window.location.reload();
    // router.refresh();
    // router.push(` ${window.location.origin}/dashboard/book`);
  };
  useEffect(() => {
    // console.log(data);
  });

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          className={cn(
            "relative w-full flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-[#1e293b]"
          )}
        >
          <div
            className={cn(
              "h-7 gap-1 flex justify-center items-center bg-white text-black px-2 rounded-md cursor-pointer"
            )}
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <p className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </p>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className={cn("top-[50%] ")}>
          <AlertDialogHeader className={cn("flex relative ")}>
            <AlertDialogCancel
              onClick={rerunderbook}
              className={cn(" absolute right-0  ")}
            >
              x
            </AlertDialogCancel>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <form onSubmit={handleSubmit} className="m-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Create Book</CardTitle>
                <CardDescription>
                  Enter details below to add a new book.
                </CardDescription>
                {error && (
                  <CardDescription className={cn("text-red-500")}>
                    {error}
                  </CardDescription>
                )}
                {success && (
                  <CardDescription className={cn("text-green-500")}>
                    {success}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      type="text"
                      name="title"
                      required
                      value={inpValue.title}
                      placeholder="Enter book title"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="genre">Genre</Label>
                    <Input
                      id="genre"
                      type="text"
                      name="genre"
                      value={inpValue.genre}
                      placeholder="Enter book genre"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Enter book description"
                    value={inpValue.description}
                    required
                    className="min-h-[9.5rem]"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="coverImage">Cover Image</Label>
                  <Input
                    id="coverImage"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="cursor-pointer"
                    onChange={handleInputChange}
                    name="coverImage"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="file">File</Label>
                  <Input
                    id="file"
                    type="file"
                    name="file"
                    accept=".pdf"
                    className="cursor-pointer"
                    onChange={handleInputChange}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Create Book"
                  )}
                </Button>
              </CardFooter>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CreateProduct;

// {
//   title: "",
//   genre: "",
//   description: "",
//   coverImage: null,
//   file: null,
// }
