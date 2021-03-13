import React, {RefObject} from 'react';
import styled from 'styled-components';
import {PersonalProjects} from '../utils/projects';
import LinksCard from './common/cards/linksCards';
import ProjectCards from './common/cards/projectCards';
import CardComponent from "./common/cards/aboutmeCards";
import {AboutMeInfo} from "../utils/aboutme";

const Container = styled.div`
  margin-top: 150px;
  background: #F5F5F5;
  border-radius: 15px 15px 0 0;
  width: 100%;
  min-height: 800px;
`

const Content = styled.div`
  padding: 35px;
  color: #333644;

  .projects {
    margin-bottom: 55px;
    font-weight: 700;
    font-size: 4rem;
  }

  .heading {
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  .cards {
    margin: 0 auto 50px auto;
  }
`

const InfoBlocks: React.FC<{ projectsRef: RefObject<HTMLElement>, linksRef: RefObject<HTMLElement>, main: RefObject<HTMLElement> }> = ({
                                                                                                                                           projectsRef,
                                                                                                                                           linksRef,
                                                                                                                                           main
                                                                                                                                       }) => {

    const lang: JSX.Element = (
        <ul>
            {AboutMeInfo[1].arr_desc_text?.map((item: String, index: number) => <li key={index}>{item}</li>)}
        </ul>)

    const desc_tech: JSX.Element = (
        <div className="grid grid-cols-2 gap-2">
            <ul>
                <li className={'heading'}>Frontend:</li>
                {AboutMeInfo[2].arr_arr_desc_text![0].map((item: String, index: number) => <li key={index}>{item}</li>)}
            </ul>
            <ul>
                <li className={'heading'}>Backend:</li>
                {AboutMeInfo[2].arr_arr_desc_text![1].map((item: String, index: number) => <li key={index}>{item}</li>)}

            </ul>
        </div>)

    return (
        <Container>
            <Content>
                <section id={'main'} ref={main}>
                    <div className={'projects'}>📄 Main information:</div>
                    <div className={'cards grid grid-cols-1 gap-16 md:grid-cols-2'}>
                        <CardComponent heading={AboutMeInfo[0].heading_text}
                                       text={<div>{AboutMeInfo[0].desc_text}</div>}/>
                        <CardComponent heading={AboutMeInfo[1].heading_text} text={lang}/>
                        <CardComponent heading={AboutMeInfo[2].heading_text} text={desc_tech}/>
                    </div>
                </section>


                <section id={'projects'} ref={projectsRef}>
                    <div className={'projects'}>📦 My projects:</div>
                    <div className="cards grid grid-cols-1 gap-16 md:grid-cols-2 ">
                        {PersonalProjects.map((item, index) => <ProjectCards item={item} key={index}/>)}
                    </div>
                </section>

                <section id="links" ref={linksRef}>
                    <div className={'projects'}>🔗 My links:</div>
                    <div className={'cards grid grid-cols-1 gap-16 lg:grid-cols-3'}>
                        <LinksCard name={'linkedin'}/>
                        <LinksCard name={'github'}/>
                        <LinksCard name={'email'}/>
                    </div>
                </section>
            </Content>
        </Container>
    );
};

export default InfoBlocks;
