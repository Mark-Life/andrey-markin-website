import type React from "react"

type DeviceFrameProps = {
  children: React.ReactNode
  type?: 'mobile' | 'macos'
}

export default function DeviceFrame({ children, type = 'mobile' }: DeviceFrameProps) {
  if (type === 'mobile') {
    return (
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">{children}</div>
      </div>
    )
  }

  return (
    <div className="relative mx-auto w-full">
      {/* macOS window frame */}
      <div className="w-full max-w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl">
        {/* Title bar */}
        <div className="h-[24px] sm:h-[30px] md:h-[40px] bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-2 sm:px-4">
          <div className="flex space-x-1 sm:space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        {/* Content area with 16:9 aspect ratio */}
        <div className="bg-white dark:bg-gray-900 w-full relative overflow-hidden">
          <div className="w-full pb-[56.25%] relative">
            <div className="absolute inset-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

