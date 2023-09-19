import React from 'react';

function LoginForm() {
  return (
    <form className='pgx-login-form'>
      <div className='pgx-input'>
        <input type='text' placeholder='Username' name='username' />
        <label htmlFor=''></label>
      </div>
      <div className='pgx-input'>
        <input type='password' placeholder='Password' name='password' />
        <label htmlFor=''></label>
      </div>
    </form>
  );
}

export default LoginForm;
