import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const HowToPurchase = () => {
  return (
    <Layout subtitle="Como Comprar">
      <div className="w-full flex flex-col p-4 gap-4 mb-12 sm:p-8">
        <header className="">
          <h2 className="text-xl font-medium sm:text-3xl text-center">
            Como comprar en <b>ClosetWithoutGender</b>
          </h2>
        </header>
        <article className="w-full flex flex-col gap-2 ">
          <ul className="flex flex-col gap-2 ">
            <li className="text-center lg:m-auto">
              <b className="sm:text-xl ">1° Mirá nuestros productos:</b>{" "}
              <p className="text-sm smm:w-[80%] sm:text-lg text-center m-auto">
                Navegá el catálogo y buscá lo que más te gusta, podes refinar tu
                búsqueda con nuestros filtros de productos personalizados.
              </p>
            </li>
            <li className="text-center lg:m-auto">
              <b className="sm:text-xl">
                2° Agregá al carrito lo que más te guste:{" "}
              </b>{" "}
              <p className="text-sm smm:w-[80%] sm:text-lg text-center m-auto">
                Antes de agregar un producto al carrito, asegúrate de
                seleccionar el talle adecuado en las opciones disponibles.
              </p>
            </li>
            <li className="text-center lg:m-auto">
              <b className="sm:text-xl">3° Iniciar tu compra: </b>{" "}
              <p className="text-sm smm:w-[80%] sm:text-lg text-center m-auto">
                Una vez que hayas agregado tus productos al carrito podras
                iniciar la compra y avanzar al checkout. Antes de iniciar la
                compra, también podrás calcular el costo de envío de tus
                productos. Una vez que hayas calculado el costo de envío y estés
                listo para proceder, selecciona "Iniciar compra" en el carrito
                para completar tu pedido.
              </p>
            </li>
            <li className="text-center lg:m-auto">
              <b className="sm:text-xl">4° Pago: </b>{" "}
              <p className="text-sm smm:w-[80%] sm:text-lg text-center m-auto">
                Completá el formulario con tus datos personales, método de
                entrega y datos de facturación.
              </p>
            </li>
          </ul>
          <b className="text-lg sm:text-xl mt-4 text-center m-auto">
            ¿Es seguro comprar en el sitio?
          </b>
          <p className="text-sm smm:w-[80%] sm:text-lg text-center m-auto">
            En ClosetWithoutGender, tu seguridad y privacidad son nuestra máxima
            prioridad. Entendemos que proporcionar tus datos personales es un
            acto de confianza, y queremos asegurarte que tus datos están en
            buenas manos.
            <br />
            <br />
            Los datos personales que solicitamos al realizar una compra son
            estrictamente utilizados con el único propósito de garantizar que tu
            producto llegue de manera segura a tu domicilio. Nuestro compromiso
            es proteger tu información y utilizarla exclusivamente para procesar
            y entregar tu pedido.
            <br />
            <br />
            <b>Es importante</b> destacar que los datos de pago están bajo la
            gestión segura del servicio de pago en línea de Mercado Pago. Esto
            significa que nosotros nunca tenemos acceso ni almacenamos
            información financiera sensible, como números de tarjeta de crédito
            o datos bancarios. Mercado Pago utiliza tecnología avanzada de
            cifrado para garantizar la seguridad total de tus transacciones.
          </p>

          <b className="text-lg sm:text-xl mt-4 text-center m-auto">
            ¿Cómo hago para cancelar mi compra?
          </b>
          <p className="text-sm smm:w-[80%] sm:text-lg text-center m-auto">
            Para cancelar tu compra debes enviar un mail a{" "}
            <span className="text-slateBlue">
              {" "}
              closetwithoutgender@gmail.com
            </span>{" "}
            o escribinos por WhatsApp <a> </a>
            <Link
              href="https://wa.link/t8w93u"
              target="_blank"
              className="text-slateBlue"
            >
              acá
            </Link>
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default HowToPurchase;
