import styled from '@emotion/styled';

export const OptionsControlBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: start;
  margin-left: 8px;
`;

export const OptionsControl = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.14;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.03em;
  color: #212121;
  background-color: #f5f4fa;
  border: 1px solid #d3d2d7;
  border-radius: 6px;
  cursor: pointer;
  padding: 4px 10px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    border: transparent;
    color: #ffffff;
    background-color: #2196f3;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
