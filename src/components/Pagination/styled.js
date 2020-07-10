import styled from 'styled-components';

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  color: #8899a6;
  padding: 0.5rem 3rem;
  justify-content: space-between;

  a{
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: #1fa1f2;
    }
  }
`;