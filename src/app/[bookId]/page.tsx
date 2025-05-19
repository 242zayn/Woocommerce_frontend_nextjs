// "use client";
// import DownloadButton from "@/components/DownloadButton";
// import { Button } from "@/components/ui/button";
// import { GetBookDataType } from "@/types/type";
// import axios from "axios";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const PrductDetels = ({ params }: { params: { bookId: string } }) => {
//   const [data, setData] = useState<GetBookDataType>();
//   console.log(data);
//   //   const image : string | StaticImport = data?.coverImage;

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const resApi = async () => {
//     await axios(`http://localhost:5513/api/books/${params.bookId}`).then(
//       (res) => setData(res.data)
//     );
//   };

//   useEffect(() => {
//     resApi();
//   }, []);
//   return (
//     <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
//       <div className="col-span-2 pr-16 text-primary-950">
//         <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{data?.title}</h2>
//         <span className="font-semibold">by {data?.author.name}</span>
//         <p className="mt-5 text-lg leading-8">{data?.title}</p>
//         <DownloadButton fileLink={`${data?.file}`} />
//       </div>
//       <div className="flex justify-end">
//         <Image
//           src={data?.coverImage}
//           alt={` ${data?.title}`}
//           className="rounded-md border"
//           height={0}
//           width={0}
//           sizes="100vw"
//           style={{ width: "auto", height: "auto" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default PrductDetels;

import React from "react";
import Image from "next/image";
import { GetBookDataType } from "@/types/type";
import DownloadButton from "@/components/DownloadButton";

// import DownloadButton from "./components/DownloadButton";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  console.log("params", params);
  let book: GetBookDataType | null = null;
  try {
    const response = await fetch(
      `http://localhost:5513/api/books/${params.bookId}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    // if (!response.ok) {
    //   throw new Error("Error fetching book");
    // }
    book = await response.json();
    // console.log(book?.author.name);
  } catch (err: any) {
    throw new Error("Error fetching book new");
  }

  if (!book) {
    throw new Error("Book not found");
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10 border mt-[100px] rounded-md ">
      <div className="flex justify-end">
        <Image
          src={book.coverImage}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.title}</span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
        <DownloadButton fileLink={book.file} />
      </div>
    </div>
  );
};

export default SingleBookPage;
