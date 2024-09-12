import React from 'react'

export default function Register() {
    return (
        <>
            <form className='p-5 sm:p-10 flex justify-center'>
                <div className='flex flex-col space-y-5 p-5 sm:p-10 border-2'>
                    <h1 className='text-2xl font-bold'>Register</h1>
                    <div>
                        <label htmlFor="">Enter Username</label>
                        <input placeholder=' Enter Username' className='inputfields' type='text'></input>
                    </div>
                    <div>
                        <label htmlFor="">Enter Email</label>
                        <input placeholder=' Enter Email' className='inputfields' type='text'></input>
                    </div>
                    <div>
                        <label htmlFor="">Enter Password</label>
                        <input placeholder='Enter Password' className='inputfields' type='text'></input>
                    </div>

                    <div>
                        <label htmlFor="">Confirm Password</label>
                        <input placeholder='Confirm Password' className='inputfields' type='text'></input>
                    </div>

                    <div className='mt-5'>
                        <button className='bg-green-300 rounded-sm px-6 py-2'>Register</button>
                    </div>

                    <div className='text-xs flex justify-center'>
                        <p>Already have an account?
                            <span className='text-sm text-green-300 ml-2 underline'>Login</span>
                        </p>
                    </div>
                </div>
            </form>
        </>
    )
}
