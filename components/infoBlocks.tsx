import React, { RefObject } from 'react';
import styled from 'styled-components';
import { PersonalProjects } from '../utils/projects';
import LinksCard from './common/linksCards';
import ProjectCards from './common/projectCards';

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
  
  .cards{
    margin: 0 auto 50px auto;
  }
`

const InfoBlocks: React.FC<{projectsRef: RefObject<HTMLElement>, linksRef:RefObject<HTMLElement> }> = ({projectsRef,linksRef}) => {
    return (
        <Container>
            <Content>
                <section id={'projects'} ref={projectsRef}>
                <div className={'projects'} >My projects:</div>
                <div className="cards grid grid-cols-1 gap-16 md:grid-cols-2 ">
                    {PersonalProjects.map((item,index) => <ProjectCards item={item} key={index}/>)}
                </div>
                </section>
                    <section id="links" ref={linksRef}>
                    <div className={'projects'}>My links:</div>
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
