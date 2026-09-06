import { useNavigate } from "react-router-dom";
import "./MemoryHub.css";

function MemoryHub() {
  const navigate = useNavigate();

  return (
    <main className="memory-hub-page">

      {/* =========================================
          SOFT BACKGROUND
      ========================================= */}

      <div className="hub-glow hub-glow-one"></div>
      <div className="hub-glow hub-glow-two"></div>
      <div className="hub-glow hub-glow-three"></div>

      <div className="hub-stars" aria-hidden="true">
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
          MEMORY PREVIEWS
      ========================================= */}

      <section className="memory-previews">

        {/* =========================================
            HER MEMORIES
        ========================================= */}

        <article
          className="memory-preview"
          onClick={() => navigate("/her-memories")}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/her-memories");
            }
          }}
        >
          <div className="preview-image-area">

            <div className="preview-main-image">
              <img
                src={`${import.meta.env.BASE_URL}photos/soumili/s3.jpeg`}
                alt="Soumili memory"
              />
            </div>

            <div className="preview-mini mini-one">
              <img
                src={`${import.meta.env.BASE_URL}photos/soumili/s7.jpeg`}
                alt=""
              />
            </div>

            <div className="preview-mini mini-two">
              <img
                src={`${import.meta.env.BASE_URL}photos/soumili/s12.jpeg`}
                alt=""
              />
            </div>

            <div className="preview-heart">
              ♡
            </div>
          </div>

          <div className="preview-content">
            <p className="preview-number">
              01 · HER WORLD
            </p>

            <h2>
              A Little World
              <span>Called Soumili</span>
            </h2>

            <p className="preview-description">
              Little snapshots of you, because apparently
              one page wasn't enough. 🌼
            </p>

            <div className="preview-link">
              <span>Explore her memories</span>
              <strong>→</strong>
            </div>
          </div>
        </article>

        {/* =========================================
            OUR MEMORIES
        ========================================= */}

        <article
          className="memory-preview"
          onClick={() => navigate("/our-memories")}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/our-memories");
            }
          }}
        >
          <div className="preview-image-area">

            <div className="preview-main-image">
              <img
                src={`${import.meta.env.BASE_URL}photos/us/u9.jpeg`}
                alt="Our memory"
              />
            </div>

            <div className="preview-mini mini-one">
              <img
                src={`${import.meta.env.BASE_URL}photos/us/u8.jpeg`}
                alt=""
              />
            </div>

            <div className="preview-mini mini-two">
              <img
                src={`${import.meta.env.BASE_URL}photos/us/u15.jpeg`}
                alt=""
              />
            </div>

            <div className="preview-heart">
              ♡
            </div>
          </div>

          <div className="preview-content">
            <p className="preview-number">
              02 · OUR STORY
            </p>

            <h2>
              The Memories
              <span>We Made Together</span>
            </h2>

            <p className="preview-description">
              Moments, questionable decisions, and memories
              worth keeping. 📸
            </p>

            <div className="preview-link">
              <span>Relive our memories</span>
              <strong>→</strong>
            </div>
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

        <p className="party-eyebrow">
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

