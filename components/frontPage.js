import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AboutComponent from './about';

export default function FrontPage() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const router = useRouter();

  return (
    <>
      <div className="w-full h-full  max-w-[1368px] flex flex-col justify-center  items-center m-auto">
        <div className=" flex xs:flex-col sm:flex-col md:flex-row justify-center items-center sm:m-fit md:m-auto">
          

          <div className=" inner-wrap_front flex  flex-col justify-center  items-center xs:w-screen h-full sm:w-screen md:w-full xs:mt-2 md:ml-8">
            <h1
              className="w-full md:text-5xl text-center mt-6  xs:hidden sm:block sm:text-5xl md:block laptop:text-7xl"
              style={{ fontFamily: 'Lumberjack' }}
            >
              Simcard project
            </h1>

            <h3 className="font-bold text-2xl xs:mb-10 sm:text-3xl laptop:text-5xl">
              Source of information about your phone{' '}
              <Link href="/contacts/0">
                <div className="text-[#FFEC00] font-extrabold cursor-pointer">
                  New York
                </div>
              </Link>
            </h3>

          </div>
        </div>
        {scrolling && <AboutComponent />}
      </div>
    
    </>
  );
}
