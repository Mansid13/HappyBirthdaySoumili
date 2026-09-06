import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Party.css";

function Party() {
  const navigate = useNavigate();

  const memes = [
    `${import.meta.env.BASE_URL}photos/memes/m1.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m2.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m3.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m4.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m5.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m6.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m7.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m8.jpeg`,
  ];

  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleNo = () => {
    setNoCount((previous) => previous + 1);
  };

  const handleYes = () => {
    setLeaving(true);

    setTimeout(() => {
      setAccepted(true);
    }, 1100);
  };

  // Open Google Maps at the user's live location
  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Your browser does not support location services.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const mapsUrl =
          "https://www.google.com/maps/search/restaurants/@" +
          latitude +
          "," +
          longitude +
          ",14z";

        window.open(mapsUrl, "_blank");
      },
      () => {
        alert(
          "Couldn't access your location. Please allow location permission and try again."
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <main
      className={`party-page ${accepted ? "party-accepted" : ""}`}
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="party-glow party-glow-one"></div>
      <div className="party-glow party-glow-two"></div>
      <div className="party-glow party-glow-three"></div>

      <div className="party-stars">
        <span>✦</span>
        <span>✧</span>
        <span>♡</span>
        <span>⋆</span>
        <span>✦</span>
        <span>♡</span>
        <span>✧</span>
      </div>

      {/* =========================================
          BACK BUTTON
      ========================================= */}

      {!accepted && (
        <button
          className="party-back"
          onClick={() => navigate("/our-memories")}
        >
          ← Our memories
        </button>
      )}

      {/* =========================================
          MAIN PARTY CONTENT
      ========================================= */}

      {!accepted && (
        <section className="party-center">
          <div className="party-mini-label">
            ✨ okay... one last question ✨
          </div>

          <div className="party-cake">🎂</div>

          <h1>
            Sooo...
            <span>Party Time?</span>
          </h1>

          <p className="party-question">
            We've collected the memories.
            <br />
            We've unlocked the vault.
            <br />
            <strong>Now we just need one tiny decision.</strong>
          </p>

          {/* =====================================
              YES / NO
          ===================================== */}

          <div className="party-buttons">
            <button
              className="yes-button"
              onClick={handleYes}
            >
              <span>YES 💛</span>
              <small>let's go!</small>
            </button>

            <button
              className="no-button"
              onClick={handleNo}
            >
              NO 😈
            </button>
          </div>

          {/* =====================================
              NO COUNTER
          ===================================== */}

          {noCount > 0 && (
            <div className="no-counter">
              You said <strong>NO</strong> {noCount}{" "}
              {noCount === 1 ? "time" : "times"}.
              <span>I'm not giving up. 🙂</span>
            </div>
          )}
        </section>
      )}

      {/* =========================================
          MEME BUBBLES
      ========================================= */}

      {!accepted && (
        <section className="meme-universe">
          {Array.from({ length: noCount }).map((_, index) => {
            const memeIndex = index % memes.length;

            return (
              <div
                key={index}
                className={`meme-bubble meme-${(index % 8) + 1} ${
                  leaving ? "meme-leaving" : ""
                }`}
                style={{
                  "--meme-index": index,
                }}
              >
                <div className="meme-inner">
                  <img
                    src={memes[memeIndex]}
                    alt={`Meme ${memeIndex + 1}`}
                  />

                  <div className="meme-shine"></div>

                  <span className="meme-number">
                    #{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* =========================================
          YES TRANSITION
      ========================================= */}

      {leaving && !accepted && (
        <div className="yes-transition">
          <div className="transition-hearts">
            💛 ✦ 💗 ✧ 💛 ✦ 💗
          </div>

          <div className="transition-icon">🥹</div>

          <h2>FINALLY.</h2>

          <p>
            I knew you'd say yes eventually. 😂💛
          </p>
        </div>
      )}

      {/* =========================================
          ACCEPTED STATE
      ========================================= */}

      {accepted && (
        <section className="accepted-party">
          <div className="accepted-sparkles">
            ✦　✧　💛　✦　🎉　✧　💛　✦
          </div>

          <div className="accepted-icon">🎉</div>

          <p className="accepted-small">
            YOU SAID YES 💛
          </p>

          <h1>
            Okayyyy...
            <span>Let's Celebrate!</span>
          </h1>

          <p className="accepted-text">
            No more escaping now. 😌
            <br />
            It's officially party time.
          </p>

          {/* =====================================
              GOOGLE MAPS
          ===================================== */}

          <section className="real-map-card">
            <div className="real-map-heading">
              <span>📍</span>

              <div>
                <p>THE FINAL DECISION</p>

                <h2>
                  So... where are we eating?
                </h2>

                <small>
                  Find a restaurant in Thakur Village and let Google Maps take over. 💛
                </small>
              </div>
            </div>

            {/* =================================
                EMBEDDED GOOGLE MAP
            ================================= */}

            <div className="restaurant-map-wrapper">
              <iframe
                className="google-restaurant-map"
                src="https://www.google.com/maps?q=McDonald's+Domino's+Thakur+Village+Kandivali+East+Mumbai&output=embed"
                title="Restaurants in Thakur Village"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* =================================
                  LIVE LOCATION
              ================================= */}

              <button
                className="map-location-button"
                onClick={handleMyLocation}
              >
                📍 Use My Location
              </button>
            </div>

            <div className="map-bottom-note">
              🍽️ Restaurants around Thakur Village · Powered by Google Maps
            </div>
          </section>

          {/* =====================================
              BACK TO MEMORIES
          ===================================== */}

          <button
            className="back-to-memories"
            onClick={() => navigate("/our-memories")}
          >
            ← Go back to our memories
          </button>
        </section>
      )}
    </main>
  );
}

export default Party;