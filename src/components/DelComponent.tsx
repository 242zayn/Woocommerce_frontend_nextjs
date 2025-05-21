import axios from "axios";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const DelComponent = ({ bookId }: { bookId: number }) => {
  const [token, setToken] = useState<string | null>(null);

  const delBook = async () => {
    // alert(bookId);
    try {
      const response = await axios.delete(
        `http://localhost:5513/api/deleteproduct/${bookId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Product deleted:", response.data);
      redirect(`${window.location.origin}/dashboard/book`);
      // router.push(``);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const tokens = localStorage.getItem("jwtToken");

    if (!token) {
      console.log("No token found");
    }
    setToken(tokens);
  }, []);
  return (
    <div className=" " onClick={delBook}>
      Delete
    </div>
  );
};

export default DelComponent;
