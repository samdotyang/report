import CardNavHead from "@components/Cards/CardNavHead";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter()
    console.log(router.pathname)
    const test = ["placeholder 1", "placeholder 2", "placeholder 3", "placeholder 4"]
    return (
        <>
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    <a href={router.pathname} className="text-white text-sm uppercase hidden lg:inline-block font-semibold">
                        {router.pathname.slice(1)}
                    </a>
                </div>
            </nav>
            <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <div>
                        <div className="flex flex-wrap">
                            {test.map ( data => (
                                <CardNavHead>
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="uppercase font-bold text-xs">
                                                Header
                                            </h5>
                                            <span className="font-semibold text-xl">
                                                Header2
                                            </span>                            
                                        </div>
                                    </div>
                                    <p className="text-sm mt-4">Footer</p>
                                </CardNavHead>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}