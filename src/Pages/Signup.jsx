import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <div className='w-full h-screen'>
            <img
            className=' sm:block absolute w-full h-full object-cover'
            src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/044b9365-d6b8-4e45-98b0-3ace7d99ffd3/BD-en-20220926-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
            <div className='bg-black/60 fixed w-full h-screen top-0 left-0'></div>
            <div className='w-full fixed z-50 px-4 py-24'>
                <div className='max-w-[450px] h-[660px] bg-black/75 mx-auto text-white'>

                    <div className='max-w-[320px] mx-auto py-16'>

                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form className='flex flex-col w-fulls py-4'>
                            <input className='p-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email' autoComplete='email'/>
                            <input className='p-3 my-2 bg-gray-600 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                            <button className='bg-red-600 rounded py-3 my-6'>Sign Up</button>
                            <div className='flex items-center justify-between text-sm text-gray-400'>
                                <p><input type="checkbox" className='mr-2'/>Remember me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'><span className='text-gray-600 px-2'>Already subscribe to Netflix?</span>
                            <Link to="/login">Sign In</Link>
                            </p>
                        </form>

                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Signup