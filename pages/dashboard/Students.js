import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Control from '../../public/img/arrow_forward_ios.png'
import Logo from '../../public/img/medium.png'
import StudentNavbar from '../../components/layout/StudentNavbar'
import { Menus, users } from '../../data/dummy';
import Link from 'next/link';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/iconify';
import { UserMoreMenu } from '../../components/UserMoreMenu';
import Page from '../../components/Page'



import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';


const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}


const Students = () => {
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
        <StudentNavbar />
      </div>

    </div>
  );
}

export default Students