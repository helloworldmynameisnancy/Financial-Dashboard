import React from "react";
import styled from "styled-components";
const Card = ({ icon, title, money, flexBasis }) => {
  return (
    <CardStyled flexBasis={flexBasis}>
      <div className="icon-bg">
        <Icon className="material-symbols-rounded">{icon}</Icon>
      </div>
      <div>
        <p className="card-title">{title}</p>
        <p className="money">{money}</p>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  background: #ffffff;
  // box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 6.25rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 0 0.938rem;
  flex: 1;
  max-width: ${(props) => props.flexBasis || "calc(25% - 0.703rem)"};
  .card-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-left: 1.125rem;
  }
  .money {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 1.125rem;
  }
  .icon-bg {
    background: #d9d9d9;
    min-width: 3rem;
    height: 3rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1400px) {
    min-width: calc(50% - 0.469rem);
    max-width: calc(50% - 0.469rem);
  }
  @media (max-width: 895px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

const Icon = styled.i`
  color: #4b4b4b;
  .material-symbols-rounded {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
  }
`;

export default Card;
