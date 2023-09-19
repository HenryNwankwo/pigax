import React from 'react';

function LoginForm({ ref }) {
  return (
    <form className='pgx-login-form' ref={ref}>
      <hr className='pgx-hr' />
      <p className='text-center text-white text-lg md:text-slate-700 '>
        Log into your account here
      </p>
      <div className='pgx-input-group'>
        <input
          type='text'
          placeholder='Username'
          name='username'
          className='pgx-input'
        />
        <label htmlFor='username'></label>
      </div>
      <div className='pgx-input-group'>
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='pgx-input'
        />
        <label htmlFor='password'></label>
      </div>
      <button type='submit' className='pgx-btn pgx-login-btn md:w-full md:ml-0'>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
