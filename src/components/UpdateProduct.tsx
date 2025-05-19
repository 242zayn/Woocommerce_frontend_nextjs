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
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { CreateBookType, GetBookDataType } from "@/types/type";

const UpdateBook = ({ data }: { data: GetBookDataType }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [inpValue, setInputVal] = useState<CreateBookType>(data);
  const router = useRouter();

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
      const apiRes = await axios.patch(
        `http://localhost:5513/api/books/${data._id}`,
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
    // window.location.reload();
    router.refresh();
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
          Update
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

export default UpdateBook;

// {
//   title: "",
//   genre: "",
//   description: "",
//   coverImage: null,
//   file: null,
// }
