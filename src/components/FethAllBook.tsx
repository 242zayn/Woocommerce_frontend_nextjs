"use client";
import { GetBookDataType } from "@/types/type";
import axios from "axios";
import Image from "next/image";
import React, { SetStateAction, useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
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
  const [datas, setData] = useState<GetBookDataType[]>();

  useEffect(() => {
    // console.log(process.env.BACKEND_URL);
    axios
      .get("http://localhost:5513/api/books")
      .then((responce) => setData(responce.data));
  }, []);

  const ProdDetels = (res: any) => {
    // console.log(res);
    router.push(`/${res}`);
  };
  return (
    <div className="flex flex-wrap gap-5 justify-center  ">
      {datas?.map((res) => {
        return (
          <div key={res._id} className="  items-center">
            <Card className=" w-[380px] p-4 flex relative  ">
              <BookMark bookId={res._id} onclick={() => handleBook(res._id)} />
              <Image
                src={res.coverImage}
                alt=""
                className=" w-[40%] rounded-sm"
                width={50}
                height={0}
              />
              <div>
                <CardHeader className="gap-2">
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                  <Button onClick={() => ProdDetels(res._id)}>Read More</Button>
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
