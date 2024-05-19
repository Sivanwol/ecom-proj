import { Button, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import Icon from "@app/components/icon";
import Image from "next/image";

export default function HeaderBar({ }) {
    return (<div className="w-full transition-all duration-300 bg-white overflow-hidden md:overflow-visible max-w-[1600px] h-[93px] md:h-[84px] md:pt-3">
        <div className="flex transition-all duration-300 gap-[10px] flex-col px-4 smm:px-5 md:px-8 py-2.5 md:gap-10 md:py-2 md:flex-row md:items-center lg:gap-15">
            <div className="flex items-center justify-between flex-shrink-0 w-auto">
                <Image
                    src="/vercel.svg"
                    alt="Ecommerce Logo"
                    className="dark:invert"
                    width={143}
                    height={24}
                    priority
                />
            </div>
            <div className="overflow-hidden flex items-center justify-center flex-grow">
                <div className="w-full psq-s-autocomplete max-w-768">
                    <TextField.Root placeholder="Search the Product…">
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                </div>
            </div>
            <div className="items-center flex-shrink-0 hidden w-auto gap-10 lg:flex">
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noreferrer" className="relative flex flex-col items-center justify-between text-theme-500">
                    <Icon name="shopping-cart" />
                </a>
            </div>
            <div className="flex">
                <Button variant="soft">Login Or Join</Button>
            </div>
        </div>
    </div>)
}