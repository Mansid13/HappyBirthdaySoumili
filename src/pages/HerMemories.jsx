import { useNavigate } from "react-router-dom";
import "./HerMemories.css";

function HerMemories() {
  const navigate = useNavigate();

  const photos = [
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s1.jpeg`,
    message: "A little moment worth keeping 💛",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s2.jpeg`,
    message: "Just being you ✨",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s3.jpeg`,
    message: "One of those pretty moments 🌼",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s4.jpeg`,
    message: "Main character energy ✨",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s5.jpeg`,
    message: "This one had to be here 💛",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s6.jpeg`,
    message: "A tiny memory 📸",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s7.jpeg`,
    message: "Okay but look at you 🥹",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s8.jpeg`,
    message: "Another one for the memory box ✨",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s9.jpeg`,
    message: "You being you 💛",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s15.jpeg`,
    message: "This deserved a little spotlight 🌼",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s11.jpeg`,
    message: "A moment frozen in time 📸",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s12.jpeg`,
    message: "Too cute not to include 💛",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s13.jpeg`,
    message: "One more memory ✨",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s14.jpeg`,
    message: "Just a little happiness 🌻",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s10.jpeg`,
    message: "Another page in your story 💛",
  },
  {
    src: `${import.meta.env.BASE_URL}photos/soumili/s16.jpeg`,
    message: "And here's one more 🥹✨",
  },
];

  return (
    <main className="her-page">

      {/* Background decorations */}
      <div className="her-glow glow-one"></div>
      <div className="her-glow glow-two"></div>
      <div className="her-glow glow-three"></div>

      <div className="her-stars">
        <span>✦</span>
        <span>✧</span>
        <span>⋆</span>
        <span>✦</span>
        <span>♡</span>
        <span>✧</span>
        <span>⋆</span>
      </div>

      {/* Header */}
      <header className="her-header">

        <button
          className="her-back-button"
          onClick={() => navigate("/memories")}
        >
          ← Memory Hub
        </button>

        <div className="her-heading">
          <p className="her-small-title">
            ✨ A little corner of the memory vault ✨
          </p>

          <h1>
            A Little World
            <span>Called Soumili</span>
          </h1>

          <p className="her-description">
            16 little snapshots of someone who deserves
            <br />
            her own tiny museum. 💛
          </p>
        </div>

        <div className="her-count">
          <span>16</span>
          <small>memories</small>
        </div>

      </header>

      {/* Photo scrapbook */}
      <section className="photo-scrapbook">

        {photos.map((photo, index) => (
          <article
            className={`memory-photo photo-${index + 1}`}
            key={photo.src}
          >
            <div className="tape"></div>

            <div className="photo-frame">
              <img
                src={photo.src}
                alt={`Soumili memory ${index + 1}`}
              />

              <div className="photo-overlay">
                <span>♡</span>
              </div>
            </div>

            <div className="photo-caption">
              <span>{photo.message}</span>
            </div>
          </article>
        ))}

      </section>

      {/* Bottom section */}
      <section className="her-bottom">

        <div className="bottom-sparkle">✦</div>

        <p>
          Some people collect things...
        </p>

        <h2>
          I collect memories. 💛
        </h2>

        <p className="bottom-subtext">
          And somehow, you keep becoming part of the best ones.
        </p>

        <button
          className="our-memories-button"
          onClick={() => navigate("/our-memories")}
        >
          Now let's see <strong>our</strong> memories
          <span>→</span>
        </button>

      </section>

    </main>
  );
}

export default HerMemories;