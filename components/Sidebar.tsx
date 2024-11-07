import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

interface SheetDemoProps {
  firstColor: string
}


export function SheetDemo ({firstColor}: SheetDemoProps) {
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <svg
          color={firstColor}
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
          
            <Link className="w-5 font-bold text-[#FFD700]" href="/">
                Tastexxsee
            </Link>
          <SheetDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </SheetDescription>
        </SheetHeader>
        <div className="gap-4 py-4 z-50 flex h-[10rem] w-full">
         <ul className="flex flex-col justify-around w-full">
            <li className="border-b-[#FFD700] border-b-2">about us</li>
            <li className="border-b-[#FFD700] border-b-2">staff</li>
            <li className="border-b-[#FFD700] border-b-2">contact us</li>
         </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}

