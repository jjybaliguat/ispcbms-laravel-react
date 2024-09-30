import HeroSection from '@/Components/sections/HeroSection';
import { Button } from '@/Components/ui/button';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import React from 'react'

function Landing({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
  return (
    <>
        <Head title='Home' />
        <HeroSection />
    </>
  )
}

export default Landing