import React from 'react';
import { MdChevronRight } from 'react-icons/md'

export interface HeaderPathProps
    extends React.HTMLAttributes<HTMLHeadElement> {
    paths: string[]
}

const HeaderPath = React.forwardRef<HTMLDivElement, HeaderPathProps>(
    ({ className, paths, ...props }, ref) => {

        return (
            <div className='flex flex-row gap-4 px-8 py-3 h-14 items-center bg-white'>
                {
                    paths.map((path, index) => {
                        return (
                            <div className='flex flex-row gap-4'>
                                <p className='text-14 font-normal font-primary'>{path}</p>
                                {
                                    index < paths.length - 1 && <MdChevronRight size='24' />
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    })

export default HeaderPath;