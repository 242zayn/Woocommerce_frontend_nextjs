// import HomeComp from "@/components/Home";
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <HomeComp />{" "}
//     </div>
//   );
// };

// export default page;



// <TabsContent value="all">
// <Card x-chunk="dashboard-06-chunk-0">
//   <CardHeader>
//     <CardTitle>Products</CardTitle>
//     <CardDescription>
//       Manage your products and view their sales performance.
//     </CardDescription>
//   </CardHeader>
//   <CardContent>
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="hidden w-[100px] sm:table-cell">
//             <span className="sr-only">Image</span>
//           </TableHead>
//           <TableHead>Title</TableHead>
//           <TableHead>Status</TableHead>
//           <TableHead>Price</TableHead>
//           <TableHead className="hidden md:table-cell">
//             Total Sales
//           </TableHead>
//           <TableHead className="hidden md:table-cell">
//             Created at
//           </TableHead>
//           <TableHead>
//             <span className="sr-only">Actions</span>
//           </TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {data?.map((res) => {
//           return (
//             <TableRow key={res._id}>
//               <TableCell className="hidden sm:table-cell">
//                 <Image
//                   alt="Product image"
//                   className="aspect-square rounded-md object-cover"
//                   height="64"
//                   src={res.coverImage}
//                   width="64"
//                 />
//               </TableCell>
//               <TableCell className="font-medium">
//                 Laser Lemonade Machine
//               </TableCell>
//               <TableCell>
//                 <Badge variant="outline">Draft</Badge>
//               </TableCell>
//               <TableCell>$499.99</TableCell>
//               <TableCell className="hidden md:table-cell">
//                 25
//               </TableCell>
//               <TableCell className="hidden md:table-cell">
//                 2023-07-12 10:42 AM
//               </TableCell>
//               {/* <TableCell>

//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button
//                       aria-haspopup="true"
//                       size="icon"
//                       variant="ghost"
//                     >
//                       <MoreHorizontal className="h-4 w-4" />
//                       <span className="sr-only">Toggle menu</span>
//                     </Button>
//                     <span>D</span>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                     <UpdateBook data={res} />
//                     <DropdownMenuItem asChild>
//                       <div>
//                         <DelComponent bookId={res._id} />
//                       </div>
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </TableCell> */}
//             </TableRow>
//           );
//         })}
//       </TableBody>
//     </Table>
//   </CardContent>
//   <CardFooter>
//     <div className="text-xs text-muted-foreground">
//       Showing <strong>1-10</strong> of <strong>32</strong>{" "}
//       products
//     </div>
//   </CardFooter>
// </Card>
// </TabsContent>