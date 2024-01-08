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
import Image from "next/image"
import SortBtn from "../public/Sort.svg"
import DownloadBtn from "../public/download-icon.svg"
import SearchIconTable from "../public/search-icon-table.svg"
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
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg my-4">Overview</h1>
            <button data-dropdown-toggle="dropdown" className="text-[#4d4d4d] p-2 border-[#d9d9d9] border-[1px] m-0 h-10 bg-white flex items-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm text-center inline-flex items-center" type="button">Last month <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>
          </div>
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
          <h1 className="font-medium text-[#1A181E] text-xl my-4">Transactions | This month</h1>
          <div className="bg-white w-full mb-10 rounded-xl shadow-md py-2">
            <div className="flex items-center justify-between py-5 px-2">
              <div className="flex items-center gap-2 border-[#D9D9D9] border-[1px] py-[10px] px-[16px] rounded-md">
                <Image src={SearchIconTable} alt="Search Icon Table" width={14} height={14} />
                <input
                  type="text"
                  placeholder="Search by order ID..."
                  className="outline-none black/60 font-normal text-sm"
                />
              </div>
              <div className="flex gap-2">
                <button className="bg-white flex gap-x-1 items-center text-[#4D4D4D] border-[#D9D9D9] border-2 px-4 py-1 rounded-md">
                  Sort
                  <Image src={SortBtn} alt="Filter Icon" width={16} height={16} />
                </button>
                <button className="bg-white text-[#4D4D4D] border-[#D9D9D9] border-2 px-4 py-1 rounded-md w-12 h-10">
                  <Image src={DownloadBtn} alt="Download Icon" width={17} height={17} />
                </button>
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
                {
                  [10, 11, 12, 13, 14, 15, 16, 17, 18].map((item, index) => (
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
