import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Formik } from "formik";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const FormAddProduct = () => {
  const [value, setValue] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
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
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const goToImages = (event) => {
    event.preventDefault();
    console.log("hello world");
  };

  const onDrop = (acceptedFiles) => {
    // Procesar las imágenes y agregarlas al array
    const updatedImages = acceptedFiles.map((file) => ({
      name: file.name,
      size: file.size,
      preview: URL.createObjectURL(file), // Generar una URL de vista previa de la imagen
    }));

    setImages((prevImages) => [...prevImages, ...updatedImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <section className="w-full flex items-center justify-center">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value.toString()}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Datos básicos" value="1" />
                <Tab label="Imagenes" value="2" />
                {/* <Tab label="Envio" value="3" /> */}
              </TabList>
            </Box>
            <TabPanel value="1">
              <Formik
                initialValues={{
                  name: "",
                  description: "",
                  category: "",
                  sizes: "",
                  garment_type: "",
                  brand: "",
                  price: 0,
                  stock: 0,
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

                  return errors;
                }}
                onSubmit={(values) => {
                  setNewProduct((prevState) => ({
                    ...prevState,
                    name: values.name,
                    description: values.description,
                    category: values.category,
                    sizes: values.sizes,
                    garment_type: values.garment_type,
                    brand: values.brand,
                    price: values.price,
                    stock: values.stock,
                  }));
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
                    className="w-[100%] max-w-[700px] p-5 rounded-xl flex flex-col items-center justify-center gap-5 bg-blackMy text-whiteSmoke"
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
                        <p className="text-error text-xs">
                          {errors.garment_type}
                        </p>
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
                        className="w-full outline-none rounded-md py-2 ps-2 bg-white border border-slateGray text-darkSlateGray"
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
                        className="w-full outline-none rounded-md py-2 ps-2 bg-white border border-slateGray text-darkSlateGray"
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
                    <div className="w-full flex items-center justify-around">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-sm text-darkGray text-center">
                          ¿Desea poner este producto en oferta?
                        </p>
                        <label className="switch">
                          <input type="checkbox" className="hidden" />
                          <div className="switch-content"></div>
                        </label>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-sm text-darkGray text-center">
                          ¿Desea cambiar el estado de Activo a Inactivo?
                        </p>
                        <label className="switch">
                          <input type="checkbox" className="hidden" />
                          <div className="switch-content"></div>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full p-1 text-center border-none rounded-md text-darkSlateGray bg-mediumPurple text-sm font-semibold uppercase smm:text-base"
                    >
                      GUARDAR
                    </button>
                  </form>
                )}
              </Formik>
            </TabPanel>
            <TabPanel value="2">
              <article className="w-[100%] max-w-[700px] h-[200px] p-5 rounded-xl flex flex-col items-center justify-between gap-5 bg-blackMy text-whiteSmoke md:h-[300px]">
                <div className="w-full flex items-center justify-start flex-wrap gap-2">
                  <label
                    className="w-8 h-8 flex items-center justify-center overflow-hidden cursor-pointer rounded-lg dropzone bg-white text-darkSlateGray smm:w-12 smm:h-12 smm:text-1xl md:w-20 md:h-20 md:text-2xl"
                    {...getRootProps()}
                  >
                    <input
                      accept="image/*"
                      className="hidden"
                      id="button-file"
                      type="file"
                      name="images"
                      {...getInputProps()}
                    />
                    <i className="bx bx-upload"></i>
                  </label>

                  {images.map((image, index) => (
                    <figure
                      key={index}
                      className="w-8 h-8 relative rounded-lg smm:w-12 smm:h-12 md:w-20 md:h-20"
                    >
                      <Image
                        src={image.preview}
                        alt="image product"
                        width={90}
                        height={90}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </figure>
                  ))}
                </div>

                <button
                  onClick={goToImages}
                  className="w-full p-1 text-center border-none rounded-md text-darkSlateGray bg-mediumPurple text-sm font-semibold uppercase smm:text-base"
                >
                  GUARDAR
                </button>
              </article>
            </TabPanel>
            {/* <TabPanel value="3">Item Three</TabPanel> */}
          </TabContext>
        </Box>
      </section>
    </>
  );
};

export default FormAddProduct;
