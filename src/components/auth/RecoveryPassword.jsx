import React from "react";
import { Formik } from "formik";

const RecoveryPassword = () => {
  return (
    <section className="w-full flex flex-col items-center gap-5">
      <h2 className="text-center text-black font-black text-2xl sm:text-3xl">
        Cambiar contraseña
      </h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Correo electrónico no válido";
          }
          if (!values.password) {
            errors.password = "Requerido";
          }

          return errors;
        }}
        onSubmit={(values) => {
          const URL = `${process.env.NEXT_PUBLIC_DOMAIN_DEV}/api/v1/auth/iniciar-sesion`;
          axios
            .post(URL, values)
            .then((res) => {
              if (res) {
                dispatch(setToken({ tokenUser: res.data.user.token }));
              }
              if (
                res.data.user.roles.map((rol) => rol.name.includes("admin"))
              ) {
                router.push("/dashboard");
              }
              router.push("/");
            })
            .catch((err) => console.log(err));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
          <form
            className="w-11/12  p-5 rounded-xl flex flex-col gap-5 bg-midNightBlue text-whiteSmoke md:w-4/5 xl:w-2/4"
            onSubmit={handleSubmit}
          >
            <article className="w-full flex flex-col items-center">
              <h3 className="text-center font-extrabold text-xl sm:text-1xl">
                Recuperación de contraseña segura:
              </h3>
              <p className="text-center text-xs text-slateGray sm:text-sm sm:w-4/5 sm:text-center">
                Por favor, completa el siguiente campo para recuperar tu
                contraseña. Nos tomamos muy en serio la seguridad de tu cuenta y
                queremos asegurarnos de que solo tú puedas acceder a ella.
              </p>
            </article>

            <div className="relative w-full flex flex-col gap-1">
              <label className="text-darkGray text-sm" htmlFor="email-user">
                Email
              </label>
              <input
                className="
                w-full 
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg-midNightBlue border 
                border-slateGray
                text-white
                "
                type="email"
                name="email"
                id="email-user"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className="text-error text-xs">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              className="block w-full p-2 text-center mt-3 text-darkSlateGray bg-mediumPurple border-none rounded-md font-semibold"
            >
              Enviar
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default RecoveryPassword;
