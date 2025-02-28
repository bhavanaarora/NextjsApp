"use client"

import { React, useState, useEffect } from "react";
import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import MultislideCarousel from '@/components/MultislideCarousel';
import Image from 'next/image';
import { CheckCircleIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Preloader from '@/components/Preloader';
import Button from '@/components/Button';
import Head from "next/head";


const Page = () => {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Preloader />;
  }

  return (
    <>
    <Head>
    
      <meta property="og:title" content="Livewell" />
        <meta property="og:description" content="A website built to sell helthy lifestyle courses." />
        {/* <meta property="og:image" content="https://example.com/my-og-image.jpg" />
        <meta property="og:url" content="https://livewell.com" /> */}
        <meta property="og:type" content="website" />
            </Head>

      <div className='bg-[#735751]'>
        <header className="fixed top-0 left-0 w-full bg-[#735751] text-white  z-50">
          <Navbar />
        </header>
        <section id="hero" className="grid xl:grid-cols-2 gap-5  place-items-center md:place-items-start md:mt-20 lg:ps-8 pt-20">

          <div className='max-w-lg mt-12 ps-12 pb-8 '>
            <h1 className="text-5xl font-bold text-white pb-8 leading-tight">Build a Healthy Lifestyle That Lasts</h1>
            <p className="text-xl text-white pb-8">Say goodbye to fad diets, motivation slumps and unrealistic routines-This course makes healthy living easy and sustainable</p>
            <Button buttonId="button1" />
                 </div>
          <div className='flex flex-wrap items-center justify-center text-white gap-4'>
            <div className='border-l-8 border-t-8 border-red-400 rounded-xl'>
              <Image
                src="/heropic1.jpg"
                alt="Hero Section image"
                layout="intrinsic"
                width={300}
                height={300}
                quality={90}
                priority
              />
            </div>
            <div className='border-l-8 border-t-8 border-red-400 rounded-xl'>
              <Image
                src="/heropic2.jpg"
                alt="Hero Section image"
                width={300}
                height={300}
                quality={90}
                priority
              />
            </div>
            <div className='border-l-8 border-t-8 border-red-400 rounded-xl'>
              <Image
                src="/heropic3.jpg"
                alt="Hero Section image"
                width={300}
                height={300}
                quality={90}
                priority
              />
            </div>
            <div className='border-l-8 border-t-8 border-red-400 rounded-xl'>
              <Image
                src="/heropic4.jpg"
                alt="Hero Section image"
                width={300}
                height={300}
                quality={90}
                priority
              />
            </div>
          </div>

        </section>

        <section className='pt-40'>
          <div className=' pb-24'><h2 className="text-4xl font-bold text-white text-center pb-8">The Healthy Lifestyle Blueprint</h2>
          </div>
          <div className='grid md:grid-cols-2  mx-4   gap-4'>
            <div className='border-l-8 border-t-8 border-red-400 rounded-xl place-self-center '>
              <Image
                src="/section2img3.jpg"
                alt="Hero Section image"
                className='rounded-md object-cover'
                width={375}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                quality={90}
                priority
              />
            </div>
            <div className="text-white  rounded-lg  py-16 place-self-center md:place-self-start">

              <ul className='text-xl bg-[#a78a7f]/30'>
                <li className='p-6 mb-2 flex gap-2'><CheckCircleIcon className="w-8 h-8 text-red-400 " /> Feel more energized every day without relying on caffeine.</li>
                <li className='p-6 mb-2 flex gap-2'><CheckCircleIcon className="w-8 h-8 text-red-400" />Loose weight sustainably without leaving your favourite food.</li>
                <li className='p-6 mb-2 flex gap-2'><CheckCircleIcon className="w-8 h-8 text-red-400" />Build habits that stick. even if you are struggled in the past.</li>
                <li className='p-6 mb-2 flex gap-2'><CheckCircleIcon className="w-8 h-8 text-red-400" /> Wake up feeling refreshed every morning.</li>
                <li className='p-6 mb-2 flex gap-2'><CheckCircleIcon className="w-8 h-8 text-red-400" />Boost your confidence and mental clarity with daily practices.</li>
                <li className='p-6 mb-2 flex gap-2'><CheckCircleIcon className="w-8 h-8 text-red-400" />Strengthen your body with easy, effective workouts.</li>

              </ul>
            </div>
          </div>
        </section>
        <section className='pt-40 '>
          <div className='pb-24'><h2 className="text-4xl font-bold text-white text-center pb-8">What's Included in the Course</h2>
          </div>
          <div className='grid xl:grid-cols-3 gap-4 lg:mx-8 place-items-center text-white text-center'>

            <div className='grid  place-items-center gap-12 mx-2 lg:mx-8'>
              <div className='bg-[#a78a7f]/30 p-2'>
                <h3 className='text-xl xl:text-right pb-4'>4 In Depth Modules</h3>
                <p className='xl:text-right px-8 lg:px-0'>Break down everything from nutrition and exercise to stress management and sleep.</p>
              </div>
              <div className='mb-8 lg:mb-0 bg-[#a78a7f]/30 p-2'>
                <h3 className='text-xl xl:text-right pb-4'>30 Day Habit Tracker and Worksheets</h3>
                <p className='xl:text-right px-8 lg:px-0'>Stay on track with practical tools that makes building new habits faster and easier.</p>
              </div>
            </div>


            <div >
              <Carousel />
            </div>


            <div className='grid  place-items-center gap-12 mx-2 lg:mx-8 mt-8 xl:mt-0'>
              <div className='bg-[#a78a7f]/30 p-2'>
                <h3 className='text-xl xl:text-left pb-4'>2x Weekly Live Q&A with Experts</h3>
                <p className='xl:text-left px-8 xl:px-0'>Get personalized expert advice tailored to your needs and stay motivated.</p>
              </div>
              <div className='bg-[#a78a7f]/30 p-2'>
                <h3 className='text-xl xl:text-left pb-4'>LifeTime Access Plus Free Updates</h3>
                <p className='xl:text-left px-8 xl:px-0'>Access new content and upgrades for life at no extra cost and  interruption.</p>

              </div>
            </div>


          </div>


        </section>

        <section className='pt-40 px-4'>
          <div className='pb-24'><h2 className="text-4xl font-bold text-white text-center ">Meet Your Coach</h2></div>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-2  px-4'>


            <div className='border-l-8 border-t-8 border-red-400 rounded-xl place-self-center lg:place-self-end'>
              <Image
                src="/coach.jpg"
                alt="Hero Section image"
                className='rounded-md object-cover'
                width={375}
                height={400}
                quality={90}
                priority
              />
            </div>
            <div className='bg-[#a78a7f]/30 md:w-[35rem] p-8  md:p-4  lg:my-auto mx-auto lg:mx-2'>
              <p className='text-white text-xl'>I'm Emma Caldwell, a certified wellness coach with over 15 years of experience helping people just like you create lasting change. I know how overwhelming health advice can be, but it doesn’t have to be that way. This course is designed to simplify healthy living so it fits seamlessly into your life.</p>
            </div>
          </div>
        </section>



        <section className='pt-40'>
          <div className='pb-24'><h2 className="text-4xl font-bold text-white text-center">Real Success Story </h2></div>
          <MultislideCarousel />

        </section>



        <section className='pt-40 px-4'>
          <h2 className="text-4xl font-bold text-white text-center pb-28">Ready to Start Living Your Healthy Lifestyle?</h2>
          <div class="relative md:w-3/4 lg:w-1/2 h-[32rem] mx-auto bg-[url('/livehealthy1.jpg')] bg-cover bg-center flex items-center justify-center ">
              
            <div class="absolute inset-0 "></div>


            <div className='flex flex-col bg-[#a78a7f]/90  p-8 justify-self-end text-white'>
              <p className="text-xl pb-4 font-semibold">Join Now and Get These Limited-Time Bonuses:</p>

              <div className='bg-[#8e7268] p-4 mb-2'><h3 className=" text-xl font-semibold  underline decoration-red-400 decoration-4 underline-offset-4 ">Bonus #1: </h3><p className="font-medium text-xl">Personalized Meal Plan Tailored to Your Needs.</p></div>

              <div className='bg-[#8e7268] p-4 mb-2'><h3 className=" text-xl font-semibold  underline decoration-red-400 decoration-4 underline-offset-4 ">Bonus #2: </h3><p className="font-medium text-xl">30-Day Habit Tracker and Worksheets.</p></div>

              <div className='bg-[#8e7268] p-4 mb-2'><h3 className=" text-xl font-semibold  underline decoration-red-400 decoration-4 underline-offset-4 ">Bonus #3: </h3><p className="font-medium text-xl">2x Weekly Live Q&A with Experts.</p></div>

              <h3 className='text-2xl mt-4 pt-4 text-red-600 font-bold text-center'>Join Now and Transform Your Life for Just $97

              </h3>

            </div>

          </div>

        </section>




        <section className='pt-40 px-2'>
          <div className='pb-24'><h2 className="text-4xl font-bold text-white text-center pb-8">Frequently Asked
            Question </h2></div>

          <div className='grid gap-4 text-white place-items-center md:w-3/4 lg:w-1/2 mx-auto px-2 '>

            <div className='flex gap-8 place-items-center'>
              <div><QuestionMarkCircleIcon class="w-12 h-12 text-red-400" /></div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-xl font-semibold'>I’ve tried building healthy habits before. How is this course different?</h3>
                <p className='text-xl font-medium'>This course focuses on small, achievable steps backed by behavioral science to help habits stick for the long term.</p>
                <hr className='w-full border-t-2 border-red-400 my-4'></hr>
              </div>
            </div>


            <div className='flex gap-8 place-items-center'>
              <div><QuestionMarkCircleIcon class="w-12 h-12 text-red-400" /></div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-xl font-semibold'>How much time will I need to commit?</h3>
                <p className='text-xl font-medium'>The course is flexible! Plan on 15-20 minutes a day, but you can adjust based on your schedule.</p>
                <hr className='w-full border-t-2 border-red-400 my-4'></hr>
              </div>
            </div>



            <div className='flex gap-8 place-items-center'>
              <div><QuestionMarkCircleIcon class="w-12 h-12 text-red-400" /></div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-xl font-semibold'>What if the course isn’t for me?</h3>
                <p className='text-xl font-medium'>No worries! We offer a 30-day money-back guarantee—so you have nothing to lose.</p>
              </div>

            </div>
          </div>

        </section>


        <section className='pt-36'>
          <hr className='w-full border-t-2 border-red-400 my-4'></hr>
          <div className='grid place-items-center  gap-4 md:w-3/4 lg:w-1/2 mx-auto'>
            <h3 className='text-3xl font-bold px-4 pt-16 text-center text-white'>Your Healthier Life Awaits</h3>
            <p className='text-xl font-semibold text-center p-4 leading-relaxed text-white'>Are you ready to feel your best, build lasting habits, and finally create the healthy lifestyle you deserve?</p>
            
            <Button buttonId="button2"  />
            
         
          </div>
        </section>

        <section id="footer" className='pt-28 text-white'>
          <div className='grid place-items-center gap-4 p-4 '>
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faFacebook} className=" text-red-400 rounded-full text-3xl  " />
              <FontAwesomeIcon icon={faTwitter} className=" text-red-400  rounded-full text-3xl " />
              <FontAwesomeIcon icon={faInstagram} className=" text-red-400  rounded-full text-3xl " />
            </div>
            <div>&copy; 2024 LiveWell.co</div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Page;








