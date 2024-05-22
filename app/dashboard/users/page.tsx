import Image from "next/image"
import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
      <ProductTable/>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  )
}


const ProductRow = ({ item }:{ item: any }) => {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        0
      </TableCell>
      <TableCell className="font-medium">{item.name}</TableCell>
      <TableCell><Badge variant="outline">{item.status}</Badge></TableCell>
      <TableCell className="hidden md:table-cell">{item.price}</TableCell>
      <TableCell className="hidden md:table-cell">{item.stock}</TableCell>
      <TableCell className="hidden md:table-cell">{item.createdAt}</TableCell>
      <TableCell>
        <DropdownMenu>
          {/* ... dropdown menu component here */}
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

const ProductTable = () => {
  return (
    <Table>
      {/* <TableBody>
        {productData.map((product) => (
          <ProductRow key={product.name} product={product} />
        ))}
      </TableBody> */}
    </Table>
  );
};