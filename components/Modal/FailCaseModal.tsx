import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";

export interface TestCaseFailedInfo {
  id: number,
  platform: string,
  feature: string,
  case_id: string,
  test_case_desc: string,
  exc_time: string,
  case_result: string,
  build_version: string,
  create_time: string,
  line_number: number,
  fail_function: string,
  terminal_output: string,    
  log_file_path: string,
}

interface FailTestCaseModalProps {
  data: TestCaseFailedInfo,
  show,
  closeClicked,
}

export const FailCaseModal = ({ data, show, closeClicked }: FailTestCaseModalProps) => {
  return (
    <>
      {/* <!-- Main modal --> */}
      <div id="defaultModal" tabIndex={-1} aria-hidden="true" className={`${show ? "": "hidden"} overflow-y-auto overflow-x-hidden absolute top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full bg-gray-500/40 dark:bg-mac-dark/50`}>
        <div className="relative w-full max-w-2xl h-full md:h-auto m-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white border border-black dark:border-gray-700 rounded-lg shadow dark:bg-mac-dark">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {data.platform}{data.feature}-{data.case_id}
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"
              onClick={closeClicked}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <ModalBody>
              Build Version: {data.build_version}<p></p>
              <br></br>
              Line Number: {data.line_number}<p></p>
              <br></br>
              Failed Function: {data.fail_function}<p></p>
              <br></br>
              Terminal Output: {data ? data.terminal_output : ""}<p></p>
              <br></br>
            </ModalBody>
            {/* <!-- Modal footer --> */}
            <ModalFooter>
              Log: {data.log_file_path}
            </ModalFooter>
          </div>
        </div>
      </div>
    </>
  )
}