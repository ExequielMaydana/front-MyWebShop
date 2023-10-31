import { Formik } from "formik";
import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

const FormEditDataUser = ({
  dataUser,
  setChangeEditProfile,
  changeEditProfile,
  getMyUser,
}) => {
  return (
    <article className="w-full">
      <Formik
        initialValues={{
          full_name: dataUser.full_name,
          email: dataUser.email,
          dni: dataUser.dni,
          phone: dataUser.phone,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.full_name) {
            errors.full_name = "Requerido";
          } else if (values.full_name.length < 3) {
            errors.full_name = "El nombre debe contener al menos 3 caracteres";
          }
          if (!values.email) {
            errors.email = "Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Correo electrónico no válido";
          }
          if (!values.dni) {
            errors.dni = "Requerido";
          }
          if (!values.phone) {
            errors.phone = "Requerido";
          }

          return errors;
        }}
        onSubmit={(values) => {
          const tokenUser = Cookies.get("tokenUser");

          axios
            .put(`${process.env.DOMAIN_PROD}/usuarios/me`, values, {
              headers: {
                "x-access-token": tokenUser,
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              getMyUser();
              setChangeEditProfile(!changeEditProfile);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <h3 className="text-start font-semibold text-white text-base">
              Editar datos personales
            </h3>
            <div className="flex flex-col">
              <label
                className="uppercase text-sm text-darkGray"
                htmlFor="full_name"
              >
                Tu nombre:
              </label>
              <input
                className="pl-2 py-2 outline-none rounded-md bg-tras bg-whiteSmoke text-black"
                type="text"
                name="full_name"
                id="full_name"
                placeholder="Nombre completo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.full_name}
              />

              {errors.full_name && touched.full_name && (
                <p className="text-error text-xs mt-1">{errors.full_name}</p>
              )}
            </div>

            <div className="relative w-full flex flex-col gap-1">
              <label
                className="uppercase text-sm text-darkGray"
                htmlFor="email"
              >
                Tu correo electrónico:
              </label>
              <input
                className="pl-2 py-2 outline-none rounded-md bg-tras bg-whiteSmoke text-black"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {errors.email && touched.email && (
                <p className="text-error text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label
                className="uppercase text-sm text-darkGray"
                htmlFor="phone"
              >
                Tu numero de telefono:
              </label>
              <input
                className="pl-2 py-2 outline-none rounded-md bg-tras bg-whiteSmoke text-black"
                type="number"
                name="phone"
                id="phone"
                placeholder="Teléfono"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />

              {errors.phone && touched.phone && (
                <p className="text-error text-xs text-start mt-1">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="relative w-full flex flex-col gap-1">
              <label className="uppercase text-sm text-darkGray" htmlFor="DNI">
                Tu numero de DNI:
              </label>
              <input
                className="pl-2 py-2 outline-none rounded-md bg-tras bg-whiteSmoke text-black"
                type="number"
                name="dni"
                id="DNI"
                placeholder="DNI"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dni}
              />

              {errors.dni && touched.dni && (
                <p className="text-error text-xs text-start mt-1">
                  {errors.dni}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="uppercase block w-full p-2 text-center mt-4 text-white bg-slateBlue border-none rounded-md shadow shadow-custom font-semibold"
              >
                Guardar datos
              </button>
              <button
                onClick={() => setChangeEditProfile(!changeEditProfile)}
                className="uppercase block w-full p-2 text-center text-white bg-slateBlue border-none rounded-md shadow shadow-custom font-semibold"
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </article>
  );
};

export default FormEditDataUser;
