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
    totalAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209",
    orderDate: "7 July,2023",
    totalAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
]

export default function Home() {
  return (
    <>
      <Layout
        pageTitle="Payouts v2"
      >
        <TopNav />
        <div className="mx-10">
          <h1 className="font-semibold text-lg my-4">Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div className="bg-white w-full">
            <div className="flex items-center justify-between py-5 px-2">
              <input
                type="text"
                placeholder="Search by order ID.."
                className="border border-gray-300 rounded-md px-2 py-1 w-[200px] mr-2"
              />
              <div className="flex gap-2">
                <button className="bg-white text-[#4D4D4D] border-[#D9D9D9] border-2 px-4 py-1 rounded-md">Sort</button>
                <button className="bg-white text-[#4D4D4D] border-[#D9D9D9] border-2 px-4 py-1 rounded-md">Download</button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F2F2F2]">
                  <TableHead className="w-[100px] text-[#4D4D4D] font-medium text-sm">Order ID</TableHead>
                  <TableHead className="w-[100px] text-[#4D4D4D] font-medium text-sm">
                    Order Date
                  </TableHead>
                  <TableHead className="w-[100px] text-right text-[#4D4D4D] font-medium text-sm">Order amount</TableHead>
                  <TableHead className="w-[100px] text-right text-[#4D4D4D] font-medium text-sm">Transaction Fees</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium text-[#146EB4]">{invoice.orderId}</TableCell>
                    <TableCell>{invoice.orderDate}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    <TableCell className="text-right">{invoice.transactionFees}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination className='pt-3'>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious className='text-[#4D4D4D] border-[1px] border-[#D9D9D9] text-sm font-normal' href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className='text-[#4D4D4D] text-sm font-normal' href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className='text-[#4D4D4D] text-sm font-normal' />
                </PaginationItem>
                {/* <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">11</PaginationLink>
                </PaginationItem> */}
                {
                  [10,11,12,13,14,15,16,17,18].map((item,index) => (
                    <PaginationItem key={index}>
                      {/* in the first item, the background color is supposed to be blue */}
                      <PaginationLink className={
                        index === 0 ? 'text-white text-sm font-medium rounded-md bg-[#146EB4]' : 'text-[#4D4D4D] text-sm font-normal'
                      } href="#">{item}</PaginationLink>
                    </PaginationItem>
                  ))
                }
                <PaginationItem>
                  <PaginationNext className='text-[#4D4D4D] border-[1px] border-[#D9D9D9] text-sm font-normal' href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </Layout>
    </>
  )
}
