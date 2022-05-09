import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Playground from 'javascript-playgrounds'

function CaseStudySection({
  title,
  description,
  backgroundImage,

}) {
  const buttonList = [
    {
      "id": 0,
      "name": "MVP1",
      "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
    },
    {
      "id": 1,
      "name": "MVP2",
      "url": "//unpkg.com/javascript-playgrounds@^1.0.0/public/index.html"
    },
    {
      "id": 2,
      "name": "MVP3",
      "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
    },
  ]
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <ButtonBox>
          {
            buttonList.map((item, index) => (
              <Button onClick={() => alert("Click Me")}>
                {item.name}
              </Button>
            ))}
        </ButtonBox>
       
        <Figma>
          <iframe
            height="450"
            width="100%"
            src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File"
            allowfullscreen
          />
        </Figma>
        
          <ol>
          {questionList.map(question => {
            return (
              <li key={question.key}>{question.description}</li>
            );
          })}
        </ol>

      </Fade>
    </Wrap>
  );
}

export default CaseStudySection;
const questionList = [
  { description: '1. Idea to designs', key: 0 },
  { description: '2. Design to screen', key: 1 },
  { description: '3. Screen to functionality ', key: 2 },
  { description: '4. Publish App ', key: 3 }
];


const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
  z-index: 1;
`;

const ItemText = styled.div`
  padding-top: 3vh;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;




const ButtonBox = styled.div`
  display: flex;
  flex-direction:row;
  margin-right:20px;
  background-color:red ;

`;
const Button = styled.div`
  padding-left:20px;
  padding-right:20px;
  padding-top:10px;
  padding-bottom:10px;
  border-radius:10px;
  text-align:center;
  background-color:lightgreen;
  margin-top:5px;
  margin-bottom:5px;
  margin-left:10px;
`;
const Figma = styled.div`
  
`;
const FigmaBox = styled.div`
          margin-top:10px;
          display: flex;
          flex-direction:row;
          justify-content:space-around;
         
          border-color:red;
          border-width:3px;
          border:1px solid black;
          background-color:black ;

          `;