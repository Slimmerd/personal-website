import React from 'react';
import Image from "next/image";
import styled from 'styled-components';
import {myLinks} from "../../utils/links";

const CardStyle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  
  padding: 35px;
  height: 100px;
  display: flex;
  align-items: center;;
  border-radius: 15px;
  box-shadow: 0 22px 40px rgba(0, 0, 0, 0.12);
  background: linear-gradient(to right, #333644, #333644 50%, #FFF 50%);
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;

  &:hover {
    background-position: 0 100%;
    color: #FFF;
  }
    
  .text {
    margin: 0 auto;
  }

`

const LinksCard: React.FC<{ name: String }> = ({name}) => {
    let newLink
    for (let item in myLinks){
        if (item === name){
             // TS7053
             newLink = myLinks[item]
        }
    }

    return (
        <a href={newLink}>
            <CardStyle>
                <Image src={`/static/${name}.png`} alt="Picture of link icon"
                       width={32}
                       height={32} layout={'fixed'}/>
                <div className={'text'}>My {name}</div>
            </CardStyle>
        </a>
    );
};

export default LinksCard;
