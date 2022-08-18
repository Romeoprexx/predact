import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi';
import { MdDashboard, MdOutlineNotifications } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';
import { IoMdThumbsUp } from 'react-icons/io';
import { IoMdThumbsDown } from 'react-icons/io';
import Picture from '../public/img/Ellipse35.png';
import Pictures from '../public/img/Ellipse24.png';
import Pictured from '../public/img/Ellipse23.png';
import Image from 'next/image';


export const Menus = [
  { title: "Dashboard", src: <MdDashboard /> },
  { title: "Students", src: <GiGraduateCap /> },
  { title: "Profile", src: <HiUserCircle />  },
  { title: "Logout ", src: <FiLogOut /> },
  
];

export const topStudentData = [
  {
    image: <Image src={Picture} alt={'first top students'} />,
    name: "Blossom Baba",
    id: "SMS001",
    grade: 3.84
  },
  {
    image: <Image src={Pictures} alt={'second top students'} />,
    name: "Oby Eze",
    id: "SMS005",
    grade: 3.83
  },
  {
    image: <Image src={Pictured} alt={'third top students'} />,
    name: "Gloria Ojone",
    id: "SMS002",
    grade: 3.58
  }
];

export const predictData = [
  {
    icon: <GiGraduateCap />,
    percentage: 6,
    title: 'Students',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <IoMdThumbsUp />,
    percentage: 5,
    title: 'to Graduate',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <IoMdThumbsDown />,
    percentage: 1,
    title: 'to Dropout',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  
];
