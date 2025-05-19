"use client";
import { Button } from "@/components/ui/button";
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
import axiosInstance from "@/lib/axiosApiHandle";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [sec, setSec] = useState("");
  const router = useRouter();
  const [spin, setSpin] = useState(false);
  const [inpValue, setInputVal] = useState({
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
    console.log(inpValue);
    setSpin(true);
    try {
      const apiRes = await axios.post(
        "http://localhost:5513/api/users/login",
        inpValue
      );

      console.log(apiRes);
      router.push("/dashboard");
    } catch (error) {
      setSpin(false);
      const err = error as AxiosError;
      // @ts-ignore
      setError(err.response?.data.message);
      console.log(" this error handling login", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" h-screen flex justify-center items-center "
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl ">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
          <CardDescription className={cn("text-red-600")}>
            {error}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
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
        <CardFooter className=" flex-col gap-3">
          <Button className="w-full gap-3">
            {" "}
            {spin ? <LoaderCircle className={`animate-spin`} /> : ""} Sign in
          </Button>
          <CardDescription>
            <span className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline">
                Sign up
              </Link>
            </span>
          </CardDescription>
        </CardFooter>
      </Card>
    </form>
  );
}
