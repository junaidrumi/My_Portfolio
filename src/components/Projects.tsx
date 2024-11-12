import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
        img: '/project_01_Todo_List.jpg',
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and Typesript powered websiteto track time with an interactive countdown feature.",
        img: "/project_02_Countdown_Timer.png",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
      
    },
    {
       id: 2,
       title: "Weather Widget",
       desc: "A Next.js and TypeScript based tool for fetching and displaying rael-time weather data.",
       img: "/project_03-Weather_Widget.jpg",
       tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
      id: 3,
      title: "Currency Converter Project",
      desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
      img: "/project_04_Currency_Converter.png",
      tags: ["HTML", "Node", "CSS", "Typescript"],

    },
    {
      id: 4,
      title: "Static Interactive Resume",
      desc: "A TypeSript-based interactive resume built with HTML and CSS, allowing users to swowcase their skilss dynamically.",
      img:"/Project_05_Static_Interactive_Resume.png",
      tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
      id: 5,
      title: "Simple Calculator Project",
      desc: "A basic HTML CSS and TypeScript calculator for performing essential arithmetic operations.",
      img: "/project_06_Calculator.png",
      tags: ["HTML", "Node", "CSS", "Typescript"],
    }
  ]

const Projects = () => {
  return (
    <div  id='projects' className='container pt-32 text-fuchsia-300'>
      <Heading title= 'My Projects'  />
      <div className='grid gap-10 xl: gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-item-center'>
      {data.map((el)=> (<Card 
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />))}
    </div>
    </div>
  )
}

export default Projects
