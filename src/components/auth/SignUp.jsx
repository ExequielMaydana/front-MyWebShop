import React, { useState } from "react";
import Link from "next/link";
import { Formik } from "formik";
import { useRouter } from "next/router";
import Image from "next/image";
import iconGoogle from "../../../public/icons/google.svg";
import personLogIn from "../../../public/Images/Saly-14.svg";

const SignUp = () => {
  const [passwordVisibleOne, setPasswordVisibleOne] = useState(false);
  const [passwordVisibleTwo, setPasswordVisibleTwo] = useState(false);

  const showPasswordOne = () => setPasswordVisibleOne(!passwordVisibleOne);
  const showPasswordTwo = () => setPasswordVisibleTwo(!passwordVisibleTwo);

  const router = useRouter();

  return (
    <section className="w-full h-full flex flex-col items-start lg:flex-row lg:justify-between">
      <article className="hidden lg:w-full lg:h-full lg:flex flex-col items-center mt-[5em]">
        <h2 className="text-black font-bold text-1xl">Registro</h2>
        <div className="w-full flex flex-col items-center">
          <p className="text-center text-xs text-darkSlateGray sm:w-4/5 sm:text-center lg:w-[60%] xlmy:text-base">
            La seguridad de tus datos es nuestra máxima prioridad. Puedes estar
            tranquilo/a al completar el formulario de registro, ya que
            implementamos medidas de seguridad robustas para proteger tu
            información personal.
          </p>

          <p className="w-full flex justify-center gap-2 text-darkGrayTwo text-xs sm:text-sm">
            ¿Ya tienes una cuenta?
            <Link href="/iniciar-sesion" className="text-slateBlue z-10">
              Iniciar sesión
            </Link>
          </p>
        </div>
        <div className="w-full flex items-center justify-end mt-[-3em]">
          <figure className="w-[200px] h-[300px]">
            <Image src={personLogIn} alt="person" className="" />
          </figure>
        </div>
      </article>
      <article className="w-full flex flex-col items-center gap-2">
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
            const URL = `${process.env.DOMAIN_PROD}/api/v1/auth/registrarse`;
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
              className="max-w-[450px] lg:w-[400px] p-5 rounded-xl flex flex-col gap-8"
              onSubmit={handleSubmit}
            >
              <h3 className="hidden lg:block text-start font-semibold text-black text-base mb-[-1.5em]">
                Crear cuenta
              </h3>
              <article className="w-full flex flex-col items-center lg:hidden">
                <h3 className="text-center font-extrabold text-xl sm:text-1xl">
                  Crear cuenta
                </h3>
                <p className="text-center text-xs text-darkSlateGray sm:w-4/5 sm:text-center lg:w-[60%] xlmy:text-base">
                  La seguridad de tus datos es nuestra máxima prioridad. Puedes
                  estar tranquilo/a al completar el formulario de registro, ya
                  que implementamos medidas de seguridad robustas para proteger
                  tu información personal.
                </p>

                <p className="w-full flex justify-center gap-2 text-darkGrayTwo text-xs sm:text-sm">
                  ¿Ya tienes una cuenta?
                  <Link href="/iniciar-sesion" className="text-slateBlue z-10">
                    Iniciar sesión
                  </Link>
                </p>
              </article>
              <div className="relative w-full flex flex-col gap-1">
                <label className="" htmlFor="fullname">
                  <input
                    className="
              w-full 
              outline-none 
              rounded-md 
              py-2
              ps-2
              bg-aliceBlueTwo 
              text-darkSlateGray
              colorPlace
              "
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Nombre completo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullname}
                  />
                </label>
                {errors.fullname && touched.fullname && (
                  <p className="text-error text-xs mt-1">{errors.fullname}</p>
                )}
              </div>

              <div className="relative w-full flex flex-col gap-1">
                <label className="" htmlFor="email">
                  <input
                    className="
              w-full 
              outline-none 
              rounded-md 
              py-2
              ps-2
              bg-aliceBlueTwo 
              text-darkSlateGray
              colorPlace
              "
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </label>
                {errors.email && touched.email && (
                  <p className="text-error text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="relative w-full flex flex-col gap-1">
                <label className="" htmlFor="password">
                  <input
                    className="
                w-full 
                relative
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg-aliceBlueTwo 
                text-darkSlateGray
                colorPlace
                "
                    type={passwordVisibleOne ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </label>
                <div
                  className="absolute top-[.3em] right-3 cursor-pointer text-1xl"
                  onClick={showPasswordOne}
                >
                  {passwordVisibleOne ? (
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
                  <input
                    className="
                w-full 
                relative
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg-aliceBlueTwo 
                text-darkSlateGray
                colorPlace
                "
                    type={passwordVisibleTwo ? "text" : "password"}
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Confirmar contraseña"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmpassword}
                  />
                </label>
                <div
                  className="absolute top-[.3em] right-3 cursor-pointer text-1xl"
                  onClick={showPasswordTwo}
                >
                  {passwordVisibleTwo ? (
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
                <label className="" htmlFor="DNI">
                  <input
                    className="
                      w-full
                      outline-none 
                      rounded-md 
                      py-2
                      ps-2
                      bg-aliceBlueTwo 
                      text-darkSlateGray
                      colorPlace
                    "
                    type="text"
                    name="dni"
                    id="DNI"
                    placeholder="DNI"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dni}
                  />
                </label>
                {errors.dni && touched.dni && (
                  <p className="text-error text-xs text-start mt-1">
                    {errors.dni}
                  </p>
                )}
              </div>
              <div className="w-full flex flex-col gap-1">
                <label className="" htmlFor="telefono">
                  <input
                    className="
                    w-full
                    outline-none 
                    rounded-md 
                    py-2
                    ps-2
                    bg-aliceBlueTwo 
                    text-darkSlateGray
                    colorPlace
                "
                    type="text"
                    name="telefono"
                    id="telefono"
                    placeholder="Teléfono"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telefono}
                  />
                </label>
                {errors.telefono && touched.telefono && (
                  <p className="text-error text-xs text-start mt-1">
                    {errors.telefono}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="block w-full p-2 text-center mt-8 text-white bg-slateBlue border-none rounded-md shadow shadow-custom font-semibold"
              >
                Crear cuenta
              </button>
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <p className="text-darkGrayTwo">O continuar con</p>
                <Image
                  src={iconGoogle}
                  alt="icono google"
                  className="cursor-pointer"
                />
              </div>
            </form>
          )}
        </Formik>
      </article>
    </section>
  );
};

export default SignUp;
