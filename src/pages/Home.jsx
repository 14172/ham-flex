import { Link } from "react-router-dom";
import { levels } from "../data/levels";
import heroImg from "../assets/images/hero.png";
import hamsterImg from "../assets/images/btn-img.png";
import starImg from "../assets/images/star.png";

export default function Home() {
  return (
    <main className="home">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="hero-overlay">
          {/* 左側 */}
          <div className="hero-content">
            <div className="logo-tx">FLEXY HAMSTER</div>

            <h1>
              跟<span className="ham-txt">倉鼠</span>一起學 Flex
            </h1>

            <p>
              跟可愛小倉鼠一起排便當菜色吧！
              <br />
              輕鬆理解排列與版面配置🌻
            </p>
          </div>

          {/* 右側 */}
          <div className="level-panel">
            <div className="panel-title">
              <h2>
                <img src={starImg} alt="" />
                選擇關卡
              </h2>
            </div>

            <div className="level-list">
              {levels.map((level) => (
                <Link
                  to={`/level/${level.id}`}
                  className="level-card"
                  key={level.id}
                >
                  <span className="level-number">
                    {String(level.id).padStart(2, "0")}
                  </span>

                  <div className="level-text">
                    <h3>{level.title}</h3>
                    <p>{level.target}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 底部提示 */}
        <div className="tip-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f4b42"
          >
            <path d="M400-240q-33 0-56.5-23.5T320-320v-50q-57-39-88.5-100T200-600q0-117 81.5-198.5T480-880q117 0 198.5 81.5T760-600q0 69-31.5 129.5T640-370v50q0 33-23.5 56.5T560-240H400Zm0-80h160v-92l34-24q41-28 63.5-71.5T680-600q0-83-58.5-141.5T480-800q-83 0-141.5 58.5T280-600q0 49 22.5 92.5T366-436l34 24v92Zm0 240q-17 0-28.5-11.5T360-120v-40h240v40q0 17-11.5 28.5T560-80H400Zm80-520Z" />
          </svg>
          小提醒：每關都有提示可以幫助你喔！ <img src={hamsterImg} alt="倉鼠" className="tip-hamster"/>
        </div>
      </section>
    </main>
  );
}
