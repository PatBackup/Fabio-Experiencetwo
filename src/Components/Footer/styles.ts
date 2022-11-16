import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${({ theme }) => theme.backgroundLight};
  height: 8rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: column;
    justify-content: space-between;


    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.secondary};
      text-transform: uppercase;
      font-weight: 1000;
      font-size: 1.2rem;
    }
  

    > section {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.text};
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }

    @media (max-width: 450px) {
      button {
        font-size: 0.9rem;
      }

      > center {
        display: flex;
        align-items: center;
      }

      > section {
        gap: 0.5rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;