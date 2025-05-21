"use client";
import { GetBookDataType, GetProductsTypes } from "@/types/type";
import axios from "axios";
import Image from "next/image";
import React, { SetStateAction, useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import BookMark from "./BookMark";
import { Button } from "./ui/button";

const FethAllBook = () => {
  const [newId, setNewId] = useState<string | number>();
  const handleBook = (_id: string | number) => {
    console.log(_id);
    console.log("hellow world");
    setNewId(_id);
  };
  const router = useRouter();
  const [datas, setData] = useState<GetProductsTypes>();

  console.log(datas);

  useEffect(() => {
    // console.log(process.env.BACKEND_URL);
    axios
      .get("http://localhost:5513/api/getproducts")
      .then((responce) => setData(responce.data));
  }, []);

  const ProdDetels = (res: any) => {
    // console.log(res);
    router.push(`/${res}`);
  };
  return (
    <div className="flex flex-wrap gap-5 justify-center ">
      {datas?.products?.map((data, index) => {
        return (
          <div key={index} className=" items-center">
            <Card className=" w-[380px] p-4 flex relative  ">
              {data.images?.map((img, id) => {
                return (
                  <div key={id}>
                    <Image
                      src={img.src}
                      alt=""
                      className=" w-full rounded-sm"
                      width={500}
                      height={500}
                    />
                  </div>
                );
              })}
              <div>
                <CardHeader className="gap-2">
                  <CardTitle>{data.name} </CardTitle>
                  <CardContent>
                    <CardDescription>
                      {data.description.replace(/<[^>]*>/g, "")}
                    </CardDescription>
                    <span className=" font-bold text-xl ">
                      {" "}
                      ₹ {data.price}{" "}
                    </span>
                  </CardContent>
                  <Button>Read More</Button>
                </CardHeader>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default FethAllBook;
