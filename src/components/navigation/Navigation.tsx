import React from "react";
import s from './Navigation.module.css'


export const Navigation = () => {
  return(
      <div>
          <div className={s.container}>
              <a href='#'>HOME</a>
              <a href='#SKILLS'>SKILLS</a>
              <a href='#PROJECTS'>PROJECTS</a>
              <a href='#DistantWork'>DistantWork</a>
              <a href='#CONTACTS'>CONTACTS</a>
          </div>
      </div>
  )
}