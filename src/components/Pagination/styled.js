import styled from 'styled-components';
import media from "styled-media-query";

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  color: var(--texts);
  padding: 1rem 3rem;
  justify-content: space-between;

  a{
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }

  ${media.lessThan("large")`
    font-size: .8rem;
    padding: 1rem;
  `}
`;