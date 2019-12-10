import React from 'react';
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Abilities from "../components/Abilities";
import ContactMe from "../components/ContactMe";

export default function index() {
  return (
    <div>
      <Banner/>
      <AboutMe/>
      <Abilities/>
      <Services/>
      <ContactMe/>
    </div>
  )
}
