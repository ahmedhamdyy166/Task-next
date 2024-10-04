"use client"; 
import * as Yup from 'yup'
import React from 'react'
import { useFormik } from 'formik';
import Link from 'next/link';

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      name:'',
      email: '',
      password: '',
      phone: '',
      age: '',
    },
    validationSchema: Yup.object({
    name:Yup.string().required('Name is required').min(3,'min length is 3').max(10,'max length is 10'),
    email:Yup.string().required('Email is required').required('Email is required').email('invalid email'),
    password:Yup.string().required('Pass is required').matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Invalid Password (ex:Mohamed@1234)"),
    phone:Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/ , 'Egyptian Number required')
  
    }),
    onSubmit: (values) => {
      console.log('Signup values:', values);
    },
  });

  return <>
  <div className='w-3/4 mx-auto py-4'>
  <form onSubmit={formik.handleSubmit}>

    <label htmlFor="name" className='block mb-1'>Name :</label>
    <input type="text" name='name' id='name' className='w-full mb-3 p-2 border border-gray-300 rounded' onBlur={formik.handleBlur} onChange={formik.handleChange} />
    {formik.errors.name && formik.touched.name ? <div className='bg-red-500 text-white p-2 mb-3'>{formik.errors.name}</div> : null}

    <label htmlFor="email" className='block mb-1'>Email:</label>
    <input type="text" name='email' id='email' className='w-full mb-3 p-2 border border-gray-300 rounded' onBlur={formik.handleBlur} onChange={formik.handleChange} />
    {formik.errors.email && formik.touched.email ? <div className='bg-red-500 text-white p-2 mb-3'>{formik.errors.email}</div> : null}

    <label htmlFor="password" className='block mb-1'>Pass:</label>
    <input type="text" name='password' id='password' className='w-full mb-3 p-2 border border-gray-300 rounded' onBlur={formik.handleBlur} onChange={formik.handleChange} />
    {formik.errors.password && formik.touched.password ? <div className='bg-red-500 text-white p-2 mb-3'>{formik.errors.password}</div> : null}

    
    <label htmlFor="phone" className='block mb-1'>phone:</label>
    <input type="tel" name='phone' id='phone' className='w-full mb-3 p-2 border border-gray-300 rounded' onBlur={formik.handleBlur} onChange={formik.handleChange} />
    {formik.errors.phone && formik.touched.phone ? <div className='bg-red-500 text-white p-2 mb-3'>{formik.errors.phone}</div> : null}

    <Link href='/signin'>
    <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='w-full mt-5 bg-blue-500 text-white p-2 rounded disabled:opacity-50'>Register</button>

    </Link>    
  </form>
</div> 
  </>
}
