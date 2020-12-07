import styled from 'styled-components';

export const Container = styled.div`
    > h1{
        margin-bottom: 30px;
    }
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 300px;
        height: auto;
        border: 1px solid #fdf;
        border-radius: 50px;
        padding: 10px 10px;

        margin-bottom: 20px;
        transition: .5s;
        div{
            display: flex;
            > label{
                font-size: 20px;
                margin-right: 10px;
            }
            > button{
                display: flex;
                align-items:center;
                justify-content: center;
                padding: 5px;
                width: 25px;
                height: 25px;
                background-color: #E8265E;
                border-radius: 50px;
                color: #dff;
            }
        }
        
    }
    > article{
        display: flex;
        flex-direction: column;
        width: 300px;
        > div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 10px;
            span{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                input{
                    border-radius: 50%;
                    background: #222;
                    margin-top: 5px;

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
            }
            > div{
                width: 100%;
                margin-left: 10px;  
                > label{
                    border-radius: 50px;
                    width: 100%;
                    background: #222;
                    margin-top: 5px;
                    
                    height: 50px;
                    flex-shrink: 0;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #dff;
                    padding: 5px;
                    text-align: left;
                    font-size: 15px;
                }
            }
        }
        > input{
            border-radius: 50px;
            width: 100%;
            background: #222;
            margin-bottom: 10px;
            
            height: 50px;
            flex-shrink: 0;

            display: flex;
            justify-content: center;
            align-items: center;
            color: #dff;
            padding: 5px 15px;;
            text-align: left;
            font-size: 15px;
        }
        > button{
            border-radius: 50px;
            width: 100%;
            background: #0F9D58;
            
            height: 50px;
            flex-shrink: 0;
            margin-bottom: 50px;

            display: flex;
            justify-content: center;
            align-items: center;
            color: #dff;
            padding: 5px;
            text-align: left;
            font-size: 15px;
        }
    }
`;
