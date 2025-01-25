'use client';


type HrProps = {
    text?: string,
}

export function Hr({text}: HrProps) {
    return (
        <div className="inline-flex items-center justify-center w-full">
            <hr className="w-[80%] h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 ">{text}</span>
        </div>
    )
}