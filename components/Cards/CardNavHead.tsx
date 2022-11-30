export default function CardNavHead({children}) {
  return (
    <>
      <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-mac-light-card dark:bg-mac-dark-card rounded mb-6 xl:mb-6 shadow-lg">
          <div className="flex-auto p-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}