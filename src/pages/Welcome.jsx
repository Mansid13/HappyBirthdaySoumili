import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
function Welcome() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [wrong, setWrong] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const correctKeyword = "XO"; 

  useEffect(() => {
    const moveGlow = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${(e.clientX / window.innerWidth) * 100}%`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${(e.clientY / window.innerHeight) * 100}%`
      );
    };

    window.addEventListener("mousemove", moveGlow);

    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  const unlockMemories = () => {
    const answer = keyword.trim().toLowerCase();

    if (!answer || answer !== correctKeyword.toLowerCase()) {
      setWrong(true);
      return;
    }

    setWrong(false);
    setUnlocked(true);

    setTimeout(() => {
      navigate("/memories");
    }, 3000);
  };

  return (
    <main className="welcome-page">

      {/* BACKGROUND */}
      <div className="aurora aurora-one"></div>
      <div className="aurora aurora-two"></div>
      <div className="aurora aurora-three"></div>

      <div className="stars">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>⋆</span>
        <span>✧</span>
        <span>✦</span>
        <span>⋆</span>
        <span>✧</span>
      </div>

      {/* BUBBLES */}
      <div className="bubble bubble-a"></div>
      <div className="bubble bubble-b"></div>
      <div className="bubble bubble-c"></div>
      <div className="bubble bubble-d"></div>
      <div className="bubble bubble-e"></div>
      <div className="bubble bubble-f"></div>
      <div className="bubble bubble-g"></div>
      <div className="bubble bubble-h"></div>

      {/* FLOATING EMOJIS */}
      <div className="float-item float-heart-one">♡</div>
      <div className="float-item float-heart-two">♥</div>
      <div className="float-item float-star-one">✦</div>
      <div className="float-item float-star-two">✧</div>

      <div className="balloon balloon-one">🎈</div>
      <div className="balloon balloon-two">🎈</div>

      {/* TOP BAR */}
      <div className="top-date">
        <span>♡</span>
        17 SEPTEMBER 2026
        <span>♡</span>
      </div>

      {/* MAIN */}
      <section className="welcome-center">

        <div className="little-pill">
          ✨ A little surprise for you ✨
        </div>

        <div className="age-orb">
          <div className="orb-ring ring-one"></div>
          <div className="orb-ring ring-two"></div>

          <div className="orb-content">
            <span className="turning">TURNING</span>
            <strong>19</strong>
            <span className="today">♡</span>
          </div>
        </div>

        <h1>
          Happy Birthday
          <span>Soumili</span>
        </h1>

        <p className="intro">
          Today the world celebrates you...
          <br />
          <b>but I have something a little more personal planned.</b>
        </p>

        <div className="tiny-cake">🎂</div>

        <div className="portal-card">

          <div className="portal-top">
            <span className="mini-lock">🔐</span>

            <div>
              <p className="portal-title">
                THE MEMORY VAULT
              </p>

              <p className="portal-subtitle">
                Only one little secret stands between you and it.
              </p>
            </div>
          </div>

          <div className={`password-area ${wrong ? "wrong" : ""}`}>

            <div className="input-container">

              <span className="input-lock">♡</span>

              <input
                type="text"
                placeholder="What started it all?"
                value={keyword}
                autoComplete="off"
                onChange={(e) => {
                  setKeyword(e.target.value);
                  setWrong(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    unlockMemories();
                  }
                }}
              />

              <span className="input-sparkle">✦</span>

            </div>

            <button
              className="unlock-button"
              onClick={unlockMemories}
            >
              <span>Open the memories</span>
              <span className="arrow">→</span>
            </button>

            {wrong && (
              <div className="error-message">
                💭 Hmm... not quite!
                <small>
                  Think about the very beginning of us 👀
                </small>
              </div>
            )}

          </div>

          <button
            className="hint-button"
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? "Hide the hint ↑" : "A tiny hint? 💡"}
          </button>

          {showHint && (
            <div className="hint">
              💛 Think about the little thing
              <br />
              <b>that started our friendship.</b>
            </div>
          )}

        </div>

        <p className="bottom-note">
          made with memories, mischief & a tiny bit of magic ♡
        </p>

      </section>

      {/* SUCCESS */}
      {unlocked && (
        <div className="success-screen">

          <div className="success-confetti">
            ✦　💛　✧　💗　✦　💛　✧
          </div>

          <div className="success-orb">
            🔓
          </div>

          <h2>
            You remembered! 🥹
          </h2>

          <p>
            The memory vault is opening...
          </p>

          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <small>
            Something special is waiting inside ♡
          </small>

        </div>
      )}

    </main>
  );
}

export default Welcome;