import React from "react";
import { Anchor } from "../Anchor/Anchor";
import { Skills } from "../Skills/Skills";
import "./Profile.sass";
import TypeAnimation from "react-type-animation";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import { IoDocumentTextSharp } from "react-icons/io5";
import profile from "../../assets/Profile/my profile.jpg";

export function Profile() {
  const ProfilePic = styled.img`
    width: 400px;
    margin: 20px ;
    
    @media screen and (max-width: 768px)  {
      
    max-width: 250px;
    margin: 10px auto;
      
    }
  `;
  
  const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;

    

    @media screen and (max-width: 768px) {
      
      display: block;
      
      div {
      
    }
    }
  `

  const ButtonContainer = styled.div`

  @media screen and (max-width: 768px) {
    
   
      
      
    }
    
  `

  return (
    <div className="Profile">
      <div className="header">
        <h2 class="red"><strong>ABOUT ME</strong></h2>
      </div>

      <motion.div
        viewport={{ once: true, amount: 0.1 }}
        initial={{ x: -300, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "Tween",
          duration: 1,
        }}
      >
        <Title>
        <ProfilePic src={profile}></ProfilePic>
        <div>
        <h1>Arlif Tagaree</h1>
        <h2>Junior Software Developer</h2>
        </div>
        </Title>
      </motion.div>

      <motion.div
        viewport={{ once: true, amount: 0.1 }}
        initial={{ x: 300, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "Tween",
          duration: 1,
          delay: 0.5,
        }}
      >
        <div className="content">
          <p>I am a self-motivated tech enthusiast graduated from {" "}
            <Anchor
              text="Generation Thailand"
              href="https://thailand.generation.org/"
            /> Junior Software Developer (Fullstack) Bootcamp seeking for software developer role.<br />
            <br /> Previously, I have 3 years of work experience in engineer construction industry with high mainly responsible for Project progress (S-Curve) planning and report ,coordinate with main contractor about contracts and payment including site issues.<br />

            <br /> Equipped with soft skills and growth mindset hungry to learn new IT knowledge, I am very eager to apply my technical coding skills in <strong style={{color:"white"}}>MERN Stack</strong> and my previous work experience in team collaboration, orientation to detail and ability to work under pressure to application and website development.
          </p>
        </div>
      </motion.div>

      <ButtonContainer>
      <motion.div
        viewport={{ once: false, amount: 0.1 }}
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "Tween",
          duration: 1,
          delay: 0,
        }}
      >
        
        <Button
          icon={<IoDocumentTextSharp />}
          blank={true}
          text="RESUME"
          href="https://drive.google.com/file/d/1V7Hw9TexeNDeayGLnb0uftj1eEU_J5Ma/view?usp=share_link"
        />
        
      </motion.div>
      </ButtonContainer>
      <Skills />
    </div>
  );
}
