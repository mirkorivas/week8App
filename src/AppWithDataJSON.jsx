import { useState } from 'react'
//import * as React from 'react';
import './App.css'
//import { Navbar } from './components/navbar'
import { Main } from './components/main'
import { Card } from './components/card'

import { NavbarCustom, NavbarItem } from "./components/navbarCustom";

import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import { IconButton } from '@mui/material';
import dataJson from './data.json'

//import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


export default function App() {
  const [count, setCount] = useState(0)
  /*const user1 = {
    studentName: "John Wick",
    department: "Businness Administration",
    imgSrc:"https://ben.edu/wp-content/uploads/2023/01/hero-image-cooperating-teachers.png",
    //imgSrc: "https://resilienteducator.com/wp-content/uploads/2012/10/community-college-instructor.jpg",
    //imgSrc: "C:/Users/mirko/Documents/NTPUMultimediaPublication/week8App/src/components/card/img/teacherStudent.jpg",
    message: "New beginnings, new chapters; new life and new endeavors. My friend, I am really proud of you! It feels amazing to share this happiness and excitement with you. Congratulations on graduating!", 
    date: "2021/06/01",
    sender: "Bruce Wayne"
  }*/
  
  console.log(dataJson)

  const users = convertUsersToArrayOfObject(dataJson)

  console.log(users)

  const cards = users.map((e, i) => {
      return (
        <Grid xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card user={e} key={i} />
        </Grid>
      )
  })


  return (
    <div className="App">
      {/*<Banner/>*/}
      <Main>
        <Grid container spacing={5}>
          {cards}
        </Grid>
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


function convertUsersToArrayOfObject(users) {
  const pos = getUserPositionIndex(users[0])

  const usersArrayOfObject = users.map(
      (user) => {
          return getUser(user, pos)
      }
  )
  usersArrayOfObject.shift()
  return usersArrayOfObject
}

function getUser(targetUser, pos) {
  return (
      {
          studentName: "John Wick",
          department: "Business Administration"+" "+targetUser[pos.grade],
          imgSrc: targetUser[pos.imgSrc],
          message: targetUser[pos.wish],
          //grade: targetUser[pos.grade],
          wish: targetUser[pos.wish], 
          date: convertDate(targetUser[pos.time]),
          sender: targetUser[pos.name],


      }
  )
}


function getUserPositionIndex(user0) {
  var pos = Object()
  user0.map(
      (e, i) => {
          pos[e] = i
      }
  )
  pos.imgSrc = pos.ThumbnailLink
  pos.name = pos.Name
  pos.grade = pos.Grade
  pos.wish = pos.Wish
  pos.time = pos.Timestamp
  return pos
}

function test(){
  user0 = ['Timestamp', 'Email Address', 'Name', 'Photo', 'Grade', 'Wish', 'ThumbnailLink']
  var pos = Object()
  user0.map(
      (e, i) => {
          pos[e] = i
      }
  )
  pos.imgSrc = pos.ThumbnailLink
  pos.name = pos.Name
  pos.grade = pos.Grade
  pos.wish = pos.Wish
  pos.time = pos.Timestamp
  return pos
}

function convertDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}/${month}/${day}`;
}