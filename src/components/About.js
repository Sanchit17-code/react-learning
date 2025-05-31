import User from './User';
import UserClass from './UserClass';
import React from 'react'
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
        <p>We are a food delivery service that brings your favorite meals to your doorstep.</p>
      <User name={"sanchit11"} location={"Mirzapur"}/>
      <UserClass  name={"sanchit22"} location={"Bangalore"}/>
      </div>
  )
}

export default About;