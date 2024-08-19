"use client"
import React from 'react';
import employees from '../data';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const changePage = (id:string) => {
    router.push(`/employees/${id}`);
  };

  return (
    <ul>
      {employees.map(employee => (
        <li key={employee.id}>
          <h1>ID: {employee.id}</h1>
          <h2>Name: {employee.name}</h2>
          <h2>Age: {employee.age}</h2>
          <button onClick={() => changePage(employee.id)}>Employee Details</button>
        </li>
      ))}
    </ul>
  );
}
