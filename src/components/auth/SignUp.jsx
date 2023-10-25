import React, { useState } from "react";
import Link from "next/link";
import { Field, Formik } from "formik";
import Image from "next/image";
import iconGoogle from "../../../public/icons/google.svg";
import personLogIn from "../../../public/Images/Saly-14.svg";
import axios from "axios";
import SignUpModal from "../modals/SignUpModal";

const SignUp = () => {
  const [passwordVisibleOne, setPasswordVisibleOne] = useState(false);
  const [passwordVisibleTwo, setPasswordVisibleTwo] = useState(false);

  const [onModal, setOnModal] = useState(false);
  const [statusModal, setStatusModal] = useState("");

  const showPasswordOne = () => setPasswordVisibleOne(!passwordVisibleOne);
  const showPasswordTwo = () => setPasswordVisibleTwo(!passwordVisibleTwo);

  return (
    <>
      {onModal ? (
        <SignUpModal
          status={statusModal}
          setOnModal={setOnModal}
          onModal={onModal}
        />
      ) : (
        <section className="w-full h-full flex flex-col items-start lg:flex-row lg:justify-between">
          <article className="hidden lg:w-full lg:h-full lg:flex flex-col items-center mt-[5em]">
            <h2 className="text-black font-bold text-1xl">Registro</h2>
            <div className="w-full flex flex-col items-center">
              <p className="text-center text-xs text-darkSlateGray sm:w-4/5 sm:text-center lg:w-[60%] xlmy:text-base">
                La seguridad de tus datos es nuestra máxima prioridad. Puedes
                estar tranquilo/a al completar el formulario de registro, ya que
                implementamos medidas de seguridad robustas para proteger tu
                información personal.
              </p>

              <p className="w-full flex justify-center gap-2 text-darkGrayTwo text-xs sm:text-sm">
                ¿Ya tienes una cuenta?
                <Link
                  href="/auth/iniciar-sesion"
                  className="text-slateBlue z-10"
                >
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
                full_name: "",
                email: "",
                password: "",
                confirmpassword: "",
                dni: "",
                telefono: "",
                file: null,
              }}
              validate={(values) => {
                const errors = {};

                if (!values.full_name) {
                  errors.full_name = "Requerido";
                }

                if (!values.email) {
                  errors.email = "Requerido";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Correo electrónico no válido";
                }

                if (!values.password) {
                  errors.password = "Requerido";
                } else if (
                  !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
                    values.password
                  )
                ) {
                  errors.password =
                    "La contraseña debe tener entre 8 y 16 caracteres, al menos un numero, al menos una minúscula y al menos una mayúscula";
                }

                if (!values.confirmpassword) {
                  errors.confirmpassword = "Requerido";
                } else if (values.confirmpassword !== values.password) {
                  errors.confirmpassword = "Las contraseñas no coinciden";
                }
                if (!values.dni) {
                  errors.dni = "Requerido";
                }
                if (!values.telefono) {
                  errors.telefono = "Requerido";
                }

                return errors;
              }}
              onSubmit={(values) => {
                const formData = new FormData();

                for (const key in values) {
                  if (values.hasOwnProperty(key)) {
                    if (key === "file") {
                      formData.append("file", values[key]);
                    } else {
                      formData.append(key, values[key]);
                    }
                  }
                }

                const URL = `${process.env.DOMAIN_PROD}/auth/registrarse`;
                axios
                  .post(URL, formData)
                  .then((res) => {
                    setOnModal(true);
                    setStatusModal("success");
                  })
                  .catch((err) => {
                    console.log(err);
                    setOnModal(true);
                    setStatusModal("failed");
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
                      La seguridad de tus datos es nuestra máxima prioridad.
                      Puedes estar tranquilo/a al completar el formulario de
                      registro, ya que implementamos medidas de seguridad
                      robustas para proteger tu información personal.
                    </p>

                    <p className="w-full flex justify-center gap-2 text-darkGrayTwo text-xs sm:text-sm">
                      ¿Ya tienes una cuenta?
                      <Link
                        href="/iniciar-sesion"
                        className="text-slateBlue z-10"
                      >
                        Iniciar sesión
                      </Link>
                    </p>
                  </article>
                  <div className="relative w-full flex flex-col gap-1">
                    <label className="" htmlFor="full_name">
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
                        name="full_name"
                        id="full_name"
                        placeholder="Nombre completo"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.full_name}
                      />
                    </label>
                    {errors.full_name && touched.full_name && (
                      <p className="text-error text-xs mt-1">
                        {errors.full_name}
                      </p>
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

                  <Field name="file">
                    {({ field, form }) => (
                      <div className="w-full flex flex-col gap-1">
                        {field.value && field.value instanceof File ? (
                          <div>
                            <p className="py-2">Foto seleccionada:</p>
                            <figure className="relative w-[100px] h-[100px] rounded-full">
                              <img
                                src={URL.createObjectURL(field.value)}
                                alt="Foto de perfil"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "100%",
                                }}
                                className="shadow-lg object-cover"
                              />
                              <button
                                className="absolute top-0 right-0 bg-slateGray rounded-full text-error shadow-lg"
                                type="button"
                                onClick={() => {
                                  URL.revokeObjectURL(
                                    URL.createObjectURL(field.value)
                                  );
                                  form.setFieldValue("file", null);
                                }}
                              >
                                <i className="bx bx-trash p-1"></i>{" "}
                              </button>
                            </figure>
                          </div>
                        ) : (
                          <div>
                            <p className="py-2">
                              Seleccione una foto de perfil:
                            </p>
                            <label htmlFor="profileImage">
                              <input
                                type="file"
                                id="profileImage"
                                onChange={(e) => {
                                  form.setFieldValue(
                                    "file",
                                    e.currentTarget.files[0]
                                  );
                                }}
                                onBlur={field.onBlur}
                              />
                            </label>
                          </div>
                        )}
                      </div>
                    )}
                  </Field>

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
      )}
    </>
  );
};

export default SignUp;
