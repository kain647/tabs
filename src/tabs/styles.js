import styled from "styled-components";

export const TitleContent = styled.h1`
  display: flex;
  margin-top: 0;
  font-size: 35px;
  line-height: 60px;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.1);
  color: #333;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
  user-select: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: start;
    width: 100%;
    min-height: 100vh;
  }
  .tabs {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }
  }
  .tab {
    display: flex;
    cursor: pointer;
    background-color: #f3f2f2;
    margin-right: 1px;
    padding: 15px;
    align-items: center;
    @media screen and (max-width: 768px) {
      margin-bottom: 1px;
      justify-content: center;
      margin-right: 0;
      :last-child {
        margin-bottom: 0;
      }
    }
    &:hover {
      background-color: #f8f8f8;
    }
    &.active {
      background-color: #dcdcdc;
      color: black;
    }
  }
  .content {
    display: flex;
    height: auto;
    border: 1px solid #dcdcdc;
    padding: 20px;
    background-color: #fff;
    //overflow-y: scroll;
    @media screen and (max-width: 768px) {
      border: none;
    }
  }
  .textRight {
    text-align: right;
  }
`;