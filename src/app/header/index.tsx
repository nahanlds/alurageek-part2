import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import logoAluraGeek from "/public/Logo.svg"

export default function Hearder() {
    return (
        <header className="py-4 px-4 flex justify-between items-center">
            <Image 
                src={logoAluraGeek}
                alt="Logo da alurageek"
                className="w-[130px] h-[45px] md:w-[160px]"
            />
            <div className=" hidden md:inline-flex items-center">
                <Search className="relative left-6 h-4 w-4 text-muted-foreground" />
                <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background bg-gray-100 pl-8 md:w-[200px] lg:w-[336px]"
                />
            </div>
        </header>
    )
}