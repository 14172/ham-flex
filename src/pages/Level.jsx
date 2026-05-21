import { useParams } from "react-router-dom";
import { levels } from "../data/levels";
import { useState } from "react";
import { Link } from "react-router-dom";

import onigiriImg from "../assets/images/onigiri.png";
import salmonImg from "../assets/images/salmon.png";
import edamameImg from "../assets/images/edamame.png";
import tamagoImg from "../assets/images/tamago.png";
import drinkImg from "../assets/images/drink.png";
import endImg from "../assets/images/end-img.png";

const foodMap = {
  onigiri: onigiriImg,
  salmon: salmonImg,
  edamame: edamameImg,
  tamago: tamagoImg,
  drink: drinkImg,
};

export default function Level() {
  const { id } = useParams();

  const level = levels.find((item) => item.id === Number(id));

  /* 切關卡 */
  const [cssInput, setCssInput] = useState(level?.starterCode || "");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // 防止網址錯誤
  if (!level) {
    return <h1>找不到關卡</h1>;
  }

  // 忽略空格與大小寫
  function normalizeCSS(text) {
    return text.replace(/\s/g, "").toLowerCase();
  }

  function checkAnswer() {
    const userAnswer = normalizeCSS(cssInput);

    const correctAnswer = normalizeCSS(level.correctCSS);

    if (userAnswer.includes(correctAnswer)) {
      setSuccess(true);
      setError(false);
    } else {
      setSuccess(false);
      setError(true);
    }
  }

  return (
    <main className="level-page">
      <h1>{level.title}</h1>

      <p className="instruction">{level.instruction}</p>

      <div className="game-box">
        <div
          className="preview"
          style={{
            ...level.containerStyle,
            ...convertCssToObject(cssInput),
          }}
        >
          {Array.from({
            length: level.foodCount,
          }).map((_, index) => (
            <img
              key={index}
              src={foodMap[level.food]}
              alt={level.food}
              className="food-item"
            />
          ))}
        </div>
      </div>

      <textarea
        className="code-input"
        value={cssInput}
        onChange={(e) => setCssInput(e.target.value)}
      />

      <button className="check-btn mt-20" onClick={checkAnswer}>
        檢查答案
      </button>

      {success && level.id < levels.length && (
        <div className="success-row mt-20">
          <p className="success">小倉鼠成功排好便當啦 🍱</p>

          <Link to={`/level/${level.id + 1}`} className="next-btn">
            下一關 →
          </Link>
        </div>
      )}

      {success && level.id === levels.length && (
        <div className="clear-card">
          <img src={endImg} alt="hamster" className="clear-hamster" />

          <h2>全部過關啦 🎉</h2>

          <p>小倉鼠已經成功學會 Flex 排版了！</p>
        </div>
      )}

      {!success && (
        <div className="hint-box">
          <p>提示：</p>

          <ul className="hint-li">
            {level.hints.map((hint, index) => (
              <li key={index}>
                {hint.split(/(`.*?`)/g).map((part, i) =>
                  part.startsWith("`") && part.endsWith("`") ? (
                    <span key={i} className="hint-code">
                      {part.replace(/`/g, "")}
                    </span>
                  ) : (
                    part
                  ),
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <p className="error-message">好像還差一點點喔 👀</p>}
      <Link to="/" className="home-btn">
        ← 回首頁
      </Link>
    </main>
  );
}

function convertCssToObject(cssText) {
  const style = {};

  cssText.split(";").forEach((item) => {
    const [property, value] = item.split(":");

    if (!property || !value) return;

    const camelKey = property
      .trim()
      .replace(/-([a-z])/g, (_, char) => char.toUpperCase());

    style[camelKey] = value.trim();
  });

  return style;
}
