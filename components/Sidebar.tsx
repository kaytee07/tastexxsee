import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"


export function SheetDemo() {
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2" // Changed from stroke-width
          strokeLinecap="round" // Changed from stroke-linecap
          strokeLinejoin="round" // Changed from stroke-linejoin
          className="lucide lucide-logs"
        >
          <path d="M13 12h8"/>
          <path d="M13 18h8"/>
          <path d="M13 6h8"/>
          <path d="M3 12h1"/>
          <path d="M3 18h1"/>
          <path d="M3 6h1"/>
          <path d="M8 12h1"/>
          <path d="M8 18h1"/>
          <path d="M8 6h1"/>
        </svg>

      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
            <Image src="/logos/Logo.png" width={100} height={40} alt="logo"/>
            </Link>
            </SheetTitle>
          <SheetDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </SheetDescription>
        </SheetHeader>
        <div className="gap-4 py-4 flex h-[24rem]">
         <ul className="flex flex-col justify-around">
            <li>about us</li>
            <li>staff</li>
            <li>dishes</li>
            <li>contact us</li>
         </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}
