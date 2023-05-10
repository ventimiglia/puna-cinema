import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1280px;
  padding: 1rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
  
`;

export const CardContainer = styled.article`
  display: flex;
  gap: 1rem;
  justify-content: left;
  padding: 1rem;
  border: 1px solid #94a1b2;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  margin-bottom: 1rem;
  max-height: 13rem;
  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-height: unset;
  }
  
`;

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fffffe;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  color: #7f5af0;

  &::placeholder {
    color: #72757e;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  border: 1px solid #7f5af0;
  background-color: transparent;
  color: #fffffe;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &.active {
    background-color: #7f5af0;
    color: #fff;
    cursor: pointer;
  }

  &.list {
    border: none;
    background-color: #2cb67d;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  &:hover {
    background-color: #7f5af0;
    color: #fff;
  }
`;

export const Overview = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
`
export const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #fffffe;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: left;
  }
  
`;

export const ModalOverview = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fffffe;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  max-height: 200px;
  overflow: auto;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    max-height: 150px;
  }
  
`;

export const ModalPill = styled.span`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #7f5af0;
  color: #fffffe;
  margin-right: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.2rem;
    margin-right: 0.2rem;
  }
  
`;

export const ModalText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #fffffe;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
`;

export const ButtonWatchList = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  border: none;
  color: #fffffe;
  cursor: pointer;
  heigth: min-content;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;