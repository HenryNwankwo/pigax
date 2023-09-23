'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormError from './FormError';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

function LoginForm({ ref }) {
  const router = useRouter();
  //Handling form data
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required!'),
      password: Yup.string()
        .min(9, 'Password must be up to 9 characters!')
        .required('Password is Required!'),
    }),
    onSubmit: async (values) => {
      try {
        const login = await signIn('credentials', {
          email: values.email,
          password: values.password,
          redirect: false,
          callbackUrl: '/',
        });

        if (login.ok) {
          router.push(login.url);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <form className='pgx-login-form' ref={ref} onSubmit={formik.handleSubmit}>
      <p className='text-center text-white text-lg md:text-slate-700 '>
        Log into your account here
      </p>
      <div className='pgx-input-group relative'>
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='pgx-input'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor='username'></label>
        {formik.touched.email && formik.errors.email ? (
          <FormError>{formik.errors.email}</FormError>
        ) : null}
      </div>
      <div className='pgx-input-group relative'>
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='pgx-input'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor='password'></label>
        {formik.touched.password && formik.errors.password ? (
          <FormError>{formik.errors.password}</FormError>
        ) : null}
      </div>
      <button type='submit' className='pgx-btn pgx-login-btn md:w-full md:ml-0'>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
