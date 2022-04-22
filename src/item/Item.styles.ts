import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justif-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;

    button {
        border-radius: 0 0 20px 20px;
    }
 
    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: Arial;
        padding: 1rem;
        height: 100%;
    }
`;