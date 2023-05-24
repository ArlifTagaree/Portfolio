import React from "react";
import "./Experiences.sass";
import styled from "styled-components";
import TTR from "../../assets/Jobs/logo_ttr.jpg";
import SCAN from "../../assets/Jobs/logo_scaninter1.png";
import KMUTNB from "../../assets/Jobs/logo_kmutnb.png";
import Gen from "../../assets/Jobs/Generation.svg";
import { Accordion } from "../Accordion/Accordion";
import { motion } from "framer-motion";
import { Gallery } from "../Gallery/Gallery";

export function Experiences() {
  const jobData = [
    {
      img: TTR,
      title: `Office Engineer & Quantity Surveyor`,
      place: `Trans Thai Railway`,
      time: `Apr 2020 - May 2022`,
      href: `https://www.transthairailway.com/`,
      content: [
        `Maintain budget control records`,
        `Provide weekly/monthly progress reports.`,
        `Prepare contracts, budgets, and invoices.`,
        `Update database and project planning work procedure including S-Curve.`,
        `Coordinate with main contractors on contracts, payments, and site issues.`,
        `Liaise with the client and other construction professionals, such as site managers, project managers and site engineers.`,
        
      ],
    },
    {
      img: SCAN,
      title: `Estimate Engineer`,
      place: `Scan-Inter`,
      time: `February 2019 - Mar 2020`,
      href: `https://www.scan-inter.com/`,
      content: [
        `Estimation of spare parts price.`,
        `Inspect the works scope to keep compliance with TOR.`,
        `Analyze and create relevant databases for reference.`,
        `Inspect BOM, BOQ, and ensure the completion of work according to customers'scope of work.
        `
      ],
    },
  ];

  const educationData = [
    {
      img: Gen,
      title: `Fullstack Web Developer Learner`,
      place: `Generation Thailand`,
      time: `February - May 2023`,
      href: `https://thailand.generation.org/programs/jsd/`,
      content: [
        `Junior Software Developer (Fullstack Web Developer), 12 Weeks (full-time)`,
        `Technical Skills: HTML, CSS, Javascript, React, Node JS, Express, Relational databases, MongoDB
        and git version control.`,
        `Behavior & Mindsets: Agile, Scrum process,Growth  Mindset, Problem solved, Communication, Team collaboration ,Time management, Proactiveness, Future-orientation`
      ],
    },
    {
      img: KMUTNB,
      title: `Bachelor of Engineering`,
      place: `KMUTNB`,
      time: `2014 - 2018`,
      href: `https://www.kmutnb.ac.th/`,
      content: [
        `Major Materials Handling Engineering`,
        `Associate Mechanic Engineer License No. ภก.46246`,
      ],
    },
  ];

  const Experiences = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      padding: 0px;
      display: block;
      height: auto;
    }
  `;

  const Header = styled.div`
    width: 100%;
    text-align: right;
    border-bottom: 1px solid;
    margin-bottom: 20px;
  `;

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -20, opacity: 0.5 },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        type: "tween",
      },
    },
  };

  return (
    <Experiences>
      <Header>
        <h2 className="red"><strong>EXPERIENCE</strong></h2>
      </Header>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="highlight">Responsibility</span>

        {jobData.map(({ img, title, place, time, content, href }) => (
          <motion.div variants={item}>
            <Accordion
              key={title}
              img={img}
              place={place}
              title={title}
              time={time}
              content={content}
              href={href}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="highlight">Education</span>

        {educationData.map(({ img, place, title, time, content, href }) => (
          <motion.div variants={item}>
            <Accordion
              key={title}
              img={img}
              title={title}
              place={place}
              time={time}
              content={content}
              href={href}
            />
          </motion.div>
        ))}
      </motion.div>

      <span className="highlight">Certificates</span>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        <motion.div variants={item}>
          
          <Gallery />
        </motion.div>
      </motion.div>
    </Experiences>
  );
}
