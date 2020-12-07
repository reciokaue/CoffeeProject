import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiasing;
    }
    html,body, #root{
        height: 100%;
        background: var(--c10);
        color: var(--c100);
    }
    *, button, input{
        border:0;
        outline:0;

        font-family: 'Montserrat', sans-serif;
    }

    :root{
    --primary: #B0834C;
    --c00: #000000;
    --c10: #111111;
    --c20: #222222;
    --c30: #333333;
    --c40: #444444;
    --c50: #555555;
    --c60: #666666;
    --c70: #777777;
    --c80: #888888;
    --c90: #999999;
    --c100: #fffafa;     
    }
`;