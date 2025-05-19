// "use client";
// import { Bookmark } from "lucide-react";
// import React, { useState } from "react";

// const BookMark = ({
//     bookId,
//   onclick,
// }: {
//     bookId: string | number | boolean;
//   onclick: any;
// }) => {
//   console.log(bookId);

//   return (
//     <div>
//       <Bookmark
//         onClick={onclick}
//         className=" absolute top-2 right-3 fill-red-600 cursor-pointer "
//       />
//       {/* {bookId} */}
//     </div>
//   );
// };

// export default BookMark;

"use client";
import { Bookmark } from "lucide-react";
import React, { useState } from "react";

const BookMark = ({
  bookId,
  onclick,
}: {
  bookId: string | number;
  onclick: () => void;
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClick = () => {
    setIsBookmarked(!isBookmarked);
    onclick();
  };

  return (
    <div>
      <Bookmark
        onClick={handleClick}
        className={`absolute top-2 right-3 cursor-pointer ${
          isBookmarked ? "fill-red-600" : ""
        }`}
      />
    </div>
  );
};

export default BookMark;
