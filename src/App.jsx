import { useState } from 'react'
//import * as React from 'react';
import './App.css'
//import { Navbar } from './components/navbar'
import { Main } from './components/main'
//import { Card } from './components/card'
import { CardMui } from './components/cardMui'

import { NavbarCustom, NavbarItem } from "./components/navbarCustom";

import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import { IconButton } from '@mui/material';
import { Banner } from './components/banner';

export default function App() {
  const [count, setCount] = useState(0)
  const user1 = {
    studentName: "John Wick",
    department: "Businness Administration",
    imgSrc:"https://ben.edu/wp-content/uploads/2023/01/hero-image-cooperating-teachers.png",
    //imgSrc: "https://resilienteducator.com/wp-content/uploads/2012/10/community-college-instructor.jpg",
    //imgSrc: "C:/Users/mirko/Documents/NTPUMultimediaPublication/week8App/src/components/card/img/teacherStudent.jpg",
    message: "New beginnings, new chapters; new life and new endeavors. My friend, I am really proud of you! It feels amazing to share this happiness and excitement with you. Congratulations on graduating!", 
    date: "2021/06/01",
    sender: "Bruce Wayne"
  }

  return (
    <div className="App">
      {/*<Banner/>*/}
      <Main>
        <Card user={user1} /> 
      </Main>
      <NavbarCustom>
        <NavbarItem>
            <IconButton>
                <PreviousIcon />
            </IconButton>
        </NavbarItem>
        <NavbarItem>
            <IconButton>
                <PlayIcon />
            </IconButton>
        </NavbarItem>
        <NavbarItem>
            <IconButton>
                <NextIcon />
            </IconButton>
        </NavbarItem>
      </NavbarCustom>
    </div>
  )
}
