import styled from 'styled-components';

export const listWrapper = styled.section`
  body#grid & {
    background-color: var(--borders);
    border-bottom: 1px solid var(--borders);
    display: grid;
    grid-area: posts;
    grid-gap: 1.5px;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
  }
`;