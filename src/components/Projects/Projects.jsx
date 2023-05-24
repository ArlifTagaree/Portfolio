import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import Exam from "../../assets/ProjectSS/FYH/ReactExamPic.png";
import Colmar from "../../assets/ProjectSS/Colmar-academy/desktop.png";
import FYH from "../../assets/ProjectSS/FYH/FYH.png";
import styled from "styled-components";
import Gtrainee from "../../assets/ProjectSS/Offit/Presentation1.jpg";

export function Projects() {
  const projectsData = [
    {
      img: Gtrainee,
      title: `G-Tranee`,
      content: (
        <>
          A CRUD web application, built with MERN Stack. That allows users add edit
          remove exercise activity by using form.
          <br />
          Project Generation Thailand
        </>
      ),
      techlist: [
        {
          tech: `React`,
          href: `https://reactjs.org/`,
        },
        {
          tech: `Bootstrap`,
          href: `https://getbootstrap.com/`,
        },
        {
          tech: `MongoDB`,
          href: `https://www.mongodb.com/`,
        },
        {
          tech: `Node.js`,
          href: `https://nodejs.org/en/`,
        },
      ],
      github: `https://github.com/pramotepon/reborn-giwon`,
      demo: `https://reborn-giwon.vercel.app/`,
    },
    {
      img: Exam,
      title: `React Mini Project Assessment`,
      content: (
        <>
          A web application, built with React.js,  to understand the basic functionality of react component and reactHook.
          <br />
          Assessment Generation Thailand
          
        </>
      ),
      techlist: [
        {
          tech: `React`,
          href: `https://reactjs.org/`,
        },       
        {
          tech: `Bootstrap`,
          href: `https://getbootstrap.com/`,
        },
      ],
      github: `https://github.com/ArlifTagaree/career-changer-react-assessment`,
      demo: `https://career-changer-react-assessment-gamma.vercel.app/`,
    },
    {
      img: FYH,
      title: `FindYourHat`,
      content: (
        <>
          JavaScript Project of Codecademy
          <br />
          Assessment Generation Thailand
        </>
      ),
      techlist: [
        {
          tech: `JavaScript`,
          href: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
        },
      ],
      github: `https://github.com/ArlifTagaree/FindYourHatJavaScriptExam`,
      demo: `https://replit.com/@ArlifTagaree/jsdAssesment#index.js`,
    },

    {
      img: Colmar,
      title: `COLMAR ACADEMY`,
      content: (
        <>
          Responsive landing page for school. Using HTML, CSS, Bootstrap and
          GitHub pages.
          <br />
          Assessment Generation Thailand
        </>
      ),
      techlist: [
        {
          tech: `HTML`,
          href: `https://developer.mozilla.org/en-US/docs/Web/HTML`,
        },
        {
          tech: `CSS`,
          href: `https://developer.mozilla.org/en-US/docs/Web/CSS`,
        },
        {
          tech: `Bootstrap`,
          href: `https://getbootstrap.com/`,
        },
      ],
      github: `https://github.com/ArlifTagaree/ColmarAcademy-Exam`,
      demo: `https://colmar-academy-exam.vercel.app/`,
    },
  ];

  const Projects = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: auto;

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

  return (
    <Projects>
      <Header>
        <h2 className="red">
          <strong>PROJECTS</strong>
        </h2>
      </Header>
      {projectsData.map(({ img, title, content, techlist, github, demo }) => (
        <ProjectCard
          key={title}
          img={img}
          title={title}
          content={content}
          techlist={techlist}
          github={github}
          demo={demo}
        />
      ))}
    </Projects>
  );
}
