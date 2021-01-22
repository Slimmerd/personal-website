import React from 'react';
import styled from "styled-components";
import {AboutMeInfo} from '../utils/aboutme';
import CardComponent from "./common/aboutmeCards";

const Container = styled.div`
  margin-top: 150px;

  .heading {
    font-weight: 500;
    margin-bottom: 0.2rem;
  }
`

const AboutMe = () => {

    const lang: JSX.Element = (
        <ul>
            {AboutMeInfo[1].desc_text.map((item: String, index: number) => <li key={index}>{item}</li>)}
        </ul>)


    const desc_tech: JSX.Element = (
        <div className="grid grid-cols-2 gap-2">
            <ul>
                <li className={'heading'}>Frontend:</li>
                {AboutMeInfo[2].desc_text[0].map((item: String, index: number) => <li key={index}>{item}</li>)}
            </ul>
            <ul>
                <li className={'heading'}>Backend:</li>
                {AboutMeInfo[2].desc_text[1].map((item: String, index: number) => <li key={index}>{item}</li>)}

            </ul>
        </div>)

    return (
        <>
            <Container className="grid grid-cols-1 gap-32 xl:grid-cols-3">

                <CardComponent heading={AboutMeInfo[0].heading_text} text={<div>{AboutMeInfo[0].desc_text}</div>}/>

                <CardComponent heading={AboutMeInfo[1].heading_text} text={lang}/>

                <CardComponent heading={AboutMeInfo[2].heading_text} text={desc_tech}/>

            </Container>
        </>

    );
};

export default AboutMe;
