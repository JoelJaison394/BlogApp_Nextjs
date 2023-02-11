import React from 'react'


function Logo(props: any) {
    const {renderDefault , title} = props;
  return (
    <div className='flex items-center justify-center space-x-2'>
        <h1 className=' text-[#f7ab0a] text-lg pr-2 pl-2'>
            CLA
        </h1>
        {props.renderDefault(props)}
    </div>
  )
}

export default Logo