import React from 'react'

const ErrorPage = () => {

    return (
        <div className='max-h-[calc(100vh-66px)] text-center'>
            <h2 className=" text-3xl font-semibold py-5">Not Found</h2>
            <p>The url you are are requesting is not avaialble </p>
            <img src="https://www.vizion.com/wp-content/smush-webp/2018/09/shutterstock_479042983.jpg.webp" alt="404-page" className='max-w-[40vw] mx-auto rounded-lg' />
        </div>
    )
}

export default ErrorPage