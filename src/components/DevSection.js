import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "../devSection.css"

function DevSection({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImage,
  showDownArrow,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
      </ItemText>
      
      <div class="container"> 
  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
</div>
      <div>
        <text>Exercitation fugiat anim aliquip amet. Aliqua anim in excepteur duis eiusmod esse tempor ipsum elit elit duis adipisicing laborum magna. Exercitation esse eiusmod pariatur sit tempor consectetur nulla duis proident eiusmod. Tempor minim ad ad cillum. Anim aute consectetur excepteur dolor dolore nisi anim adipisicing ullamco minim laboris.</text>
      </div>
      
    </Wrap>
  );
}


export default DevSection;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  margin-left:auto;
  margin-right:auto;
  
  flex-direction: column;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
  z-index: 1;
`;

const ItemText = styled.div`
  padding-top: 7vh;
  padding-bottom:0vh;
  text-align: center;
  margin-bottom:2vh;

`;

const Container = styled.div`
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
`;







{/* <YoutubeBlock>
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='1 '
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    height={400}
                    width={400}
                   style={{display:'flex'}}
                    
                />
            </YoutubeBlock> */}