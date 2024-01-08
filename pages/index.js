import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Layout from "@/components/Layout"
import HomeCard from "@/components/HomeCard"
import TopNav from "@/components/TopNav"

const invoices = [
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "1278.23",
    transactionFees: "22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "1278.23",
    transactionFees: "22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "1278.23",
    transactionFees: "22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "1278.23",
    transactionFees: "22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "1278.23",
    transactionFees: "22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "1278.23",
    transactionFees: "22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "1278.23",
    transactionFees: "22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "1278.23",
    transactionFees: "22",
  },
]

export default function Home() {
  return (
    <>
      <Layout
        pageTitle="Payouts v2"
      >
        <TopNav />
        <h1 className="font-semibold text-lg my-4">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <HomeCard
            heading="Online orders"
            text="231"
          />
          <HomeCard
            heading="Amount received"
            text="23,92,312.19"
          />
        </div>
        <h1 className="font-semibold text-lg my-4">Transactions | This month</h1>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Search by order ID.."
            className="border border-gray-300 rounded-md px-2 py-1 w-[200px] mr-2"
          />
          <div className="flex gap-2">
            <button className="bg-[#06b6d4] text-white px-4 py-1 rounded-md">Sort</button>
            <button className="bg-[#06b6d4] text-white px-4 py-1 rounded-md">Download</button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-[#6b7280]">
              <TableHead className="w-[100px] text-black">Order ID</TableHead>
              <TableHead className="text-black">Order Date</TableHead>
              <TableHead className="text-black">Order amount</TableHead>
              <TableHead className="text-right text-black">Transaction Fees</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium text-[#06b6d4]">{invoice.orderId}</TableCell>
                <TableCell>{invoice.orderDate}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
                <TableCell className="text-right">{invoice.transactionFees}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className='bg-cyan-500 text-white' href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Layout>
    </>
  )
}
