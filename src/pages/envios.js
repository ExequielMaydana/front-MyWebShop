import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const Envios = () => {
  return (
    <Layout subtitle="Envío y Entrega">
      <header className="p-4">
        <h2 className="text-2xl font-semibold lg:text-4xl xl:pt-8 xl:pl-8">
          Envíos y Entregas
        </h2>
      </header>
      <article className="p-4 mb-8">
        <ul className="flex flex-col items-center justify-center text-center gap-6 lg:gap-8">
          <li className="w-full xl:text-center">
            <p className="lg:w-[80%] lg:text-lg xl:text-xl xl:m-auto">
              Ofrecemos envíos a lo largo de toda la República Argentina a
              través del servicio confiable de Correo Argentino. Para garantizar
              una experiencia de compra sin contratiempos, simplemente
              proporcione la dirección de entrega de su preferencia durante la
              compra.
              <br />
              <br /> Una vez que su pedido haya sido despachado, recibirá un
              código de seguimiento exclusivo de ClosetWithoutGender. Este
              código le permitirá rastrear su envío y conocer su ubicación en
              tiempo real. Además, el Correo Argentino enviará automáticamente
              un correo electrónico de confirmación de envío a la dirección de
              correo electrónico que usted proporcionó durante la compra.
            </p>
          </li>

          <li className="lg:text-center">
            <p className="text-center font-bold lg:text-xl">
              ¿Qué pasa si no hay nadie para recibir mi pedido?
            </p>
            <p className="lg:w-[80%] lg:text-lg lg:m-auto">
              La empresa de correos dejará un aviso de visita y volverá al día
              siguiente nuevamente. Si en la segunda visita que realiza la
              empresa de correos tampoco encuentra a ninguna persona en el
              domicilio indicado por el usuario, se procederá a dejar la
              mercadería en la sucursal de la empresa de correos más cercana al
              domicilio indicado. Por 5 días la mercadería quedará en la
              sucursal de correos, cumplido este período de tiempo, si el
              cliente no pasó a retirarlo se devolverá la mercadería a nuestro
              depósito. En este caso, el comprador debe comunicarse con ATENCION
              AL CLIENTE, para coordinar una nueva entrega. La nueva entrega
              puede tener un costo adicional por reprocesamiento.
            </p>
          </li>

          <li className="lg:text-center">
            <p className="text-center font-bold lg:text-xl">
              ¿En qué días y horarios se entregan los pedidos?{" "}
            </p>
            <p className="lg:w-[80%] lg:text-lg lg:m-auto">
              Las entregas de pedidos se realizan de lunes a viernes de 8:00 a
              20:00. No se entregan pedidos los días domingos ni feriados, ni
              los días de paro de transporte.
            </p>
          </li>

          <li className="lg:text-center">
            <p className="text-center font-bold lg:text-xl">
              ¿Puedo modificar la dirección de entrega?{" "}
            </p>
            <p className="lg:w-[80%] lg:text-lg lg:m-auto">
              Podes modificar tu dirección de entrega antes de concluir con un
              nuevo proceso de compra. Si querés cambiar la dirección de entrega
              una vez que tu pedido fue confirmado, debes enviarnos un mail en
              las primeras 24 hs a{" "}
              <span className="text-royalBlue">
                closetwithoutgender@gmail.com
              </span>{" "}
              indicando el nuevo domicilio de entrega y tu número de pedido. Si
              tu pedido ya fue despachado, ya no es posible cambiar la dirección
              de entrega
            </p>
          </li>

          <li className="flex flex-col gap-8 items-center justify-center text-center lg:text-center">
            <p className="text-center font-bold lg:text-xl">
              ¿Cómo hago para seguir mi pedido?{" "}
            </p>
            <p className="lg:w-[80%] lg:text-lg lg:m-auto">
              Una vez que el pedido fue despachado por correo , recibirás un
              mail con el número de tracking de su pedido para poder seguirlo.
            </p>
            <Link href="/" className="text-royalBlue flex">
              Seguir comprando
            </Link>
          </li>
        </ul>
      </article>
    </Layout>
  );
};

export default Envios;
