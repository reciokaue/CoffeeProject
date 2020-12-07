import styled, { css } from "styled-components";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import { IoBasketOutline } from "react-icons/io5";

export const Container = styled.div`
  > section.pages{
      width: 100vw;
      height: calc(100vh - 70px);
    > div{
      display: flex;
      flex-direction: column;

      align-items: center;
      width:100%;
      height: 100%;
      overflow: hidden;

      text-align: center;
      padding-top: 10px;
      overflow-y: scroll;

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
    }
  }
  > section.bottomContainer {
    display: flex;
    justify-content: center;

    height: 70px;
    width: 100%;
    padding: 0 50px;

    border-top: 1px solid var(--c100);
    position: relative;
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 350px;
      /* width: 100%; */
      height: 100%;
      flex-shrink: 0; 
      position: relative;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;

        text-decoration: none;
        position: relative;
        &.active {
        > svg{
              color: var(--primary);
          }
          > span{
              background: var(--primary); 
          }
        }
      }
      > span{
        position: absolute;
        bottom: 15px;

        width: 58.335px;
        height: 3px;
        background: var(--primary);

        transition: .5s;
        margin-left: 29.1675px;

        /* left: 0;   */
        &.left {left: 0;}
        &.right{left: calc(-116.67px + 100%);}
        &.middle{left: calc(-58.335px + 50%);}
      }
    }
  }
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  color: var(--c50);
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  ${iconCSS}
`;
export const MenuIcon = styled(FiCoffee)`
  ${iconCSS}
`;
export const BasketIcon = styled(IoBasketOutline)`
  ${iconCSS}
`;
