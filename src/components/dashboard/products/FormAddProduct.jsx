import React, { useState } from "react";

import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Formik, FieldArray } from "formik";
import Image from "next/image";

const theme = createTheme({
  palette: {
    btnForm: {
      main: indigo[500],
      contrastText: "#FFF",
    },
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// colores
const colors = ["Blanco", "Negro", "Amarillo", "Verde", "Gris"];
const sizes = ["7", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5"];
const tags = ["Oversize", "Ropa comoda", "Casual", "Moda", "Formal"];

const FormAddProduct = () => {
  const handleFileChange = (event, push) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      push(imageURL);
    }
  };

  const handleSelect = (event, push, remove, values) => {
    const {
      target: { value },
    } = event;
    // Dividir los colores seleccionados en un array (selectedColors) si el valor es una cadena,
    // o usar directamente el array de colores seleccionados si el valor es un array.
    const selectedValue = typeof value === "string" ? value.split(",") : value;

    // Obtener el array actual de colores del objeto 'values' proporcionado por Formik.
    // Si no existen valores en 'values', se utiliza un array vacío como valor predeterminado,
    // lo que significa que actualmente no hay colores seleccionados.
    const currentValue = values || [];

    // Encontrar los colores que han sido seleccionados pero no están presentes en el array de colores actuales (currentColors).
    // Estos son los colores que deben agregarse al array.
    const toAdd = selectedValue.filter((v) => !currentValue.includes(v));

    // Encontrar los colores que están presentes en currentColors pero no han sido seleccionados (selectedColors).
    // Estos son los colores que deben eliminarse del array.
    const toRemove = currentValue.filter((v) => !selectedValue.includes(v));

    toAdd.forEach((v) => push(v));

    toRemove.forEach((v) => {
      const index = currentValue.indexOf(v);
      if (index !== -1) {
        remove(index);
      }
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <Formik
            initialValues={{
              name: "",
              description: "",
              images: [],
              product_code: "",
              brand: "",
              stock: "",
              category: "",
              colors: [],
              sizes: [],
              tags: [],
              regular_price: 0,
              price_sale: 0,
            }}
            validate={(values) => {
              const errors = {};

              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
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
              <Box
                component="form"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  gap: "1em",
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                {/* Detalles */}

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    marginBottom: "2em",
                  }}
                >
                  <Box>
                    <p className="font-medium">Detalles</p>
                    <span className="text-darkGray">
                      Título, breve descripción, imagen...
                    </span>
                  </Box>
                  <Paper
                    elevation={1}
                    sx={{
                      width: "min(100%, 700px)",
                      padding: "1em",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2em",
                    }}
                  >
                    <TextField
                      id="standard-basic"
                      label="Nombre"
                      variant="outlined"
                      size="small"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      required
                    />

                    <TextField
                      id="outlined-multiline-static"
                      label="Descripción"
                      multiline
                      rows={4}
                      variant="outlined"
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      className="placeholder:text-white"
                    />

                    <FieldArray name="images">
                      {({ push, remove }) => (
                        <div className="w-full flex flex-col gap-4">
                          <label
                            htmlFor="imageInput"
                            className="cursor-pointer"
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px dashed grey",
                                padding: "2em",
                                gap: ".3em",
                              }}
                            >
                              <figure className="">
                                <Image
                                  width={150}
                                  height={100}
                                  src="/Images/addImageTwo.svg"
                                  alt="image add image"
                                  className="w-full h-full object-cover rounded-md"
                                />
                              </figure>
                              <p className="font-medium">
                                Soltar o Seleccionar archivo.
                              </p>
                              <span className="text-xs text-darkGray">
                                Suelte los archivos aquí o haga clic y navegue a
                                través de su máquina.
                              </span>
                              <input
                                type="file"
                                id="imageInput"
                                style={{ display: "none" }}
                                onChange={(e) => handleFileChange(e, push)}
                              />
                            </Box>
                          </label>
                          <article className="w-full flex items-center justify-start gap-2 flex-wrap">
                            {values.images.map((image, index) => (
                              <figure
                                key={index}
                                className="relative w-[100px] h-[100px]"
                              >
                                <Image
                                  src={image}
                                  alt={`Imagen ${index + 1}`}
                                  width={150}
                                  height={100}
                                  className="w-full h-full object-cover"
                                />
                                <button
                                  onClick={() => remove(index)}
                                  className="absolute top-[-.4em] right-[-.3em] w-[16px] h-[16px] flex items-center justify-center text-center text-xs rounded-full bg-black text-white"
                                >
                                  x
                                </button>
                              </figure>
                            ))}
                          </article>
                        </div>
                      )}
                    </FieldArray>
                  </Paper>
                </Box>

                {/* Propiedades */}

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    marginBottom: "2em",
                  }}
                >
                  <Box>
                    <p className="font-medium">Propiedades</p>
                    <span className="text-darkGray">
                      Funciones y atributos adicionales...{" "}
                    </span>
                  </Box>
                  <Paper
                    elevation={1}
                    sx={{
                      width: "min(100%, 700px)",
                      padding: "1em",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2em",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2em",
                      }}
                    >
                      <TextField
                        id="standard-basic"
                        label="Código de producto"
                        variant="outlined"
                        size="small"
                        type="text"
                        name="product_code"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.product_code}
                        fullWidth
                      />
                      <TextField
                        id="standard-basic"
                        label="Marca"
                        variant="outlined"
                        size="small"
                        type="text"
                        name="brand"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.brand}
                        fullWidth
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2em",
                      }}
                    >
                      <TextField
                        id="standard-basic"
                        label="Cantidad"
                        variant="outlined"
                        size="small"
                        type="number"
                        name="stock"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.stock}
                        fullWidth
                      />
                      <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">
                          categoría
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="category"
                          name="category"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.category}
                        >
                          <MenuItem value="remeras">Remeras</MenuItem>
                          <MenuItem value="pantalones">Pantalones</MenuItem>
                          <MenuItem value="jeans">Jeans</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2em",
                      }}
                    >
                      <FieldArray name="colors">
                        {({ push, remove }) => (
                          <FormControl fullWidth size="small">
                            <InputLabel id="demo-multiple-checkbox-label">
                              Colores
                            </InputLabel>
                            <Select
                              labelId="demo-multiple-checkbox-label"
                              id="demo-multiple-checkbox"
                              multiple
                              value={values.colors}
                              onChange={(e) =>
                                handleSelect(e, push, remove, values.colors)
                              }
                              input={<OutlinedInput label="colors" />}
                              renderValue={(selected) => selected.join(", ")}
                              MenuProps={MenuProps}
                            >
                              {colors.map((name) => (
                                <MenuItem key={name} value={name}>
                                  <Checkbox
                                    checked={values.colors.indexOf(name) > -1}
                                  />
                                  <ListItemText primary={name} />
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      </FieldArray>
                      <FieldArray name="sizes">
                        {({ push, remove }) => (
                          <FormControl fullWidth size="small">
                            <InputLabel id="demo-multiple-checkbox-label">
                              Talles
                            </InputLabel>
                            <Select
                              labelId="demo-multiple-checkbox-label"
                              id="demo-multiple-checkbox"
                              multiple
                              value={values.sizes}
                              onChange={(e) =>
                                handleSelect(e, push, remove, values.sizes)
                              }
                              input={<OutlinedInput label="sizes" />}
                              renderValue={(selected) => selected.join(", ")}
                              MenuProps={MenuProps}
                            >
                              {sizes.map((name) => (
                                <MenuItem key={name} value={name}>
                                  <Checkbox
                                    checked={values.sizes.indexOf(name) > -1}
                                  />
                                  <ListItemText primary={name} />
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      </FieldArray>
                    </Box>
                    <FieldArray name="tags">
                      {({ push, remove }) => (
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-multiple-checkbox-label">
                            Etiquetas
                          </InputLabel>
                          <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={values.tags}
                            onChange={(e) =>
                              handleSelect(e, push, remove, values.tags)
                            }
                            input={<OutlinedInput label="tags" />}
                            renderValue={(selected) => selected.join(", ")}
                            MenuProps={MenuProps}
                          >
                            {tags.map((name) => (
                              <MenuItem key={name} value={name}>
                                <Checkbox
                                  checked={values.tags.indexOf(name) > -1}
                                />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </FieldArray>
                  </Paper>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    marginBottom: "2em",
                  }}
                >
                  <Box>
                    <p className="font-medium">Precios</p>
                    <span className="text-darkGray">
                      Entradas relacionadas con el precio{" "}
                    </span>
                  </Box>

                  <Paper
                    elevation={1}
                    sx={{
                      width: "min(100%, 700px)",
                      padding: "1em",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1em",
                    }}
                  >
                    <TextField
                      id="standard-basic"
                      label="Precio regular"
                      variant="outlined"
                      size="small"
                      type="number"
                      name="regular_price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.regular_price}
                      fullWidth
                    />
                    <TextField
                      id="standard-basic"
                      label="Precio venta"
                      variant="outlined"
                      size="small"
                      type="number"
                      name="price_sale"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price_sale}
                      fullWidth
                    />
                  </Paper>
                </Box>

                <Button
                  variant="contained"
                  color="btnForm"
                  type="submit"
                  style={{
                    minWidth: "100px",
                    width: "150px",
                    backgroundColor: theme.palette.btnForm.main,
                  }}
                >
                  Agregar
                </Button>
              </Box>
            )}
          </Formik>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default FormAddProduct;
