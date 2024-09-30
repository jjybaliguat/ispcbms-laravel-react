import React from 'react'
import MotionContainer from '../MotionContainer'
import { Link } from '@inertiajs/react'
import { cn } from '@/lib/utils'
import { ArrowUpRight, CircleCheck, PlusIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import HeroImg from '../../../images/hero-img.jpg'
import RoundedText from '../../../images/rounded-text.png'

function HeroSection() {
  return (
    <>
        <section className='section-gap-bottom overflow-clip pt-12'>
        <div className='container mx-auto'>
            <div className='grid-cols-12 flex-col items-center justify-between gap-6 max-md:flex md:grid'>
                <div className='col-start-1 col-end-9 lg:col-end-10 xxl:col-end-11'>
                    <MotionContainer from='bottom'>
                        <h1 className='d1 font-semibold max-md:text-center'>Sierra Communications</h1>
                    </MotionContainer>
                </div>
                <div className='col-start-9 col-end-13 w-fit max-md:padding-all-32 lg:col-start-10 xxl:col-start-11'>
                    <Link
                       href="/"
                        className={cn({
                            'hover:text-black hover:bg-white group transition-all ease-in-out duration-300 flex items-center justify-center gap-1 rounded-full border border-neutral-500 font-semibold max-md:p-5  md:px-8 md:py-[84px]': true,
                            'bg-primary text-primary-foreground': true,
                        })}
                    >
                        <span>Explore More</span>
                        <ArrowUpRight />
                    </Link>
                </div>
            </div>
            <div className='grid-cols-12 flex-col items-center justify-between gap-6 md:pt-10 max-md:flex max-md:items-center md:grid'>
                <div className='col-start-1 col-end-6 flex w-fit items-center gap-4 rounded-full border border-neutral-30 bg-neutral-20 px-6 py-3 xl:col-end-4'>
                    <div className='profile-pile'>
                        <Avatar className='profile-pic'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className='profile-pic'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className='profile-pic'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className='profile-pic'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='profile-pic -ml-[25px] flex h-12 w-12 items-center justify-center rounded-full border border-white  px-3 py-1 text-center text-xsText font-semibold bg-primary'>
                            <span><PlusIcon className='text-primary-foreground' /></span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold'>1.5k+</h3>
                        <p>Clients</p>
                    </div>
                </div>
                <div className='col-start-6 col-end-13 xl:col-start-8' style={{
                    opacity: 1,
                    transform: 'none'
                }}>
                    <MotionContainer from='right'>
                        <p className='xlText font-medium'>The new Fiber Internet in Montalban Rizal</p>
                    </MotionContainer>
                </div>
            </div>
            <div className='pt-12 relative'>
                <div className='absolute top-1/2 lg:-top-6 left-1/2 lg:left-[400px] z-30 rounded-full  border  border-neutral-500 bg-white p-2 max-xxl:-translate-y-1/2 xxl:-top-3 xxl:-translate-x-[160px]'>
                    <div className='relative'>
                        <img
                            src={RoundedText}
                            alt=''
                            height={121}
                            width={121}
                            className='animate-spin-slow'
                            style={{
                                color: 'transparent'
                            }}
                        />
                        <div className='absolute left-1/2 top-1/2  z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-500 bg-white p-3 text-secondaryColorTwo sm:p-5 xl:top-1/2 '>
                            <div>
                                <CircleCheck className='text-white bg-[#039b59] rounded-full h-9 w-9' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative h-[300px] w-[800px] md:h-[400px] lg:h-[600px] md:w-[1000px] lg:w-[1608px]'>
                    <img
                        src={HeroImg}
                        alt=''
                        // width={1608}
                        // height={446}
                        style={{
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                        className='max-w-[unset] w-full h-full'
                    />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroSection