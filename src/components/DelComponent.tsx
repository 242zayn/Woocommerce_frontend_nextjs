import axios from "axios";
import { redirect } from "next/navigation";
import React from "react";

const DelComponent = ({ bookId }: { bookId: string }) => {
  const delBook = async () => {
    try {
      const delres = await axios.delete(
        `http://localhost:5513/api/books/${bookId}`
      );
      console.log(delres);
      redirect(`${window.location.origin}/dashboard/book`);
      // router.push(``);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" " onClick={delBook}>
      Delete
    </div>
  );
};

export default DelComponent;
