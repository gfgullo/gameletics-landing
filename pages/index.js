import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Grid, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Gameletics | Unleash your gaming's Superpowers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className={styles.hero}>

          <div>
            <div>
              <img src="img/logo.png" />
              <h2>Unleash your gaming's</h2>
              <h1>SUPERPOWERS</h1>
              <p>Cognitive training for gaming's athletes</p>

              <Button
                style={{ backgroundColor:"#3399FF", padding: "10px 100px 10px 100px", borderRadius: "20px" }}
                variant="contained" color="primary">
                Join Now
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.infoLeft}>
          <Grid container style={{minWidth:"100%"}} spacing={3}>

            <Grid item sm>
              <h3>Don't train to win,<br />Train to <span className={styles.strong} className={styles.strong}>dominate</span></h3>
              <br />
              <p>
                Who likes to lose? Nobody, especially you.
                        <br /><br />
                        Playing games makes you better at playing games, but we want to make you the best.
                        <br /><br />
                        We gathered together pro gamers, programmers and neuroscientists to create the first cognitive training platform for competitive players.
                    </p>
            </Grid>
            <Grid item sm>
              <img src="img/chart.png" />
            </Grid>
          </Grid>
        </div>

        <div className={styles.banner}>

          <h3>Artificial intelligence meets modern neuroscience</h3>
          <h2>TO MAKE YOU AN <span className={styles.strong}>ELITE GAMER</span></h2>

        </div>

        <div className={styles.infoRight}>
          <Grid container spacing={3}>

            <Grid item sm>
              <img src="img/app-iphone.png" />
            </Grid>

            <Grid item sm>
              <h3>Disciplined as a <span className={styles.strong}>soldier</span><br />Reactive as a <span className={styles.strong}>ninja</span></h3>
              <br />
              <p>
                Driven by AI, Gameletics training makes you faster, smarter, ready to rule the game.
                        <br /><br />
                        Your personalized coaching learns from you and other players and helps you improve your skills.
                        <br /><br />
                        Our system automatically recognizes your weaknesses and allows you to reinforce them with targeted training sessions.
                    </p>
            </Grid>

          </Grid>
        </div>

        <div className={styles.games}>
          <h3>Be the best in every fight</h3>
          <p>Gameletics' training improves your cognitions and this makes you better at any game on any platform</p>
        </div>

        <Grid container spacing={3}>
          <Grid className={styles.gamesMoba} item xs>
            <div>
              <h1>MOBA</h1>
              <p>League of Legens</p>
              <p>Dota 2</p>
              <p>Valorant</p>
              <p>Heroes of the Storm</p>
              <p>Smite</p>
              <p>Paladins</p>
              <p>& More</p>
            </div>
          </Grid>
          <Grid className={styles.gamesFps} item xs>
            <h1>FPS</h1>
            <p>Call of Duty</p>
            <p>Counter-Strike</p>
            <p>Fortnite</p>
            <p>PlayerUnknown's Battlegrounds</p>
            <p>Tom Clancy's Rainbow Six Siege</p>
            <p>Apex Legends</p>
            <p>& More</p>

          </Grid>

        </Grid>

        <div className={styles.subscribe}>
          <div id="subscribe">
            <h2>Join Now and get <span className={styles.strong}>3 months of free coaching</span></h2>
            <h4>Start now your journey to the gaming excellence</h4>

            <form>
              <input type="email" id="email" placeholder="ENTER YOUR EMAIL..." />
              <br />
              <Button
                style={{ padding: "10px 100px 10px 100px", borderRadius: "20px" }}
                variant="contained" color="primary">
                Join
              </Button>
            </form>

            <p>By clicking "Join" you agree to Gameletics' privacy policy and terms of service.</p>

          </div>
        </div>


      </main >

      <footer className={styles.footer}>
      <img src="img/logo.png" />
            <p>Unleash your gaming's superpowers</p>
            <a href="/privacy.html">Privacy Policy</a> | <a href="terms.html">Terms of Service</a>
      </footer>
    </div >
  );
}
