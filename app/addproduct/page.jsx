"use client"; 
import React, { useState } from 'react'
import { addProduct } from '../reduxstore/productSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function Addproduct() {
const dispatch = useDispatch();

const productCount = useSelector((state) => state.product.productCount);  
  const [formData, setFormData] = useState({
    price: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData)); 
    setFormData({ price: '', category: '', description: '' });
  };

  return <>
<div className="flex justify-center items-center min-h-screen">

  <div className="w-3/4 mx-auto mb-6">
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="number"
        name="price"
        placeholder="Price"
        className="block border p-2 w-full"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        className="block border p-2 w-full"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        className="block border p-2 w-full"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Product
      </button>
    </form>

    
    <div className="mt-4">
      <p>Total products added: {productCount}</p>
    </div>
  </div>
</div>

  </>
}
