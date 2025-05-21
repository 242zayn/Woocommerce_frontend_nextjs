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
    price: "",
    description: "",
    imagesURL: "",
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

    const formData = {
      name: inpValue.title,
      description: inpValue.description,
      regular_price: inpValue.price,
      images: [
        {
          src: inpValue.imagesURL,
        },
      ],
    };

    console.log(formData);

    setLoading(true);
    try {
      const apiRes = await axios.post(
        "http://localhost:5513/api/createproduct",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess("Product created successfully!");
      setError("");
      // if (apiRes.status == 201) {
      //   setInputVal({
      //     ...inpValue,
      //     title: "",
      //     price: "",
      //     description: "",
      //     imagesURL: "",
      //   });
      // }
      console.log(apiRes);
      // console.log(apiRes.data);
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Error creating Product";
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
                    <Label htmlFor="pirce">Price</Label>
                    <Input
                      id="price"
                      type="number"
                      name="price"
                      value={inpValue.price}
                      placeholder="Enter price in ₹ "
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="pirce">Image Url</Label>
                    <Input
                      id="imagesURL"
                      type="url"
                      name="imagesURL"
                      value={inpValue.imagesURL}
                      placeholder="Enter the image url "
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
//   price: "",
//   description: "",
//   coverImage: null,
//   file: null,
// }
