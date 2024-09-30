import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

function Customer() {
  return (
    <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Customer
                </h2>
            }
        >
        <Head title='Customers' />
    </AuthenticatedLayout>
  )
}

export default Customer