import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    text-align: center;
    padding: 10px 0;
    height: calc(100vh - 70px);
    overflow-y: auto;

    .slider{
        width: 80vw;
        height: 80vw;
        flex-shrink: 0;
        margin-top: 50px;

        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory; 
        -webkit-overflow-scrolling: touch;
    }
    .photo{
        flex-shrink: 0;
        width: 80vw;
        height: 100%;
        object-fit: cover;

        scroll-snap-align: start;
    }
    > div{
        margin-top: 30px;
        width: 80vw;
        >h2 {
            text-align: left;
            font-size: 16px;
        }
        > p{
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            > label{
                font-size: 25px;
            }
        }
    }
    .options{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80vw;
        margin: 30px 0px;

        input{
        border-radius: 50%;
        background: #222;

        width: 50px;
        height: 50px;
        flex-shrink: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        color: #dff;
        padding: 5px;
        text-align: center;
        font-size: 20px;
        }
        > button{
            display: flex;
            justify-content: center;
            align-items: center;

            width: 50%;
            height: 50px;
            border-radius: 50px;
            flex-shrink: 0;
        }
    }
`;
