import React from 'react';

export default function Login() {
  return (
    <form className='shadown-lg flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <p className='text-sm text-gray-500'>
          New to tha app?{' '}
          <a href='#' className='text-red-500 hover:underline'>
            Register
          </a>
        </p>
      </div>

      <div className='mt-8 flex flex-col space-y-4'>
        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='email'
            className='text-semibold texty-gray-500 text-sm'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500'
          />
        </div>
        <div className='mt-8 flex flex-col space-y-1'>
          <label
            htmlFor='password'
            className='text-semibold texty-gray-500 text-sm'
          >
            Password
          </label>
          <input
            type='password'
            name='email'
            id='email'
            placeholder='Enter your password'
            className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500'
          />
        </div>
      </div>

      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
