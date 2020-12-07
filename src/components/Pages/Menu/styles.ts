import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden!important;
  > div.tabs {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100% !important;
    overflow: hidden;

    > label {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      padding: 0 0 7px;
      margin: auto;
      > button {
        background: transparent;
        font-size: 14px;
        text-decoration: none;
        color: var(--c50);
        transform: 0.5s;
        &.active {
          color: var(--primary);
        }
      }
      > span {
        width: 58px;
        height: 2px;
        background: var(--primary);

        position: absolute;
        bottom: 0;
        transition: 0.5s;
        &.left {
          left: 0;
        }
        &.right {
          left: calc(-58px  + 100%);
        }
      }
    }
  }

  > h1 {
    margin-bottom: 30px;
    border-bottom: 1px solid #fdf;
    > a{
      text-decoration: none;
      color: var(--c100);
    }
  }
  
  
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;

  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory; 
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  
  &.right {
    transform: translateX(-100vw);
  }
  transition: 0.5s;

  ::-webkit-scrollbar{
    display: none;
  }
`;
export const Tab = styled.div`
  scroll-snap-align: start;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  flex-shrink: 0;
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 80%;
    text-align: left;
    padding-bottom: 50px;

    > h1{
      color: var(--c100);
      font-size: 16px;
      border-bottom: 2px solid var(--c100);
      padding-bottom: 2px;
      margin-top: 20px;

    }
    > article{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      border: 1px solid var(--c50);
      border-radius: 12px;
      padding: 5px 10px;
      text-align: left;

      margin-top: 20px;
      > h2{
        font-size: 14px;
        text-align: left;
        width: 100%;
        margin-bottom: 5px;
      }
      > p{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: 12px;
        color: var(--c90);
        > span{
          font-size: 20px;
          color: var(--c100);
        }
      }
      > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 70%;

        margin: 10px 0px 5px;

        > a, button{
          background: transparent;
          color: var(--c100);
          text-decoration: none;
          padding: 6px 10px;
          border: 1px solid var(--c50);
          border-radius: 50px;
          font-size: 14px; 

          &:hover{
            background: var(--primary);
          } 
        }
      }
    }
  }

  ::-webkit-scrollbar{
    width: 3px;
  }
  ::-webkit-scrollbar-thumb{
      background: var(--primary);
      border-radius: 4px;
  }
  ::-webkit-scrollbar-track{
      background: var(--c10);
  }
`;
