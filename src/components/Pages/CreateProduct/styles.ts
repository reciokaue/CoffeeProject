import styled from 'styled-components';

export const Container = styled.div`
    >form{
        display: flex;
        flex-direction: column;
        width: 80%;

        input, textarea, div{ width: 100%;}
        textarea{height: 130px;}
        > div.row{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            > div{ width: 48%;  > input{ width: 100%;}}
        }
        > div.ImageBlock{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            > h1{
                width: 100%;
                text-align: left;
                font-weight: normal;
                font-size: 16px;
                margin-bottom: 10px;
            }
            > #imageFile{
                display: none;
            }
            > .imagesContainer{
                width: fit-content!important;
                height: 80%;

                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;
                /* background: #f0f; */
            }
            .previewImage{
                display: flex;
                align-items: center;
                justify-content: center;

                width: 100px;
                height: 100px;
                border-radius: 12px;
                background: var(--primary);
                flex-shrink: 0;
                cursor: pointer;
                margin-bottom: 10px;
                margin-left: 10px;


                opacity: .5;
                > img{
                    width: 100%;
                    height: 100%;

                    object-fit: cover;
                }
                &:hover{
                    opacity: 1;
                }
            }
        }
        >.submitButton{
            width: 200px;
            height: 44px;
            border-radius: 50px;
            color: var(--c100);
            @media(max-width: 500px){
                width: 100%;
            }
            border: 1.5px solid var(--c100);
            margin: 80px 0px;
            background: transparent;
            &:hover{
                background: var(--primary);
                color: var(--c10);
            }
        }
    }
`;
