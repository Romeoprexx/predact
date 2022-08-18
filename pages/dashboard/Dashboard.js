import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Control from '../../public/img/arrow_forward_ios.png'
import Logo from '../../public/img/medium.png'
import DashboardNavbar from '../../components/layout/DashboardNavbar'
import { Menus, predictData, topStudentData } from '../../data/dummy';
import Link from 'next/link';
import Welcome from '../../public/img/Frame-833.png'
import { Avatar } from '@mui/material';


const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const [activeLinks, setActiveLinks] = useState(null);

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 activate w-60';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black normalink m-2';

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setOpen(false);
    } else {
      setOpen(true)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  })


  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-primary-500 h-screen sidebar-height p-5  pt-8 relative duration-300  md:overflow-hidden overflow-auto md:hover:overflow-auto`}
      >
        <div className='flex justify-between'>

          <div />
          <Image
            src={Control}
            className={`absolute cursor-pointer -right-5 top-9 w-7 border-red-500
           border-2 control rounded-full ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

        </div>
        <div className="flex gap-x-4 items-center">
          <Link href="/dashboard/Dashboard">
            <a>
              <Image
                src={Logo}
                height={50}
                width={150}
                className={`cursor-pointer dashboard-image duration-500 ${open && "rotate-[360deg]"
                  }`}
              />
            </a>
          </Link>

        </div>
        <div className='items-center -ml-4 md:ml-0 xl:ml-0 lg:ml-0'>
          <ul className="pt-6 dashboard-ul ">
            {Menus.map((Menu, index) => (
              <Link href={`/dashboard/${Menu.title}`}>
                <a>
                  <li
                    key={index}
                    className={`flex dashboard-li rounded-md p-2 cursor-pointer hover:bg-light-white text-[#FFFFFF] text-sm xl:text-xl lg:text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-10"} ${index === 0 && "bg-light-white"
                      } ${(activeLinks === `${Menu.title}`
                        ? activeLink
                        : normalLink)}
              `}
                    onClick={() => {
                      setActiveLinks(`${Menu.title}`)
                    }}

                  >
                    {Menu.src}
                    <span className={`${!open && "hidden"} origin-left duration-200 `}>
                      {Menu.title}
                    </span>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-screen flex-1 p-7">
        <DashboardNavbar />
        <div className='mt-20'>
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-center full-length">
            <div className='h-44 rounded-xl w-full large-width lg:w-80 p-5 pt-9 m-3 mr-0 lg:mr-20 main-hold'>
              <Image src={Welcome} alt="Welcome" />
            </div>
            <div className="flex m-3 flex-wrap justify-center gap-1 items-center classifield">
              {predictData.map((item) => (
                <div key={item.title} className="bg-white h-44 md:w-56 p-4 pt-9 rounded-2xl secondary-hold">
                  <button
                    type="button"
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl icon-hold"
                  >
                    {item.icon}
                  </button>
                  <p className="mt-3 ml-7">
                    <span className="text-lg font-semibold"></span>
                    <span className={`text-sm font-family text-${item.pcColor}`}>
                      {item.percentage}
                    </span>
                  </p>
                  <p className="text-sm font-family text-[#2D2D2D]  mt-1">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-10 top-width'>
          <div className='flex flex-col flex-wrap justify-center m-1 p-2 top-sidewidth'>
            <div className='top-3-students'>
              <p className='top-3-students-font text-white mt-0 lg:mt-3 items-center'>Top 3 Students</p>
            </div>
            <div  className='mt-5 table-div'>
              <table className='table-auto table-row'>
                <thead>
                  <tr>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {topStudentData.map((item) => (
                      <tr className='justify-between flex border-b border-gray-200 table-width'>
                        <td>{item.image}</td>
                        <td className='text-[#000000] name-row'>{item.name} <br className='break' />{item.id}</td>
                        <td className='text-[#000000] grade'>{item.grade}</td>
                      </tr>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard