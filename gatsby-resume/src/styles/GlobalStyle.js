import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
    --background : white;
    --backdrop: #f3f3f33f;
    --light-gray: #505050;
    --soft-gray: #e0e0e0;
    --text-black: #3c3c3c;
    --sub-text: #36313d;
    --btn-primary: #ff5454;
    --secondary:#6c63ff;
    --title:#1b1464;

    
    /* --background : #0000006b;
    --backdrop: #000000eb; */
}
*{
    margin: 0;
    padding:0;
}
html{
    font-family: 'Questrial', sans-serif;
}
body{
    background-color: var(--backdrop);
}
h1{
    @media (max-width: 450px){
        font-size: 1.5rem;
    }
}
h2{
    @media (max-width: 450px){
        font-size: 1.2rem;
    }
}
h1,h2,h3,h4{
    color: var(--text-black);
}
p{
    color: var(--sub-text);
    margin: 1rem 0;
}
hr{
    border-top: 1px solid var(--soft-gray);
}
.fullContainer{
    background-color: var(--background);
    padding: 8rem 0;
    box-shadow: 0px 0px 10px -5px var(--light-gray);
    margin: 1rem 0;
    @media (max-width: 450px){
        padding: 2rem 0   
    }
}
.container{
    margin: 0 auto;
    width: 80%;
    max-width: 1240px;
    @media (max-width: 450px){
        width: 85%;
    }
}
.logo{
    font-family: 'Righteous', cursive;
    color: var(--text-black)
}
.btn{
    padding: 10px 20px;
    border: none;
    display: flex;
    align-items: center;
    &-primary{
       background-color: var(--btn-primary);
       color: white; 
    }
    >:first-child{
        display: flex; align-items: center;
        margin-right: 5px;
    }
    &:hover{
        cursor: pointer;
    }
}
`;

export default GlobalStyle;
