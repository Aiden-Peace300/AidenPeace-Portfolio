import './About.css';

export default function About() {
  return (
    <div>
      <h1>Aiden's Journey</h1>
      <div className="about-container">
        <div>
          <p
            style={{
              color: 'white',
              fontSize: '1rem',
              marginBottom: '0.5rem',
              marginLeft: '1rem',
              marginRight: '1rem',
              textAlign: 'left',
            }}>
            In the coding world, I wear the hat of a Full Stack Developer, juggling between crafting user-friendly interfaces and diving into the nitty-gritty of server-side logic. It's a job I enjoy, but outside of the tech bubble, you'll find me geeking out over vinyl records. My collection's got some gems like "Led Zeppelin 1996 - Led Zeppelin," "DAMN by Kendrick Lamar," and "Linkin Park - Meteora," taking me on a nostalgic ride through musical history.
            <br />
            <br />
            Beyond the screen and the turntable, I'm all about soaking in the night sky, especially in Joshua Tree. Armed with a telescope, I play astronomer, checking out constellations, spotting the North Star, and getting lost in the beauty of distant galaxies. There's something almost poetic about staring up at the stars.
            <br />
            <br />
            But hey, I'm not just a tech nerd and stargazer—I've got this thing for Muay Thai too. It's my go-to for staying fit and disciplined. A year of intense training has not only toughened me up but also added a touch of artistry to the whole combat dance. Pushing my physical limits and feeling that post-workout satisfaction is my kind of therapy.
            <br />
            <br />
            So, if you're up for it, join me on this journey where lines of code, vinyl grooves, starry nights, and some martial arts moves all come together. I'm just Aiden, a regular guy whose heart beats to the rhythm of diverse passions. Let's dive into this adventure where everyday stuff blends seamlessly with the extraordinary.
          </p>
        </div>
        <a
          href="https://github.com/Aiden-Peace300"
          target="_blank"
          rel="noopener noreferrer">
          <div className="photoOfAidenInRecordStore"></div>
        </a>
      </div>
    </div>
  );
}
