import { clearToken } from "@/store/slice/tokenUser.slice";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const QuestionDeleteProfile = ({
  setOnModal,
  onModal,
  setViewDataUser,
  viewDataUser,
}) => {
  const token = useSelector((state) => state.tokenUser);
  const dispatch = useDispatch();

  const router = useRouter();
  const deleteProfile = () => {
    axios
      .delete(`${process.env.DOMAIN_PROD}/usuarios/me`, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        setOnModal(!onModal);
        setViewDataUser(!viewDataUser);
        dispatch(clearToken());
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <Card className="glassEffect">
        <Text>
          ¿Estás seguro de que deseas eliminar tu cuenta?
          <br />
          Eliminar tu cuenta significa que perderás acceso a tu perfil, esta
          acción no se puede deshacer. Por favor, piensalo.
        </Text>
        <ContainerBtns>
          <BtnDelete onClick={deleteProfile}>Eliminar</BtnDelete>
          <Btn onClick={() => setOnModal(!onModal)}>Cancelar</Btn>
        </ContainerBtns>
      </Card>
    </Wrapper>
  );
};

export default QuestionDeleteProfile;

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Card = styled.article`
  width: min(90%, 700px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 3em;
  border-radius: 0.5em;
  box-shadow: 0px 0px 6px #b00020;
`;

const Text = styled.p`
  text-align: center;
  font-weight: 500;
  color: #fff;
  @media screen and (min-width: 996px) {
    font-size: 1.2em;
  }
`;

const ContainerBtns = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
`;

const Btn = styled.button`
  padding: 0.3em 1em;
  border: none;
  background-color: #4d47c3;
  color: #fff;
  border-radius: 0.5em;
  @media screen and (min-width: 996px) {
    font-weight: 600;
  }
`;

const BtnDelete = styled.button`
  padding: 0.3em 1em;
  border: none;
  background-color: #b00020;
  color: #fff;
  border-radius: 0.5em;
  @media screen and (min-width: 996px) {
    font-weight: 600;
  }
`;
