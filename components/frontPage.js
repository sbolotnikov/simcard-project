import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import imeiInfo from './jivko/response.json';

export default function FrontPage() {
  const [userIMEI, setUserIMEI] = useState('');
  const [visiblePhoneInfo, setvisiblePhoneInfo] = useState(false);
  const router = useRouter();
  const getIMEIInfo = async (e) => {
    e.preventDefault();
    console.log(imeiInfo.data);
    setvisiblePhoneInfo(true);
  };
  return (
    <>
      <div className="w-full h-full  max-w-[1368px] flex flex-col justify-center  items-center m-auto">
        <div className=" flex flex-col  md:flex-row justify-center items-center sm:m-fit md:m-auto">
          <div className=" inner-wrap_front flex  flex-col justify-center  items-center w-screen h-full sm:w-screen md:w-full mt-2 md:ml-8">
            <h1
              className="w-full text-5xl text-center mt-6  lg:text-7xl"
              style={{ fontFamily: 'Lumberjack' }}
            >
              Simcard project
            </h1>
            <h3 className="font-bold text-2xl mb-10 sm:text-3xl lg:text-5xl">
              Source of information about your phone in{' '}
              <Link href="/contacts/0">
                <div className="text-[#FFEC00] font-extrabold cursor-pointer">
                  New York
                </div>
              </Link>
            </h3>
            <h3 className="font-bold text-2xl mb-10 sm:text-3xl lg:text-5xl">
              Please enter your IMEI number{' '}
            </h3>
            <input
              type="text"
              className="flex-1 outline-none border-none rounded-md bg-main-bg p-0.5 mx-1"
              onChange={(e) => {
                setUserIMEI(e.target.value);
              }}
            />
            <button
              className="btnBlue"
              style={{ width: '100%', margin: '2% auto' }}
              onClick={(e) => getIMEIInfo(e)}
            >
              Get Information
            </button>

            {visiblePhoneInfo && (
              <div className="flex flex-col items-center p-3 m-2 bg-black/20 rounded-md bottom-0">
                <img src={imeiInfo.data.device_image} className="w-10 h-auto" />
                <label>Device Name: {imeiInfo.data.name}</label>
                <label>Manufacturer: {imeiInfo.data.manufacturer}</label>
                <label>Brand: {imeiInfo.data.brand}</label>
                <label>Model: {imeiInfo.data.model}</label>
                <label>Serial number: {imeiInfo.data.serial}</label>
                <label>Frequencies available: {imeiInfo.data.frequency.toString()}</label>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
