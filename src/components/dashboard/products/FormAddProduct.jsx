import React, { useState } from "react";
import { Field, FieldArray, Formik } from "formik";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const FormAddProduct = () => {
  const [images, setImages] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    category: "",
    sizes: "",
    garment_type: "",
    brand: "",
    images: [],
    price: 0,
    stock: 0,
    status: "active",
  });

  const handleImagePreview = (e, arrayHelpers) => {
    const files = Array.from(e.target.files); // Obtener todos los archivos seleccionados

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const previewURL = event.target.result;
        const imageObject = {
          preview: previewURL,
          path: file.name,
        };
        arrayHelpers.push(imageObject);
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <section className="w-full flex items-center justify-center mt-4">
        <Formik
          initialValues={{
            name: "",
            description: "",
            category: "",
            sizes: "",
            garment_type: "",
            brand: "",
            images: [],
            price: 0,
            stock: 0,
            status: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Requerido";
            }
            if (!values.description) {
              errors.description = "Requerido";
            }
            if (!values.category) {
              errors.category = "Requerido";
            }
            if (!values.sizes) {
              errors.sizes = "Requerido";
            }
            if (!values.status) {
              errors.status = "Requerido";
            }

            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
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
            <article className="w-full flex items-center justify-center">
              <form
                className="w-[100%] max-w-[700px] p-5 rounded-xl flex flex-col items-center justify-center gap-5 bg-blackMy text-whiteSmoke"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="relative w-full flex flex-col gap-1">
                  <input
                    className="w-full outline-none rounded-md py-2 ps-2 bg-white border border-slateGray text-darkSlateGray"
                    placeholder="Nombre *"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <p className="text-error text-xs">{errors.name}</p>
                  )}
                </div>

                <div className="relative w-full flex flex-col gap-1">
                  <textarea
                    className="w-full h-[100px] resize-none bg-white pl-2 text-darkSlateGray border-slateGray rounded-md outline-none"
                    placeholder="Descripción"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  ></textarea>

                  <div className="w-full">
                    {errors.description && touched.description && (
                      <p className="text-error text-xs text-start mt-1">
                        {errors.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="relative w-full flex flex-col gap-1">
                  <input
                    className="w-full outline-none rounded-md py-2 ps-2 bg-white border border-slateGray text-darkSlateGray"
                    placeholder="Categoria *"
                    type="text"
                    name="category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}
                  />
                  {errors.category && touched.category && (
                    <p className="text-error text-xs">{errors.category}</p>
                  )}
                </div>
                <div className="relative w-full flex flex-col gap-1">
                  <input
                    className="w-full outline-none rounded-md py-2 ps-2 bg-white border border-slateGray text-darkSlateGray"
                    placeholder="Talles *"
                    type="text"
                    name="sizes"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sizes}
                  />
                  {errors.sizes && touched.sizes && (
                    <p className="text-error text-xs">{errors.sizes}</p>
                  )}
                </div>
                <div className="relative w-full flex flex-col gap-1">
                  <input
                    className="w-full outline-none rounded-md py-2 ps-2 bg-white border border-slateGray text-darkSlateGray"
                    placeholder="Tipo, ej: Pantalon, remera..."
                    type="text"
                    name="garment_type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.garment_type}
                  />
                  {errors.garment_type && touched.garment_type && (
                    <p className="text-error text-xs">{errors.garment_type}</p>
                  )}
                </div>
                <div className="relative w-full flex flex-col gap-1">
                  <input
                    className="w-full outline-none rounded-md py-2 ps-2 bg-white border border-slateGray text-darkSlateGray"
                    placeholder="Marca *"
                    type="text"
                    name="brand"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.brand}
                  />
                  {errors.brand && touched.brand && (
                    <p className="text-error text-xs">{errors.brand}</p>
                  )}
                </div>
                <div className="relative w-full flex flex-col gap-1">
                  <input
                    className="w-full outline-none rounded-md py-2 ps-2 bg-white border border-slateGray text-darkSlateGray inputNumber"
                    placeholder="Precio *"
                    type="number"
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                  />
                  {errors.price && touched.price && (
                    <p className="text-error text-xs">{errors.price}</p>
                  )}
                </div>
                <div className="relative w-full flex flex-col gap-1">
                  <input
                    className="w-full outline-none rounded-md py-2 ps-2 bg-white border border-slateGray text-darkSlateGray inputNumber"
                    placeholder="Stock *"
                    type="number"
                    name="stock"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.stock}
                  />
                  {errors.stock && touched.stock && (
                    <p className="text-error text-xs">{errors.stock}</p>
                  )}
                </div>
                <div className="w-full flex flex-col gap-1">
                  <select
                    className="w-full outline-none rounded-md py-2 ps-2 bg-white border border-slateGray text-darkSlateGray"
                    name="status"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    <option value="">Seleccione una opción</option>{" "}
                    {/* Opción predeterminada */}
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                  {errors.status && touched.status && (
                    <p className="text-error text-xs">{errors.status}</p>
                  )}
                </div>
                <FieldArray
                  name="images"
                  render={(arrayHelpers) => (
                    <div className="w-full flex items-center gap-4 mt-8">
                      <label className="w-8 h-8 flex items-center justify-center overflow-hidden cursor-pointer rounded-lg dropzone bg-white text-darkSlateGray smm:w-12 smm:h-12 smm:text-1xl md:w-20 md:h-20 md:text-2xl">
                        <input
                          accept="image/*"
                          className="hidden"
                          id="button-file"
                          type="file"
                          name="images"
                          // onChange={(e) => arrayHelpers.push(e.target.value)}
                          onChange={(e) => handleImagePreview(e, arrayHelpers)}
                          multiple // Agrega el atributo "multiple" para permitir la selección de múltiples imágenes
                        />
                        <i className="bx bx-upload"></i>
                      </label>
                      {values.images.map((img, index) => (
                        <div key={index}>
                          <figure className="w-8 h-8 relative rounded-lg smm:w-12 smm:h-12 md:w-20 md:h-20">
                            <Image
                              src={img.preview}
                              alt="image product"
                              width={90}
                              height={90}
                              loading="lazy"
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <button
                              className="absolute w-[25px] h-[25px] flex items-center justify-center top-[-.6em] right-[-.5em] text-error bg-white rounded-full text-2xl"
                              onClick={() => {
                                arrayHelpers.remove(index);
                              }}
                            >
                              <i className="bx bx-x"></i>{" "}
                            </button>
                          </figure>
                        </div>
                      ))}
                    </div>
                  )}
                />
                <button
                  type="submit"
                  className="w-full p-1 text-center border-none rounded-md text-darkSlateGray bg-mediumPurple text-sm font-semibold uppercase smm:text-base"
                >
                  GUARDAR
                </button>
              </form>
            </article>
          )}
        </Formik>
      </section>
    </>
  );
};

export default FormAddProduct;
