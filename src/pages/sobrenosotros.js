import Layout from "@/components/Layout";
import React from "react";

const Sobrenosotros = () => {
  return (
    <Layout>
      <section className="w-full flex flex-col mb-16">
        <article className="header__about mb-8">
          <div className="w-full h-full flex flex-col items-center justify-center bg-bgOpacity px-4">
            <h2 className="text-3xl font-bold text-white md:text-4xl xl:text-5xl">
              Conoce más de Nosotros
            </h2>
            <p className="text-center text-white pb-4 xl:text-lg">
              Descubre <b>CloseWithoutGender</b>: Tu Destino para la Moda Sin
              Género
            </p>
            <p className="text-white text-sm text-center md:w-[80%] xl:text-base">
              Nosotros creemos en la moda sin género, donde la expresión
              personal y la comodidad son lo más importante. Somos tu lugar de
              confianza para encontrar prendas y calzado de tendencia, sin
              importar quién sos o cómo te identificas.
            </p>
          </div>
        </article>

        <article className="w-full px-4">
          <div className="w-full flex flex-col gap-4 md:flex-row">
            <div className="w-full flex-col">
              <span className="text-sm uppercase text-darkGray">historia</span>
              <h3 className="text-2xl">
                <b>Nuesta Misión: Tu Satisfacción</b>
              </h3>
              <p className="text-sm text-center md:pb-4 md:text-start">
                En <b>CloseWithoutGender</b>, nuestra misión va más allá de la
                moda. Nos dedicamos a empoderar y a brindar una experiencia de
                compra en línea cómoda y placentera. Nuestro compromiso es crear
                un espacio inclusivo y seguro donde celebramos la diversidad y
                la autenticidad de cada cliente. Creemos en la moda como una
                plataforma de expresión personal y empoderamiento, pero también
                nos esforzamos por garantizar que tu experiencia de compra en
                línea sea tan excepcional como nuestros productos. Únete a
                nosotros en este viaje hacia la autenticidad y la
                individualidad, donde la moda se combina con la comodidad para
                ofrecerte la mejor experiencia posible.
              </p>
              <div className="hidden md:flex flex-col">
                <b>¿Qué nos hace diferentes?</b>
                <p className="text-sm">
                  En CloseWithoutGender, nos destacamos por comprometernos con
                  una experiencia de compra única y la calidad excepcional de
                  nuestros productos. Elegirnos significa:
                  <br />
                  <br /> Ofrecemos moda sin género que celebra la expresión
                  personal. Priorizamos la calidad, seleccionando cuidadosamente
                  cada artículo. Estamos al tanto de las tendencias actuales,
                  con marcas icónicas como Jordan, Nike, Vans y más. Ofrecemos
                  una experiencia de compra en línea sin complicaciones.
                  Celebramos la diversidad y creamos un ambiente inclusivo.
                  Nuestro equipo de atención al cliente está siempre listo para
                  ayudarte. Elegir CloseWithoutGender significa elegir moda,
                  estilo y una experiencia excepcional. Gracias por confiar en
                  nosotros.
                </p>
              </div>
            </div>

            <ul className="w-full flex flex-col gap-4">
              <li>
                <b>Nuestra Filosofía:</b>
                <p className="text-sm">
                  En el corazón de CloseWithoutGender está la creencia de que la
                  moda debe ser una expresión de tu autenticidad. Nos
                  enorgullece ofrecer prendas que abrazan la comodidad sin
                  sacrificar el estilo y zapatillas de las mejores marcas que se
                  mantienen al día con las tendencias.
                </p>
              </li>
              <li>
                <b>Nuestra Colección:</b>{" "}
                <p className="text-sm">
                  Explora nuestra amplia gama de indumentaria, desde pantalones
                  y remeras hasta camperas y buzos, todos diseñados para
                  adaptarse a cualquier estilo y género. Descubre nuestra
                  selección de calzado, incluyendo las icónicas marcas Jordan,
                  Nike, Vans y más, para que puedas caminar con confianza y
                  estilo. Completa tu look con nuestros accesorios, desde
                  mochilas hasta medias, que agregan un toque único a tu
                  atuendo.
                </p>
              </li>

              <li>
                {" "}
                <b>Nuestro Compromiso con la Sostenibilidad:</b>{" "}
                <p className="text-sm">
                  Creemos en un futuro sostenible y estamos comprometidos a
                  reducir nuestro impacto ambiental. Trabajamos con proveedores
                  que comparten nuestra visión y nos esforzamos por ofrecer
                  opciones sostenibles dentro de nuestra colección.
                </p>
              </li>
              <li className=" flex flex-col">
                {" "}
                <b>Únete a Nuestra Comunidad:</b>{" "}
                <p className="text-sm">
                  CloseWithoutGender no es solo una tienda, es una comunidad de
                  personas apasionadas por la moda sin género. Únete a nosotros
                  en las redes sociales para mantenerte al día con las últimas
                  tendencias, eventos y promociones.{" "}
                </p>
                <div className="pt-2">
                  <i className="bx bxl-instagram text-black text-2xl"></i>{" "}
                  <i className="bx bxl-facebook-circle text-black text-2xl"></i>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Sobrenosotros;
