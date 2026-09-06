import { useNavigate } from "react-router-dom";
import "./MemoryHub.css";

function MemoryHub() {
  const navigate = useNavigate();

  return (
    <main className="memory-hub-page">

      {/* =========================================
          DREAMY BACKGROUND
      ========================================= */}

      <div className="hub-glow hub-glow-one"></div>
      <div className="hub-glow hub-glow-two"></div>
      <div className="hub-glow hub-glow-three"></div>

      <div className="hub-stars">
        <span>✦</span>
        <span>✧</span>
        <span>♡</span>
        <span>⋆</span>
        <span>✦</span>
        <span>♡</span>
        <span>✧</span>
      </div>

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="hub-header">
        <p className="hub-eyebrow">
          ✨ the memory vault ✨
        </p>

        <h1>
          Before we move on...
          <span>let's look back. 💛</span>
        </h1>

        <p className="hub-description">
          A tiny collection of moments,
          <br />
          because some memories deserve their own little place.
        </p>
      </header>

      {/* =========================================
          MEMORY CARDS
      ========================================= */}

      <section className="memory-options">

        {/* HER MEMORIES */}

        <article
          className="memory-option her-option"
          onClick={() => navigate("/her-memories")}
        >
          <div className="memory-option-tape"></div>

          <div className="memory-preview her-preview">
            <img
              src="/photos/soumili/s3.jpeg"
              alt="Soumili memory"
            />

            <div className="preview-small preview-one">
              <img
                src="/photos/soumili/s7.jpeg"
                alt=""
              />
            </div>

            <div className="preview-small preview-two">
              <img
                src="/photos/soumili/s12.jpeg"
                alt=""
              />
            </div>

            <div className="preview-heart">♡</div>
          </div>

          <div className="memory-option-content">
            <p className="option-number">01 · HER WORLD</p>

            <h2>
              A Little World
              <span>Called Soumili</span>
            </h2>

            <p>
              little snapshots of you,
              because apparently one page
              wasn't enough. 🌼
            </p>

            <button
              className="memory-open-button"
              onClick={(event) => {
                event.stopPropagation();
                navigate("/her-memories");
              }}
            >
              Open her memories
              <span>→</span>
            </button>
          </div>
        </article>

        {/* OUR MEMORIES */}

        <article
          className="memory-option our-option"
          onClick={() => navigate("/our-memories")}
        >
          <div className="memory-option-tape"></div>

          <div className="memory-preview our-preview">

            <img
              src="/photos/us/u9.jpeg"
              alt="Our memory"
            />

            <div className="preview-small preview-one">
              <img
                src="/photos/us/u8.jpeg"
                alt=""
              />
            </div>

            <div className="preview-small preview-two">
              <img
                src="/photos/us/u15.jpeg"
                alt=""
              />
            </div>

            <div className="preview-heart">♡</div>
          </div>

          <div className="memory-option-content">
            <p className="option-number">02 · OUR STORY</p>

            <h2>
              The Memories
              <span>We Made Together</span>
            </h2>

            <p>
              Moments, questionable decisions,
              and memories worth keeping. 📸
            </p>

            <button
              className="memory-open-button"
              onClick={(event) => {
                event.stopPropagation();
                navigate("/our-memories");
              }}
            >
              Open our memories
              <span>→</span>
            </button>
          </div>
        </article>

      </section>

      {/* =========================================
          PARTY CTA
      ========================================= */}

      <section className="party-hub-section">

        <div className="party-hub-sparkle">
          ✦
        </div>

        <p>
          okay... enough nostalgia
        </p>

        <h2>
          Ready for the
          <span>fun part?</span>
        </h2>

        <div className="party-divider">
          <span>♡</span>
          <i></i>
          <span>✦</span>
          <i></i>
          <span>♡</span>
        </div>

        <button
          className="party-hub-button"
          onClick={() => navigate("/party")}
        >
          <span>Take me to the party</span>
          <strong>🎉</strong>
        </button>

        <small>
          You can't escape now. 😌
        </small>

      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="hub-footer">
        made with a suspicious amount of memories 💛
      </footer>

    </main>
  );
}

export default MemoryHub;