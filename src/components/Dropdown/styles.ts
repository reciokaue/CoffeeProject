import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;

    cursor: pointer;
    padding: 0px 15px;
    border: solid 1.5px var(--c90);
    background: var(--c10);
    height: 44px;

    position: relative;    
    z-index: 1;
    span{ 
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 44px;
        color: var(--c100);

        > h1, span{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 20px;
            text-transform: uppercase;
        }
        > h1{
            line-height: .9;
            padding: 14px 20px 14px 20px;
            font-size: 18px;
            font-weight: 600;
            transition: .3s;
            letter-spacing: 2px;
        }
        > span{
            border-top: 1px solid var(--primary);
            line-height: 1.1;
            font-size: 16px;
            font-weight: 400;
            color: var(--white);
            opacity: 0.8;
        }
    }
    
    .droped{
        background: var(--tertiary);
        & > svg{
            transform: rotate(180deg);
        }
    }
`;
export const Arrow = styled(MdKeyboardArrowDown)`
    width: 25px;
    height: 25px;
    color: var(--white);
    cursor: pointer;
`;
export const DropContainer = styled.div`
    height: 0px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 44px;
    background: var(--c10);

    display: flex;
    justify-content: center;
    flex-direction: column;

    &.ContainerDroped{
        height: fit-content!important;
        margin-bottom: 10px;
        top: 42px;
        transition: .4s;
        border: 1.5px solid var(--c30);
    }
    transition: .4s;
    > h2, div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;

        line-height: 1.1;
        padding: 14px 20px;
        text-transform: uppercase;
        font-size: 16px;
        color: var(--c50);
        font-weight: 400;
        border-top: 1px solid var(--c50);

        text-decoration: none;
        &:hover{
            background: var(--primary);
            color: var(--c10);
            transition: .5s;
        }
    }
`;