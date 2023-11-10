import Layout from "@/components/Layout";
import Link from "next/link";
import React, { useState } from "react";

const PreguntasFrecuentes = () => {
  const [purchase, setPurchase] = useState({
    buy: false,
    securityBuy: false,
    cancelBuy: false,
  });

  const [payments, setPayments] = useState({
    paymentMethods: false,
    timeOfPayment: false,
    paymentApproved: false,
  });

  const [shipping, setShipping] = useState({
    listOne: false,
    listTwo: false,
    listThree: false,
    listFour: false,
    listFive: false,
    listSix: false,
  });

  const changeBuy = (listActive) => {
    setPurchase({
      ...purchase,
      [listActive]: !purchase[listActive],
    });
  };

  const changePayment = (listActive) => {
    setPayments({
      ...payments,
      [listActive]: !payments[listActive],
    });
  };

  const changeShipping = (listActive) => {
    setShipping({
      ...shipping,
      [listActive]: !shipping[listActive],
    });
  };

  const [productsChanges, setProductsChanges] = useState({
    listOne: false,
    listTwo: false,
  });

  const [customerService, setCustomerService] = useState({
    listOne: false,
    listTwo: false,
  });

  const changueProduct = (listActive) => {
    setProductsChanges({
      ...productsChanges,
      [listActive]: !productsChanges[listActive],
    });
  };

  const changueCustomerService = (listActive) => {
    setCustomerService({
      ...customerService,
      [listActive]: !customerService[listActive],
    });
  };

  return (
    <Layout subtitle="Preguntas Frecuentes">
      <header className="w-full text-center p-4 lg:text-start xl:max-w-[90%] xl:m-auto xl:py-8">
        <h2 className="text-2xl font-semibold lg:text-3xl">
          Preguntas frecuentes
        </h2>
      </header>

      <article className="w-full flex flex-col gap-8 px-4 xl:max-w-[90%] xl:m-auto">
        <ul className="w-full flex flex-col gap-4">
          <li className="w-full p-4 bg-black rounded-md">
            <p className="uppercase text-white pl-8 font-medium lg:text-lg">
              COMPRAS
            </p>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changeBuy("buy")}
            >
              <p className="font-semibold">¿Cómo comprar?</p>
              <i
                className={`bx ${
                  purchase.buy ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                purchase.buy
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  <span className="font-medium pr-1">
                    1° Mirá nuestros productos:
                  </span>
                  Navegá el catálogo y buscá lo que más te gusta, podes refinar
                  tu búsqueda con nuestros filtros de productos personalizados.
                </p>
              </li>
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  <span className="font-medium pr-1">
                    2° Agregá al carrito lo que más te guste:
                  </span>{" "}
                  Seleccioná tus productos deseados y agregalos al carrito.
                </p>
              </li>
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  <span className="font-medium pr-1">
                    3° Finalizá tu compra:
                  </span>
                  Una vez que hayas agregado tus productos avanzá al checkout
                  mediante el link “Finalizar pedido” ubicado en el carrito en
                  la parte superior de la página.
                </p>
              </li>
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  <span className="font-medium pr-1">4° Pago:</span> Completá el
                  formulario con tus datos personales, método de entrega y datos
                  de facturación.
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changeBuy("securityBuy")}
            >
              <p className="font-semibold">¿Es seguro comprar en el sitio?</p>
              <i
                className={`bx ${
                  purchase.securityBuy ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                purchase.securityBuy
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  Tus datos personales están resguardados y no serán utilizados
                  para otros fines que no sean el de procesamiento de tu compra.
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changeBuy("cancelBuy")}
            >
              <p className="font-semibold">
                ¿Cómo hago para cancelar mi compra?
              </p>
              <i
                className={`bx ${
                  purchase.cancelBuy ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                purchase.cancelBuy
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  Para cancelar tu compra debes enviar un mail a
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
              </li>
            </ul>
          </li>
        </ul>
        <ul className="w-full flex flex-col gap-4">
          <li className="w-full p-4 bg-black rounded-md">
            <p className="uppercase text-white pl-8 font-medium lg:text-lg">
              PAGOS
            </p>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changePayment("paymentMethods")}
            >
              <p className="font-semibold">
                ¿Cuáles son los medios de pago disponibles?
              </p>
              <i
                className={`bx ${
                  payments.paymentMethods ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                payments.paymentMethods
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  <span className="font-medium pr-1">Tarjeta de crédito:</span>
                  Aprovechá las cuotas sin interés vigentes.
                </p>
              </li>
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  <span className="font-medium pr-1">Mercado Pago:</span>{" "}
                  Aplican todas las promociones disponibles en Mercado Pago.
                </p>
              </li>
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  <span className="font-medium pr-1">Efectivo:</span>
                  Podes abonar en cualquier sucursal de Rapipago, Pago Fácil o
                  Carga Virtual seleccionando Mercado Pago y obetiendo el cupón
                  de pago al finalizar la compra.
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changePayment("timeOfPayment")}
            >
              <p className="font-semibold">
                ¿Cuanto tiempo tengo para pagar el cupón de Rapipago o pago
                fácil?
              </p>
              <i
                className={`bx ${
                  payments.timeOfPayment ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                payments.timeOfPayment
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  El stock estará reservado por 2 días hábiles desde la
                  confirmación del pedido independientemente de la fecha de
                  validez estipulada por el cupón de pago. Una vez cumplido el
                  plazo, el pedido se cancelará automáticamente y el stock
                  volverá a la venta. Cualquier otro medio de pago se debe
                  realizar al instante.
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changePayment("paymentApproved")}
            >
              <p className="font-semibold">¿Cómo sé si mi pago fue aprobado?</p>
              <i
                className={`bx ${
                  payments.paymentApproved ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                payments.paymentApproved
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  Una vez que tu pago fue acreditado recibirás un correo
                  electrónico con la confirmación, luego de esto iniciaremos el
                  proceso de facturación y despacho.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="w-full flex flex-col gap-4">
          <li className="w-full p-4 bg-black rounded-md">
            <p className="uppercase text-white pl-8 font-medium lg:text-lg">
              ENVÍOS Y RETIRO DE PEDIDOS
            </p>
          </li>
          <p>
            Las entregas se realizan en cajas cerradas a través de empresas de
            correo logístico especializadas en distribución y entrega de
            mercaderías. Si deseas recoger tu producto personalmente, te
            invitamos a ponerte en contacto con nosotros para coordinar un
            horario de atención. Actualmente, no contamos con un local físico.
          </p>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changeShipping("listOne")}
            >
              <p className="font-semibold">
                ¿Puede otra persona recibir mi pedido?{" "}
              </p>
              <i
                className={`bx ${
                  shipping.listOne ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                shipping.listOne
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  Sí, cualquier persona de mayor de edad puede recibir la
                  mercadería siempre que se encuentre en el domicilio de entrega
                  indicado.
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changeShipping("listTwo")}
            >
              <p className="font-semibold">
                ¿Qué pasa si no hay nadie para recibir mi pedido?
              </p>
              <i
                className={`bx ${
                  shipping.listTwo ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                shipping.listTwo
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  La empresa de correos dejará un aviso de visita y volverá al
                  día siguiente nuevamente. Si en la segunda visita que realiza
                  la empresa de correos tampoco encuentra a ninguna persona en
                  el domicilio indicado por el usuario, se procederá a dejar la
                  mercadería en la sucursal de la empresa de correos más cercana
                  al domicilio indicado. Por 5 días la mercadería quedará en la
                  sucursal de correos, cumplido este período de tiempo, si el
                  cliente no pasó a retirarlo se devolverá la mercadería a
                  nuestro depósito. En este caso, el comprador debe comunicarse
                  con ATENCION AL CLIENTE, para coordinar una nueva entrega. La
                  nueva entrega puede tener un costo adicional por
                  reprocesamiento.
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changeShipping("listThree")}
            >
              <p className="font-semibold">
                ¿En qué días y horarios se entregan los pedidos?
              </p>
              <i
                className={`bx ${
                  shipping.listThree ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                shipping.listThree
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  Las entregas de pedidos se realizan de lunes a viernes de 8:00
                  a 20:00. No se entregan pedidos los días domingos ni feriados,
                  ni los días de paro de transporte.
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changeShipping("listFour")}
            >
              <p className="font-semibold">
                ¿Puedo modificar la dirección de entrega?{" "}
              </p>
              <i
                className={`bx ${
                  shipping.listFour ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                shipping.listFour
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  Podes modificar tu dirección de entrega antes de concluir con
                  un nuevo proceso de compra. Si querés cambiar la dirección de
                  entrega una vez que tu pedido fue confirmado, debes enviarnos
                  un mail en las primeras 24 hs a
                  <span className="text-slateBlue pl-1">
                    closetwithoutgender@gmail.com
                  </span>
                  indicando el nuevo domicilio de entrega y tu número de pedido.
                  Si tu pedido ya fue despachado, ya no es posible cambiar la
                  dirección de entrega
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changeShipping("listFive")}
            >
              <p className="font-semibold">
                ¿Cómo hago para seguir mi pedido?{" "}
              </p>
              <i
                className={`bx ${
                  shipping.listFive ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                shipping.listFive
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  Una vez que el pedido fue despachado por correo , recibirás un
                  mail con el número de tracking de su pedido para poder
                  seguirlo.
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changeShipping("listSix")}
            >
              <p className="font-semibold">
                ¿Puedo reprogramar la entrega de mi pedido?{" "}
              </p>
              <i
                className={`bx ${
                  shipping.listSix ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                shipping.listSix
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  No es posible establecer una fecha exacta de entrega de tu
                  pedido.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="w-full flex flex-col gap-4">
          <li className="w-full p-4 bg-black rounded-md">
            <p className="uppercase text-white pl-8 font-medium lg:text-lg">
              CAMBIOS DE PRODUCTOS
            </p>
          </li>
          <p>
            Si queres saber todo sobre como cambiar un producto te invitamos a
            ver nuestras políticas de cambio aquí.
          </p>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changueProduct("listOne")}
            >
              <p className="font-semibold">
                ¿Recibiste un producto diferente al que pediste?{" "}
              </p>
              <i
                className={`bx ${
                  productsChanges.listOne ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                productsChanges.listOne
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  Si recibiste un producto distinto al solicitado en tu compra
                  online, por favor contáctate vía mail a
                  <span className="text-slateBlue">
                    {" "}
                    closetwithoutgender@gmail.com
                  </span>{" "}
                  o vía Whatsapp al
                  <Link
                    href="https://wa.link/t8w93u"
                    target="_blank"
                    className="text-slateBlue"
                  >
                    +54 345 4076854
                  </Link>{" "}
                  para poder ayudarte
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changueProduct("listTwo")}
            >
              <p className="font-semibold">¿Qué pasa si viene fallado? </p>
              <i
                className={`bx ${
                  productsChanges.listTwo ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                productsChanges.listTwo
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  Si el producto presenta una falla de fábrica podes contactarte
                  vía mail a
                  <span className="text-slateBlue">
                    {" "}
                    closetwithoutgender@gmail.com
                  </span>{" "}
                  o vía Whatsapp al
                  <Link
                    href="https://wa.link/t8w93u"
                    target="_blank"
                    className="text-slateBlue"
                  >
                    +54 345 4076854
                  </Link>{" "}
                  para poder ayudarte
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="w-full flex flex-col gap-4 mb-12">
          <li className="w-full p-4 bg-black rounded-md">
            <p className="uppercase text-white pl-8 font-medium lg:text-lg">
              ATENCIÓN AL CLIENTE
            </p>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changueCustomerService("listOne")}
            >
              <p className="font-semibold">
                ¿Cuál es el horario de atención al cliente?{" "}
              </p>
              <i
                className={`bx ${
                  customerService.listOne ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                customerService.listOne
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  El horario de Atención al cliente es de lunes a viernes de 9 a
                  20hs, sábados de 9 a 17hs y feriados de 8 a 13hs
                </p>
              </li>
            </ul>
          </li>
          <li className="w-full h-auto border p-3 rounded-md border-lightSlateBlue">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => changueCustomerService("listTwo")}
            >
              <p className="font-semibold">¿Cómo hago para contactarme? </p>
              <i
                className={`bx ${
                  customerService.listTwo ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>
            <ul
              className={
                customerService.listTwo
                  ? "sublistOpen flex flex-col gap-2 text-sm pt-4"
                  : "sublist"
              }
            >
              <li className="w-full flex items-start justify-start text-start">
                <p>
                  Puedes contactarnos a través de la dirección de correo
                  <span className="text-slateBlue">
                    {" "}
                    closetwithoutgender@gmail.com
                  </span>{" "}
                  o por WhatsApp{" "}
                  <Link
                    href="https://wa.link/t8w93u"
                    target="_blank"
                    className="text-slateBlue"
                  >
                    acá
                  </Link>
                  .
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </Layout>
  );
};

export default PreguntasFrecuentes;
