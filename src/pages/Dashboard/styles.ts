import styled, { css } from "styled-components";

import { shade } from "polished";

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  max-width: 700px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 24px;
    color: #01a99a;
  }

  input {
    flex: 1;
    height: 40px;
    padding: 4px 15px;
    margin: 5px 0px;

    color: #3a3a3a;
    border: 2px solid #fff;
    border-radius: 2px;

    width: 500px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 40px;
    background: #01a99a;
    border-radius: 3px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    margin: 5px 0;

    &:hover {
      background: ${shade(0.2, "#01a99a")};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  font-weight: bold;
`;

export const Table = styled.table` 
  width: 100%; 
  border: 4px solid ${shade(0.2, "#01a99a")}; 

  border-collapse: collapse; 

  th {
    position: sticky;
    top: 0;
  }

  background-color: #fcfcfc;

  td,
  th {
    border: 1px solid ${shade(0.3, "#01a99a")};
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dcdde0;
  }

  tr:hover {
    background-color: #dcdde0;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${shade(0.2, "#01a99a")};
    color: white;
  }
`; 