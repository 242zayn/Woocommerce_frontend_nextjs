"use client";
import { RegFormDataType } from "@/types/type";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios, { AxiosError } from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { json } from "stream/consumers";

export default function RegisterForm() {
  const [spin, setSpin] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [sec, setSec] = useState("");

  const [inpValue, setInputVal] = useState<RegFormDataType>({
    name: "",
    email: "",
    password: "",
  });
  const handleInut = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputVal({
      ...inpValue,
      [name]: value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const apiRes = await axios.post(
        "http://localhost:5513/api/users/register",
        inpValue
      );
      console.log(apiRes.data);
      if (apiRes.status === 200) {
        setSec(apiRes.statusText);
        console.log("on 200 status");
        setInputVal({
          ...inpValue,
          name: "",
          email: "",
          password: "",
        });
      }
      localStorage.setItem("jwtToken", apiRes.data.jwt);
      console.log(apiRes);
      console.log(apiRes.data.jwt);
      router.push("/login");
    } catch (er) {
      const error = er as AxiosError;
      // @ts-ignore
      setError(error.response?.data.message);
    }
  };
  useEffect(() => {
    // console.log(process.env.NAME);
  });

  return (
    <form
      onSubmit={handleSubmit}
      className=" h-screen flex justify-center items-center "
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
          <CardDescription className={cn("text-red-500")}>
            {error}
          </CardDescription>
          <CardDescription className={cn("text-green-500")}>
            {sec}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              required
              value={inpValue.name}
              placeholder="Enter your name"
              // required
              onChange={handleInut}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={inpValue.email}
              placeholder="m@example.com"
              required
              onChange={handleInut}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={handleInut}
              id="password"
              type="password"
              name="password"
              value={inpValue.password}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {spin ? <LoaderCircle className={`animate-spin`} /> : ""}
            Create account
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
