import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body { 
        -webkit-font-smoothing: antialiased;
        background-color: #232e4c;
    }

    body,input,button{
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 1400px;
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }
`;
