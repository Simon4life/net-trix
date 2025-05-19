'use client';
import React from 'react'
import { FaBrush, FaCloud, FaLock, FaTeamspeak, FaUsers } from "react-icons/fa"
import SectionHeader from './SectionHeader'
import Card from './Card'
import { FaShieldVirus } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="relative text-gray-900 dark:text-white">

      <SectionHeader header="Explore Opportunities" text='Transform your brand with innovative digital solution that captivate and engage your audience' />

      <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        <Card header="Cyber Security" Icon={FaShieldVirus} link='#' text={`Shield your organization from ever-evolving cyber threats using our latest, cutting-edge security solutions—built to protect your data and infrastructure with 24/7 reliability and peace of mind`} />

        <Card header="Cloud & Web Hosting" Icon={FaCloud} link='#' text={`Achieve faster, more secure cloud deployment and web hosting services designed to meet your business's growing needs while ensuring maximum uptime and performance.`} />

        <Card header="Digital Agency" Icon={FaUsers} link='#' text={`From web development to digital marketing, our expert team crafts tailored solutions that boost your brand presence and drive customer engagement in the ever-evolving digital landscape.`} />

        <Card header="Data Protection" Icon={FaLock} link='#' text={`Ensure the integrity and confidentiality of your sensitive data with our comprehensive data protection services, built to safeguard against breaches, losses, and unauthorized access.`} />
      </div>
    </section>

  )
}

export default Services