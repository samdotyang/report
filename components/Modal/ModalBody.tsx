export const ModalBody = ({children}) => {
  return (
    <>
       <div className="p-6 space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
         {children}
        </p>
      </div>
    </>
  )
}