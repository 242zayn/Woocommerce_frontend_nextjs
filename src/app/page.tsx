import Link from "next/link";
import { Book, Bookmark, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import FethAllBook from "@/components/FethAllBook";
import { useState } from "react";

export default function Dashboard() {
  const handleMark = () => {};

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className=" mx-auto sticky top-0 flex h-16 items-center justify-center gap-4 border-b bg-background px-10 md:px-6 w-11/12  ">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Book className="h-8 w-8" />
            <span className="flex text-2xl font-semibold gap-2">
              <span>Book</span>
              <span>Store</span>
            </span>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto  sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <div className="relative">
            <Bookmark />
            <span className=" text-sm absolute px-2 py-0 -top-4 right-0 z-50  text-white  ">
              1
            </span>
          </div>
          <div className="flex gap-3  ">
            <Button className=" font-semibold">
              <Link href="/login">Login</Link>
            </Button>
            <Button className=" font-semibold">
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <FethAllBook />
    </div>
  );
}

// export const getServerSideProps = (async () => {
//   const res = await fetch("http://localhost:5513/api/books");
//   const data: GetBookDataType = await res.json();
//   return { props: { data } };
// }) satisfies GetServerSideProps<{ data: GetBookDataType }>;
