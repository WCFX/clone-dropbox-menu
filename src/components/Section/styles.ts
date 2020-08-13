import styled from 'styled-components';

export const Container = styled.div`
  --pading-top: 6.25rem;
  --padding-bottom: 7.5rem;
  --heading-font-size: 2rem;
  --content-width: 100vw;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }
  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }
  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }
  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  &:first-child {
    --padding-top: 8.125rem;
    --heading-font-size: 3.187rem;

    @media (min-width: 1024px) {
      --heading-font-size: 4.437rem;
      --content-width: 50%;
    }
  }

  background: var(--bg-color);
  position: relative;

`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }
  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }
  padding:
`;