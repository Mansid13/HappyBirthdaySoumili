import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import "./Party.css";

function Party() {
  const navigate = useNavigate();
  const containerRef = useRef(null); // meme-universe
  const centerRef = useRef(null);    // party-center (text + buttons)
  const maxYRef = useRef(0);         // how far down we've filled so far

  const memes = [
    `${import.meta.env.BASE_URL}photos/memes/m1.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m2.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m3.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m4.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m5.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m6.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m7.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m8.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m9.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m10.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m11.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m12.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m13.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m14.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m15.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m16.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m17.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m18.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m19.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m20.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m21.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m22.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m23.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m24.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m25.jpeg`,
    `${import.meta.env.BASE_URL}photos/memes/m26.jpeg`,
  ];

  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [positions, setPositions] = useState([]); // [{ top, left }]
  const [containerHeight, setContainerHeight] = useState(900);

  const handleNo = () => setNoCount((prev) => prev + 1);

  const handleYes = () => {
    setLeaving(true);
    setTimeout(() => setAccepted(true), 1100);
  };

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Your browser does not support location services.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl =
          "https://www.google.com/maps/search/restaurants/@" +
          latitude + "," + longitude + ",14z";
        window.open(mapsUrl, "_blank");
      },
      () => {
        alert("Couldn't access your location. Please allow location permission and try again.");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  // ---------- random, collision-aware bubble placement ----------

  const getBubbleSize = () => {
    const w = window.innerWidth;
    if (w <= 390) return 115;
    if (w <= 650) return 125;
    if (w <= 850) return 165;
    return 190;
  };

  const getExclusionRect = (containerRect) => {
    if (!centerRef.current) return null;
    const c = centerRef.current.getBoundingClientRect();
    const margin = 30; // breathing room around the text/buttons
    return {
      left: c.left - containerRect.left - margin,
      right: c.right - containerRect.left + margin,
      top: c.top - containerRect.top - margin,
      bottom: c.bottom - containerRect.top + margin,
    };
  };

  const rectsOverlap = (a, b) =>
    !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);

  const findPosition = (existing, bubbleSize, containerWidth, exclusion) => {
    const gap = 10;
    const maxAttempts = 80;
    let bandTop = 0;
    let bandBottom = Math.max(maxYRef.current, window.innerHeight * 0.9);

    for (let expansion = 0; expansion < 15; expansion++) {
      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const left = Math.random() * Math.max(containerWidth - bubbleSize, 1);
        const top = bandTop + Math.random() * Math.max(bandBottom - bandTop - bubbleSize, 1);
        const rect = { left, top, right: left + bubbleSize, bottom: top + bubbleSize };

        if (exclusion && rectsOverlap(rect, exclusion)) continue;

        const collides = existing.some((p) => {
          const r2 = {
            left: p.left - gap,
            top: p.top - gap,
            right: p.left + bubbleSize + gap,
            bottom: p.top + bubbleSize + gap,
          };
          return rectsOverlap(rect, r2);
        });
        if (collides) continue;

        maxYRef.current = Math.max(maxYRef.current, top + bubbleSize);
        return { top, left };
      }
      // current screenful is packed — extend the page a bit and keep trying
      bandBottom += bubbleSize * 1.6;
    }

    // last-resort fallback so we never fail to place a bubble
    const fallbackTop = bandBottom;
    maxYRef.current = Math.max(maxYRef.current, fallbackTop + bubbleSize);
    return { top: fallbackTop, left: Math.random() * Math.max(containerWidth - bubbleSize, 1) };
  };

  const regenerateAll = useCallback((count) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const bubbleSize = getBubbleSize();
    const exclusion = getExclusionRect(containerRect);
    maxYRef.current = window.innerHeight * 0.85;

    const next = [];
    for (let i = 0; i < count; i++) {
      next.push(findPosition(next, bubbleSize, containerRect.width, exclusion));
    }
    setPositions(next);
    setContainerHeight(Math.max(maxYRef.current + 80, window.innerHeight));
  }, []);

  // add new bubbles as noCount grows, without moving ones already placed
  useEffect(() => {
    if (!containerRef.current) return;

    if (noCount > positions.length) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const bubbleSize = getBubbleSize();
      const exclusion = getExclusionRect(containerRect);

      setPositions((prev) => {
        const next = [...prev];
        for (let i = prev.length; i < noCount; i++) {
          next.push(findPosition(next, bubbleSize, containerRect.width, exclusion));
        }
        return next;
      });
      setContainerHeight((h) => Math.max(h, maxYRef.current + 80));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noCount]);

  // re-layout on resize (breakpoints change bubble size / safe zone)
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => regenerateAll(noCount), 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noCount, regenerateAll]);

  return (
    <main className={`party-page ${accepted ? "party-accepted" : ""}`}>
      <div className="party-glow party-glow-one"></div>
      <div className="party-glow party-glow-two"></div>
      <div className="party-glow party-glow-three"></div>

      <div className="party-stars">
        <span>✦</span><span>✧</span><span>♡</span><span>⋆</span>
        <span>✦</span><span>♡</span><span>✧</span>
      </div>

      {!accepted && (
        <button className="party-back" onClick={() => navigate("/our-memories")}>
          ← Our memories
        </button>
      )}

      {!accepted && (
        <section className="party-center" ref={centerRef}>
          <div className="party-mini-label">✨ okay... one last question ✨</div>
          <div className="party-cake">🎂</div>
          <h1>
            Sooo...
            <span>Party Time?</span>
          </h1>
          <p className="party-question">
            Okay Bestie. Decision Time.
            <br />
            No more scrolling through memories to dodge this.
            <br />
            <strong>One button. One choice. Let's go..</strong>
          </p>

          <div className="party-buttons">
            <button className="yes-button" onClick={handleYes}>
              <span>YES 💛</span>
              <small>let's go!</small>
            </button>
            <button className="no-button" onClick={handleNo}>NO 😈</button>
          </div>

          {noCount > 0 && (
            <div className="no-counter">
              You said <strong>NO</strong> {noCount} {noCount === 1 ? "time" : "times"}.
              <span>I'm not giving up. 🙂</span>
            </div>
          )}
        </section>
      )}

      {!accepted && (
        <section
  className="meme-universe"
  ref={containerRef}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: "none",
    height: containerHeight,
  }}
>
          {Array.from({ length: noCount }).map((_, index) => {
            const memeIndex = index % memes.length;
            const pos = positions[index];
            if (!pos) return null;

            return (
              <div
                key={index}
                className={`meme-bubble meme-${(index % 8) + 1} ${leaving ? "meme-leaving" : ""}`}
                style={{
                  "--meme-index": index,
                  top: `${pos.top}px`,
                  left: `${pos.left}px`,
                }}
              >
                <div className="meme-inner">
                  <img src={memes[memeIndex]} alt={`Meme ${memeIndex + 1}`} />
                  <div className="meme-shine"></div>
                  <span className="meme-number">#{index + 1}</span>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {leaving && !accepted && (
        <div className="yes-transition">
          <div className="transition-hearts">💛 ✦ 💗 ✧ 💛 ✦ 💗</div>
          <div className="transition-icon">🥹</div>
          <h2>FINALLY.</h2>
          <p>I knew you'd say yes eventually. 😂💛</p>
        </div>
      )}

      {accepted && (
        <section className="accepted-party">
          <div className="accepted-sparkles">✦　✧　💛　✦　🎉　✧　💛　✦</div>
          <div className="accepted-icon">🎉</div>
          <p className="accepted-small">YOU SAID YES 💛</p>
          <h1>
            Okayyyy...
            <span>Let's Celebrate!</span>
          </h1>
          <p className="accepted-text">
            No more escaping now. 😌
            <br />
            It's officially party time.
          </p>

          <section className="real-map-card">
            <div className="real-map-heading">
              <span>📍</span>
              <div>
                <p>THE FINAL DECISION</p>
                <h2>So... where are we eating?</h2>
                <small>Find a restaurant in Thakur Village and let Google Maps take over. 💛</small>
              </div>
            </div>

            <div className="restaurant-map-wrapper">
              <iframe
                className="google-restaurant-map"
                src="https://www.google.com/maps?q=McDonald's+Domino's+Thakur+Village+Kandivali+East+Mumbai&output=embed"
                title="Restaurants in Thakur Village"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <button className="map-location-button" onClick={handleMyLocation}>
                📍 Use My Location
              </button>
            </div>

            <div className="map-bottom-note">
              🍽️ Restaurants around Thakur Village · Powered by Google Maps
            </div>
          </section>

          <button className="back-to-memories" onClick={() => navigate("/our-memories")}>
            ← Go back to our memories
          </button>
        </section>
      )}
    </main>
  );
}

export default Party;