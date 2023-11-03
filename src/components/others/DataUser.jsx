import Image from "next/image";
import React, { useState } from "react";
import FormEditDataUser from "./FormEditDataUser";
import QuestionDeleteProfile from "../modals/QuestionDeleteProfile";
import axios from "axios";
import Cookies from "js-cookie";

const DataUser = ({ dataMyUser, setViewDataUser, viewDataUser }) => {
  const [changeEditProfile, setChangeEditProfile] = useState(false);
  const [onModalQuestion, setOnModalQuestion] = useState(false);
  const [onLoading, setOnLoading] = useState(false);
  const [onMessageError, setOnMessageError] = useState(false);
  const token = Cookies.get("tokenUser");
  const handleFileChange = (e) => {
    setOnLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    if (formData) {
      axios
        .put(`${process.env.DOMAIN_PROD}/usuarios/me/profile-photo`, formData, {
          headers: {
            "x-access-token": token,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setOnLoading(false);
        })
        .catch((error) => {
          setOnMessageError(true);
          setOnLoading(false);
          setTimeout(() => {
            setOnMessageError(false);
          }, 3000);
        });
    }
  };

  return (
    <>
      {onModalQuestion ? (
        <QuestionDeleteProfile
          setOnModal={setOnModalQuestion}
          onModal={onModalQuestion}
          setViewDataUser={setViewDataUser}
          viewDataUser={viewDataUser}
        />
      ) : (
        <section className="w-full h-full fixed top-0 right-0 bottom-0 left-0 bg-bgOpacity flex items-center justify-center z-[999]">
          <article className="glassEffect flex flex-col items-center justify-center p-4 text-white gap-2">
            <div
              className="absolute top-[-.5em] right-[-.5em] flex items-center justify-center text-center p-1 rounded-full bg-whiteSmoke text-black cursor-pointer"
              onClick={() => setViewDataUser(!viewDataUser)}
            >
              <i className="bx bx-x"></i>
            </div>
            {!changeEditProfile && (
              <>
                <h2>Hola {dataMyUser.full_name}, estos son tus datos.</h2>
                <figure className="w-[170px] h-[170px] relative smm:w-[200px] smm:h-[200px]">
                  {onLoading ? (
                    <div className="loadingChangePhoto"></div>
                  ) : (
                    <Image
                      width={500}
                      height={500}
                      src={dataMyUser.profileImage?.imageUrl || ""}
                      alt="imagen de perfil"
                      className="w-full h-full object-cover rounded-full shadow-sm shadow-darkGray"
                    />
                  )}

                  <label
                    htmlFor="change_photo"
                    className="absolute top-2 right-2 bg-whiteSmoke rounded-full text-black p-[.2em] flex items-center justify-center text-center cursor-pointer shadow-md smm:p-[.4em]"
                  >
                    <input
                      type="file"
                      name="file"
                      id="change_photo"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <i className="bx bx-pencil text-lg smm:text-xl"></i>
                  </label>
                </figure>
                {onMessageError && (
                  <p className="text-center text-sm smm:w-[70%]">
                    Ocurrió un error al intentar modificar tu foto de perfil,
                    por favor, intenta más tarde nuevamente o si el problema
                    persiste, ponte en contacto con nuestro equipo.{" "}
                  </p>
                )}
              </>
            )}

            {changeEditProfile === false ? (
              <ul className="w-full flex flex-col items-center justify-center p-8">
                <li className="w-full flex flex-col text-start text-lg ">
                  <p className="text-sm text-darkGray uppercase mb-[-.3em] smm:text-base">
                    Tu nombre:
                  </p>
                  <p className="smm:text-xl">{dataMyUser.full_name}</p>
                </li>
                <li className="w-full text-start text-lg mt-2">
                  <p className="text-sm text-darkGray uppercase mb-[-.3em] smm:text-base">
                    Tu correo electrónico:
                  </p>

                  <p className="smm:text-xl">{dataMyUser.email}</p>
                </li>
                <li className="w-full text-start text-lg mt-2">
                  <p className="text-sm text-darkGray uppercase mb-[-.3em] smm:text-base">
                    Tu numero de telefono:
                  </p>

                  <p className="smm:text-xl">{dataMyUser.phone}</p>
                </li>
                <li className="w-full text-start text-lg mt-2">
                  <p className="text-sm text-darkGray uppercase mb-[-.3em] smm:text-base">
                    Tu numero de DNI:
                  </p>
                  <p className="smm:text-xl">{dataMyUser.dni}</p>
                </li>
                <li className="w-full flex flex-wrap items-center justify-start gap-4 pt-8">
                  <button
                    className="border px-4 rounded-md shadow-lg uppercase smm:text-lg"
                    onClick={() => setChangeEditProfile(!changeEditProfile)}
                  >
                    Editar
                  </button>
                  <button
                    className="border px-4 rounded-md shadow-lg smm:text-lg uppercase"
                    onClick={() => setOnModalQuestion(true)}
                  >
                    Eliminar perfil
                  </button>
                </li>
              </ul>
            ) : (
              <FormEditDataUser
                dataUser={dataMyUser}
                setChangeEditProfile={setChangeEditProfile}
                changeEditProfile={changeEditProfile}
                getMyUser={getMyUser}
              />
            )}
          </article>
        </section>
      )}
    </>
  );
};

export default DataUser;
