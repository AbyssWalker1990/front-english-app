import { Link } from "react-router-dom";

const Public = () => {
  const mode = process.env.REACT_APP_MODE;
  return (
    <main>
      <section id="main-page">
        <article id="big-logo">
          <img src="img/logo-xl.png" alt="Logo large" />
        </article>
        <article id="main-content">
          <h1>Текст - слоган Заговори англійською вже завтра!</h1>
          <div className="open-lesson-btn">
            <Link className="open-lesson-btn-link" to="/">
              замовити пробний урок
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};
export default Public;
