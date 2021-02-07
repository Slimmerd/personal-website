import React from 'react';
import styled from "styled-components";

const ProjectCard = styled.div`
  min-height: 340px;
  padding: 25px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0 22px 40px rgba(0, 0, 0, 0.12);
  transition: transform .4s ease-out 0s;

  &:hover {
    transform: translateZ(0) scale(1.01);
  }

  .header {
    font-weight: 500;
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }

  .description {
    margin-bottom: 1rem;
  }

  .link {
    position: relative;
    display: inline-block;
    font-weight: 400;
    overflow: hidden;
    background: linear-gradient(to right, #d41118, #d41118 50%, #C65F63 50%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
    text-decoration: none;

    &:hover {
      background-position: 0 100%;
    }

    padding-right: 10px;
    margin-bottom: 1rem;
  }

  .subhead {
    font-weight: 500;
    margin-bottom: 0.2rem;
  }
`


const ProjectCards: React.FC<{ item: any }> = ({item}) => {

    return (
        <ProjectCard>

            <div className={'header'}>{item.Name}</div>
            <div className={'description'}>{item.Description}
            </div>

            <a className={'link'} href={item.WebsiteLink}>Website link</a>
            <a className={'link'} href={item.Github}>Github link</a>

            <div className="grid grid-cols-2 gap-2">
                {item.Web ? <>
                        <ul>
                            <li className={'subhead'}>Frontend:</li>
                            {item.Frontend.map((tech: String, index: number) => <li key={index}>{tech}</li>)}
                        </ul>
                        <ul>
                            <li className={'subhead'}>Backend:</li>
                            {item.Backend.map((tech: String, index: number) => <li key={index}>{tech}</li>)}
                        </ul>
                    </>
                    :
                    <ul>
                        <li className={'subhead'}>Technologies:</li>
                        {item.Technologies.map((tech: String, index: number) => <li key={index}>{tech}</li>)}
                    </ul>

                }
            </div>
        </ProjectCard>
    );
};

export default ProjectCards;
