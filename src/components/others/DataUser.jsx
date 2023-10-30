import Image from "next/image";
import React, { useState } from "react";
import FormEditDataUser from "./FormEditDataUser";

const DataUser = ({ dataMyUser, setViewDataUser, viewDataUser, getMyUser }) => {
  const [changeEditProfile, setChangeEditProfile] = useState(false);
  return (
    <section className="w-full h-full fixed top-0 right-0 bottom-0 left-0 bg-bgOpacity flex items-center justify-center z-[999]">
      <article className="glassEffect flex flex-col items-center justify-center p-4 text-white gap-2">
        <div
          className="absolute top-[-.5em] right-[-.5em] flex items-center justify-center text-center p-1 rounded-full bg-whiteSmoke text-black cursor-pointer"
          onClick={() => setViewDataUser(!viewDataUser)}
        >
          <i className="bx bx-x"></i>
        </div>
        <h2>Hola {dataMyUser.full_name}, estos son tus datos.</h2>
        <figure className="w-[120px] h-[120px] relative">
          <Image
            width={500}
            height={500}
            src={dataMyUser.profileImage?.imageUrl || ""}
            alt="imagen de perfil"
            className="w-full h-full object-cover rounded-full shadow-sm shadow-darkGray"
          />
          <div className="absolute top-1 right-1 bg-white rounded-full text-black p-1 flex items-center justify-center text-center cursor-pointer shadow-md">
            <i className="bx bx-pencil"></i>
          </div>
        </figure>
        {changeEditProfile === false ? (
          <ul className="w-full flex flex-col items-center justify-center p-8">
            <li className="w-full flex flex-col text-start text-lg ">
              <p className="text-sm text-darkGray uppercase mb-[-.3em]">
                Tu nombre:
              </p>
              <p>{dataMyUser.full_name}</p>
            </li>
            <li className="w-full text-start text-lg mt-2">
              <p className="text-sm text-darkGray uppercase mb-[-.3em]">
                Tu correo electrónico:
              </p>

              <p>{dataMyUser.email}</p>
            </li>
            <li className="w-full text-start text-lg mt-2">
              <p className="text-sm text-darkGray uppercase mb-[-.3em]">
                Tu numero de telefono:
              </p>

              <p>{dataMyUser.phone}</p>
            </li>
            <li className="w-full text-start text-lg mt-2">
              <p className="text-sm text-darkGray uppercase mb-[-.3em]">
                Tu numero de DNI:
              </p>
              <p>{dataMyUser.dni}</p>
            </li>
            <li className="w-full flex items-center justify-start gap-4 pt-8">
              <button
                className="border px-4 rounded-md shadow-lg"
                onClick={() => setChangeEditProfile(!changeEditProfile)}
              >
                Editar
              </button>
              <button className="border px-4 rounded-md shadow-lg">
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
  );
};

export default DataUser;
