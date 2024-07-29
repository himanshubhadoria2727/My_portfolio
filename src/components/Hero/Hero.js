import React from 'react';
// import resume from 'resume.pdf';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Hero = (props) => (
  <>
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center> 
          Hey, This is <br />
          Himanshu Bhadoria
          </SectionTitle>
        <SectionText>
        I am a full-stack developer with hands-on experience in creating seamless web and Android applications.
        </SectionText>
        <div classname="button">
        <a href="Himanshu_resume_latest.pdf" download="Himanshu_resume_latest.pdf">
          <button style={buttonStyle}>Download Resume</button>
        </a>
        
        </div>
        <br></br>
      </LeftSection>
    </Section>
  
  </>
);

export default Hero;
