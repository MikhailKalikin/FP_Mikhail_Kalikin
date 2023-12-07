<template>
  <div class="main">
    <div class="split__view">
      <section class="sidebar">
        <div class="container__sidebar">

          <img class="sidebar__img" src="@/assets/photo.jpg" alt="photo">

          <div class="sidebar__contacts">
            <h2 class="sidebar__title">Контакты</h2>
            <ul class="sidebar__list">
              <li>
                <img class="abs__img" src="@/assets/info/phone.svg" alt="phone">
                <a class="sidebar__link" href="tel:+79277667983">+79277667983</a>
              </li>
              <li>
                <img class="abs__img" src="@/assets/info/map-pin.svg" alt="phone">
                <span>г.Самара</span>
              </li>
              <li>
                <img class="abs__img" src="@/assets/info/email.svg" alt="phone">
                <a class="sidebar__link" href="mailto:mkalikin@mail.ru">mkalikin@mail.ru</a>
              </li>
            </ul>
          </div>

          <div class="sidebar__socials">
            <h2 class="sidebar__title">Социальные сети</h2>
            <ul class="sidebar__list">
              <li>
                <img class="abs__img" src="@/assets/socials/Linkedin-02.svg" alt="Linkedin">
                <span>@mikhail-kalikin-813aa9174</span>
              </li>
              <li>
                <img class="abs__img" src="@/assets/socials/facebook.svg" alt="facebook">
                <span>@MikhailKalikin</span>
              </li>
              <li>
                <img class="abs__img" src="@/assets/socials/twitter.svg" alt="twitter">
                <span>@MKalikin1</span>
              </li>
              <li>
                <img class="abs__img" src="@/assets/socials/instagram.svg" alt="instagram">
                <span>@mikhail.kalikin</span>
              </li>
            </ul>
          </div>

          <div class="sidebar__skills">
            <h2 class="sidebar__title">Навыки</h2>
            <ul class="sidebar__list skills__list">
              <li>
                <span>Linux</span>
                <img src="@/assets/skills/skill3.svg" alt="" class="skill__img">
              </li>
              <li>
                <span>Git</span>
                <img src="@/assets/skills/skill3.svg" alt="" class="skill__img">
              </li>
              <li>
                <span>CI\CD</span>
                <img src="@/assets/skills/skill4.svg" alt="" class="skill__img">
              </li>
              <li>
                <span>K8S</span>
                <img src="@/assets/skills/skill4.svg" alt="" class="skill__img">
              </li>
              <li>
                <span>Monitoring</span>
                <img src="@/assets/skills/skill3.svg" alt="" class="skill__img">
              </li>
            </ul>
          </div>

          <div class="recommendations">
            <h2 class="sidebar__title">Ссылки</h2>
            <p class="sidebar__text">СГАУ</p>
          </div>

        </div>
      </section>

      <section class="main__info">

        <h1 class="info__title">Михаил Каликин <span class="info__title-after">____________________</span></h1>
        <div class="info__section">
          <h3 class="info__title_3">6232-020402D - Фундаментальная информатика и информационные технологии</h3>
          <p class="info__text">Я стараюсь постоянно развиваться в сфере информационных технологий, участвуя в образовательных программах, курсах и мероприятиях, связанных с моей специальностью. Я всегда открыт к новым знаниям и возможностям для роста как специалиста в области информатики и программирования.

            С нетерпением жду возможности сотрудничества и обмена опытом с единомышленниками и профессионалами в мире IT.</p>
          <hr>
        </div>

        <h2 class="info__title_2">Опыт работы <span class="info__title_2-after">____________________</span></h2>
        <div class="info__section">
          <h3 class="info__title_3">DevOps</h3>
          <p class="info__text">Более 6 лет технического опыта, знаний и практического опыта в работе с Linux, K8S, Monitoring, CI\CD.</p>
          <hr>
        </div>

        <h2 class="info__title_2">Образование <span class="info__title_2-after">____________________</span></h2>
        <div class="info__section">
          <h3 class="info__title_3">Самарский национальный исследовательский университет имени академика С.П. Королева, Самара</h3>
          <p class="info__text">
            Программное обеспечение для информационных систем
          </p>
          <hr>
        </div>

        <h2 class="info__title_2">Курсы и сетификаты <span class="info__title_2-after">____________________</span></h2>
        <div class="info__section">
          <h3 class="info__title_3">Google courses</h3>
          <p class="info__text">Microservice Applications in Kubernetes (legacy) - 2020</p>
          <hr>
        </div>

        <h2 class="info__title_2">Цели <span class="info__title_2-after">____________________</span></h2>
        <div class="info__section">
          <p class="info__text">Развитие в сфере ИТ, Linux, DevOps</p>
        </div>

        <the-form/>
      </section>
    </div>
  </div>
</template>

<script>
import TheForm from "@/components/TheForm.vue";

export default {
  name: "HomeView",
  components: {TheForm}
}
</script>

<style scoped>

h1, h2 {
  font-family: "Oswald";
}

.split__view {
  display: flex;
}

.sidebar {
  color: #fff;
  min-width: 320px;
  font-size: 16px;
}

.abs__img {
  height: 40px;
  margin-right: 20px;
}

.sidebar__link {
  color: #fff;
}

.container__sidebar {
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  height: 100%;
  width: 100%;
  padding: 50px 30px 30px;
  background-color: #180A29;
}

.sidebar__img {
  align-self: center;
  border-radius: 50%;
  width: 230px;
}

.sidebar__title {
  position: relative;
  margin-bottom: 55px;
  font-size: 25px;
  font-weight: 500;
  color: #889297;
}
.sidebar__title:after {
  position: absolute;
  font-size: 20px;
  content: "____________________";
  top: 35px;
  left: 0;
}

.sidebar__list {
  display: flex;
  flex-direction: column;
  row-gap: 35px;
}

.sidebar__list li {
  display: flex;
  align-items: center;
}

.skills__list li {
  justify-content: space-between;
}

.skills__list img {
  width: 140px;
}

.main__info {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 400;
  color: #2A3B47;
  padding: 50px 30px 30px 55px;
}

.info__section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /*min-height: 200px;*/
}

.info__title {
  position: relative;
  margin-bottom: 35px;
  text-wrap: normal;
  font-size: 77px;
  color: #2E0F53;
}
.info__title-after {
  display: block;
  text-align: left;
  font-size: 30px;
  color: #1292EE;
}

.info__title_2 {
  position: relative;
  margin-bottom: 35px;
  font-size: 42px;
  color: #2E0F53;
}
.info__title_2-after {
  display: block;
  text-align: left;
  font-size: 30px;
  color: #1292EE;
}

.info__title_3 {
  font-family: "Raleway";
  font-size: 33px;
  font-weight: 600;
  color: #465967;
  margin-bottom: 5px;
}

hr {
  margin: 20px 0 30px;
  border: 1px solid #889297;
}

</style>