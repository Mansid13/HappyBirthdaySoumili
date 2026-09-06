import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./OurMemories.css";

function OurMemories() {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(null);

  const memories = [
    {
      src: `${import.meta.env.BASE_URL}photos/us/u1.jpeg`,
      message: "Our presenations together in formals. 💛",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u2.jpeg`,
      message: "A little moment that became a big memory. ✨",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u3.jpeg`,
      message: "Some memories just feel different. 🫶",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u4.jpeg`,
      message: "This one deserves its own little place here. 🌼",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u5.jpeg`,
      message: "Proof that the best moments are usually unexpected. 💛",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u6.jpeg`,
      message: "And somehow this became one of my favourite memories. 🥹",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u7.jpeg`,
      message: "A snapshot of a moment I wouldn't trade. ✨",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u8.jpeg`,
      message: "Just us being us. 💛",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u9.jpeg`,
      message: "A tiny photograph holding a pretty big memory. 🌻",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u10.jpeg`,
      message: "Our saree Hug!! 📸",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u11.jpeg`,
      message: "One more little chapter of our story. 💫",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u12.jpeg`,
      message: "Some pictures don't need much explanation. 🫶",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u13.jpeg`,
      message: "Another memory safely kept here. 💛",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u14.jpeg`,
      message: "A moment worth coming back to. ✨",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u15.jpeg`,
      message: "We look like workers fr 🌼",
    },
    {
      src: `${import.meta.env.BASE_URL}photos/us/u16.jpeg`,
      message: "And here's to all the memories still waiting for us. 💛",
    },
  ];

  const toggleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <main className="our-page">
      {/* BACKGROUND */}
      <div className="our-glow our-glow-one"></div>
      <div className="our-glow our-glow-two"></div>
      <div className="our-glow our-glow-three"></div>

      <div className="our-floating-stars">
        <span>✦</span>
        <span>✧</span>
        <span>♡</span>
        <span>⋆</span>
        <span>✦</span>
        <span>✧</span>
        <span>♡</span>
      </div>

      {/* HEADER */}
      <header className="our-header">
        <button
          className="our-back-button"
          onClick={() => navigate("/memories")}
        >
          ← Memory Hub
        </button>

        <p className="our-eyebrow">✨ The two of us ✨</p>

        <h1>
          Our Little
          <span>Universe</span>
        </h1>

        <p className="our-intro">
          Some memories are better when they're
          <br />
          kept a little closer. 💛
        </p>
      </header>

      {/* MEMORY BUBBLES */}
      <section className="memory-bubbles">
        {memories.map((memory, index) => (
          <article
            key={memory.src}
            className={`memory-bubble bubble-${index + 1} ${
              flipped === index ? "is-flipped" : ""
            }`}
          >
            <div className="bubble-inner">
              {/* FRONT */}
              <div className="bubble-face bubble-front">
                <div className="bubble-shine"></div>

                <img
                  src={memory.src}
                  alt={`Our memory ${index + 1}`}
                />

                <div className="bubble-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <button
                  className="flip-button"
                  onClick={() => toggleFlip(index)}
                  aria-label={`View memory ${index + 1}`}
                >
                  ↻
                </button>
              </div>

              {/* BACK */}
              <div className="bubble-face bubble-back">
                <div className="back-sparkle">✦</div>

                <p className="back-label">
                  MEMORY {String(index + 1).padStart(2, "0")}
                </p>

                <p className="memory-message">
                  {memory.message}
                </p>

                <button
                  className="flip-back-button"
                  onClick={() => toggleFlip(index)}
                >
                  ↩ back to photo
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* VIDEO SECTION */}
      <section className="moving-memories">
        <div className="video-heading">
          <span className="video-line"></span>

          <div>
            <p>✦ MOVING MEMORIES ✦</p>

            <h2>
              Some moments were too alive
              <span>to stay in a photo.</span>
            </h2>
          </div>

          <span className="video-line"></span>
        </div>

        <div className="video-card">
          <div className="video-frame">
            <video
              controls
              playsInline
              preload="metadata"
            >
              <source
                src={`${import.meta.env.BASE_URL}videos/v1.mp4`}
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-caption">
            <span>🎥</span>
            <p>A memory that decided to move.</p>
            <span>💛</span>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="our-bottom">
        <div className="bottom-heart">♡</div>

        <p>
          And that's only a tiny part of it...
        </p>

        <h2>
          There's still a party waiting. 🎂
        </h2>

        <button
          className="party-button"
          onClick={() => navigate("/party")}
        >
          Let's go celebrate
          <span>→</span>
        </button>
      </section>
    </main>
  );
}

export default OurMemories;