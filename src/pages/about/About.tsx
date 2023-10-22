// About.tsx
import React from "react";
import AppLayout from "../../layouts/AppLayout";

const About: React.FC = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const screenHeight = window.innerHeight;
console.log('Screen Height:', screenHeight);
  return (
    <AppLayout pageTitle="About">
      
     <div className="container" style={{minHeight:`${screenHeight-250}px`}}>
     <h1 className="text-center" style={{ padding: "30px" ,marginRight:'auto',marginLeft:'auto' }}>Dummy text</h1>
    <p style={{marginRight:'auto',marginLeft:'auto'}}>
            {/* I am a highly skilled software engineer and full-stack developer
            with expertise in React.js and .NET technologies.My proficiency in
            these technologies enables me to create dynamic and responsive web
            applications, utilizing the power of React on the front end and the
            versatility of .NET on the back end. I have strong programming and
            problem-solving abilities. I am capable of delivering robust and
            efficient solutions to meet various business and technological
            needs. */}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            
            </p>
         
     </div>
       
    </AppLayout>
  );
};

export default About;
