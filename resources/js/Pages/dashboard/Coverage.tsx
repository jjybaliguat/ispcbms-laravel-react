import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

function Coverage() {
  return (
    <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Coverage
                </h2>
            }
        >
        <Head title='Customers' />
    </AuthenticatedLayout>
  )
}

export default Coverage