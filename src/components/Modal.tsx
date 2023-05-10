import React from "react";
import styled from "styled-components";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  backgroundimage: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  backgroundimage,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onClick={onClose}>
      <ModalWrapper
        backgroundimage={backgroundimage}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalWrapper>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div<{ backgroundimage?: string }>`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  background-image: ${(props) =>
    props.backgroundimage
      ? `linear-gradient(90deg, rgba(0,0,0,0.9) 34%, rgba(52,0,99,0.2) 100%), url(${process.env.NEXT_PUBLIC_URL_API_POSTER_BASE}/t/p/original${props.backgroundimage})`
      : "poster.jpg"};
  background-size: cover;
  width: 100%;
  max-width: 1000px;
  max-height: 600px;
  height: 90%;
  margin: 10rem;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export default Modal;
