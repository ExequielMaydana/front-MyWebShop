import React, { useState } from "react";
import Link from "next/link";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const showPassword = () => setPasswordVisible(!passwordVisible);

  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <section className="w-full flex flex-col items-center gap-5">
      <h2 className="text-center text-black font-black text-2xl">Registro</h2>

      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
          confirmpassword: "",
          dni: "",
          telefono: "",
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
            className="w-11/12  p-5  rounded-xl flex flex-col gap-4 bg-midNightBlue text-whiteSmoke"
            onSubmit={handleSubmit}
          >
            <article className="w-full">
              <h3 className="text-center font-extrabold text-xl">
                Crear cuenta
              </h3>
              <p className="text-center text-xs text-slateGray">
                La seguridad de tus datos es nuestra máxima prioridad. Puedes
                estar tranquilo/a al completar el formulario de registro, ya que
                implementamos medidas de seguridad robustas para proteger tu
                información personal.
              </p>
            </article>
            <div className="relative w-full flex flex-col gap-1">
              <label className="text-darkGray text-sm" htmlFor="fullname">
                Nombre completo
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
                type="text"
                name="fullname"
                id="fullname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
              />
              {errors.fullname && touched.fullname && (
                <p className="text-error text-xs mt-1">{errors.fullname}</p>
              )}
            </div>

            <div className="relative w-full flex flex-col gap-1">
              <label className="text-darkGray text-sm" htmlFor="email">
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
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className="text-error text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative w-full flex flex-col gap-1">
              <label className="text-darkGray text-sm" htmlFor="password">
                Contraseña
              </label>
              <input
                className="
                w-full 
                relative
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg-midNightBlue border 
                border-slateGray
                text-white
                "
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div
                className="absolute top-8 right-3 cursor-pointer text-1xl"
                onClick={showPassword}
              >
                {passwordVisible ? (
                  <i className="bx bx-show"></i>
                ) : (
                  <i className="bx bx-hide"></i>
                )}
              </div>

              {errors.password && touched.password && (
                <p className="text-error text-xs text-start mt-1">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="relative w-full flex flex-col gap-1">
              <label
                className="text-darkGray text-sm"
                htmlFor="confirmpassword"
              >
                Confirmar contraseña
              </label>
              <input
                className="
                w-full 
                relative
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg-midNightBlue border 
                border-slateGray
                text-white
                "
                type={passwordVisible ? "text" : "password"}
                name="confirmpassword"
                id="confirmpassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmpassword}
              />
              <div
                className="absolute top-8 right-3 cursor-pointer text-1xl"
                onClick={showPassword}
              >
                {passwordVisible ? (
                  <i className="bx bx-show"></i>
                ) : (
                  <i className="bx bx-hide"></i>
                )}
              </div>

              {errors.confirmpassword && touched.confirmpassword && (
                <p className="text-error text-xs text-start mt-1">
                  {errors.confirmpassword}
                </p>
              )}
            </div>
            <div className="relative w-full flex flex-col gap-1">
              <label className="text-darkGray text-sm" htmlFor="DNI">
                DNI
              </label>
              <input
                className="
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg-midNightBlue border 
                border-slateGray
                text-white
                "
                type="text"
                name="dni"
                id="DNI"
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
            <div className="relative w-full flex flex-col gap-1">
              <label className="text-darkGray text-sm" htmlFor="telefono">
                Telefono
              </label>
              <input
                className="
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg-midNightBlue border 
                border-slateGray
                text-white
                "
                type="text"
                name="telefono"
                id="telefono"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telefono}
              />
              {errors.telefono && touched.telefono && (
                <p className="text-error text-xs text-start mt-1">
                  {errors.telefono}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="block w-full p-2 text-center text-darkSlateGray bg-mediumPurple border-none rounded-md font-semibold"
            >
              Crear cuenta
            </button>
            <p className="w-full flex justify-center gap-2 text-xs">
              ¿Ya tienes una cuenta?
              <Link href="/iniciar-sesion">Iniciar sesión</Link>
            </p>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default SignUp;
