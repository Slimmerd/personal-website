import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  height: 250px;
  width: 100%;
  border-radius: 15px;
  background-color: #F5F5F5;
  box-shadow: 0 22px 40px rgba(0, 0, 0, 0.12);
  transition: transform .4s ease-out 0s;

  &:hover {
    transform: scale(1.01);
  }
`

const Content = styled.div`
  padding: 25px;
  color: #333644;

  h1 {
    font-size: 2.25rem;
    margin-bottom: 15px;
  }
`

const CardComponent: React.FC<{ heading: String, text: JSX.Element }> = ({heading, text}) => {
    return (
        <Card>
            <Content>
                <h1>{heading}</h1>
                <div>{text}</div>
            </Content>
        </Card>
    );
};

export default CardComponent;
