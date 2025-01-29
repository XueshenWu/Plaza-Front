'use client'
import { Fragment, useCallback } from 'react'

type DProgressProps = {
    total: number
    current: number
    
}


export function DProgress({ total, current }: DProgressProps) {


    return (
        <div className='flex items-center   '>
            {Array.from({ length: total }).map((_, i) => (
                <Fragment key={i}>
                    <div

                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${i + 1 === current ? 'bg-black' : 'bg-gray-300'}`}
                    />
                    {i !== total-1  && <div className='w-3 h-2 '
                       
                        
                    />}


                </Fragment>
            ))}
        </div>
    )
}