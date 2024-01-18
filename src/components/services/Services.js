import "./services.css";
import cardImage1 from "../../img/card-image-1.jpg";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Услуги</h2>
      <div className="services-cards">
        <div className="services-articles">
          <article className="services-card">
            <div className="card-image-block">
              <div className="card-title">
                <h3>
                  создание веб-сайта
                  <br />
                  под ключ
                </h3>
              </div>
              <img src={cardImage1} alt=""></img>
            </div>
            <div className="card-description-block">
              <ul className="card-list-works">
                <li>Создание дизайна</li>
                <li>Верстка</li>
                <li>Frontend разработка</li>
                <li>Pегистрация доменного имени</li>
                <li>Pазмещение сайта в сети </li>
              </ul>
              <div className="card-price">
                <p>
                  от <span>30 000</span> рублей
                </p>
              </div>
            </div>
          </article>
          <article className="services-card">
            <div className="card-image-block">
              <div className="card-title card-title-light">
                <h3>сайт-визитка</h3>
              </div>
              <img src={cardImage1} alt=""></img>
            </div>
            <div className="card-description-block">
              <ul className="card-list-works">
                <li>Создание дизайна</li>
                <li>Frontend разработка</li>
                <li>Повышение производительности</li>
                <li>Логика и структурированность</li>
                <li>Pазмещение сайта в сети</li>
              </ul>
              <div className="card-price">
                <p>
                  от <span>15 000</span> рублей
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="services-articles">
          <article className="services-card">
            <div className="card-image-block">
              <div className="card-title card-title-light">
                <h3>лендинг</h3>
              </div>
              <img src={cardImage1} alt=""></img>
            </div>
            <div className="card-description-block">
              <ul className="card-list-works">
                <li>Создание продающего дизайна</li>
                <li>Frontend разработка</li>
                <li>Анимация для лендинга</li>
                <li>Логика и структурированность</li>
                <li>Pазмещение сайта в сети</li>
              </ul>
              <div className="card-price">
                <p>
                  от <span>12 000</span> рублей
                </p>
              </div>
            </div>
          </article>
          <article className="services-card">
            <div className="card-image-block">
              <div className="card-title">
                <h3>вёртска</h3>
              </div>
              <img src={cardImage1} alt=""></img>
            </div>
            <div className="card-description-block">
              <ul className="card-list-works card-list-works-one">
                <li>
                  Описание визуальной части сайта с помощью гипертекстового
                  документа на основе HTML 5/CSS по ранее заготовленному макету
                </li>
              </ul>
              <div className="card-price">
                <p>
                  от <span>10 000</span> рублей
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="services-articles">
          <article className="services-card">
            <div className="card-image-block">
              <div className="card-title">
                <h3>реинжиниринг</h3>
              </div>
              <img src={cardImage1} alt=""></img>
            </div>
            <div className="card-description-block">
              <ul className="card-list-works card-list-works-one">
                <li>
                  Внесение изменений на сайте и решение ошибок, увеличение
                  производительности сайтов на WordPress и 1С-Битрикс
                </li>
              </ul>
              <div className="card-price">
                <p>
                  от <span>5 000</span> рублей
                </p>
              </div>
            </div>
          </article>

          <article className="services-card">
            <div className="card-image-block">
              <div className="card-title card-title-light">
                <h3>дизайн</h3>
              </div>
              <img src={cardImage1} alt=""></img>
            </div>
            <div className="card-description-block">
              <ul className="card-list-works card-list-works-two">
                <li>Разработка уникального, современного дизайна сайта</li>
                <li>Создание баннеров, визиток, инфографики</li>
              </ul>
              <div className="card-price">
                <p>
                  от <span>7 000</span> рублей
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
