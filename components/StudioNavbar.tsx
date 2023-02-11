import React from 'react'
import Link from 'next/link'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <div>
        <div className='flex items-center justify-between p-5'>
            <Link className="text-[#f7ab0a] flex items-center" href="/">
                <ArrowUturnLeftIcon className='h-6 w-6 text-[#f7ab0a] mr-2' />
                Go Back
            </Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar