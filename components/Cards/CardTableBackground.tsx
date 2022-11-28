
export default function CardTableBackground({children}) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-mac-card w-full mb-6 shadow-lg rounded">
                <div className="block w-full overflow-x-auto">
                    <table className="items-center md:table-auto w-full bg-transparent border-collapse">
                        {children}
                    </table>
                </div>
            </div>
        </>
    )
}