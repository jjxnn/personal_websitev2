import Image from "next/image";
import styles from "./page.module.scss";
import profilePic from "./img/peeps.svg";
import videa from "./img/polaroid3.png";
import haa from "./img/polaroid2.png";
import pockeity from "./img/polaroid1.png";
import Link from "next/link";

import flower from "./img/flower.svg";
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={`${styles.intro_cont} ${styles.round_edge}`}>
        <section className={styles.headline_cont}>
          <h1>Hi, my name is Jen Nguyen.</h1>
          <h2>I&#39;m a front-end developer</h2>
          <p style={{ fontSize: "1.2rem" }}>
            passionate about creating digital experiences with usability in
            mind.{" "}
          </p>
          <Link
            className={styles.resume_btn}
            href="files/resume.pdf"
            locale={false}
            target="_blank"
          >
            My Resume
          </Link>
        </section>
        <Image
          src={profilePic}
          alt="peeps-profile-pic"
          className={styles.peep_img}
        />
      </section>

      {/**/}
      <div className={`${styles.divider} ${styles.round_edge}`}>Skills</div>
      <section className={styles.skills_cont}>
        <section
          className={styles.skills_cont_child}
          style={{ backgroundColor: "#F4D738" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className={styles.skills_icon}
          >
            <rect width="512" height="512" fill="none"></rect>
            <polyline
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              points="64 88 16 128 64 168"
            ></polyline>
            <polyline
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              points="192 88 240 128 192 168"
            ></polyline>
            <line
              x1="160"
              x2="96"
              y1="40"
              y2="216"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
          </svg>
          <p className={styles.skills_title}>Languages</p>
          <ul className={styles.skills_list}>
            <li>JavaScript</li>
            <li>HTML & CSS (SCSS/SASS)</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </section>

        <section
          className={styles.skills_cont_child}
          style={{ backgroundColor: "#90ee90" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            viewBox="0 0 512 512"
            height="512"
            className={styles.skills_icon}
          >
            <path d="M160 153.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zM288 153.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zM416 153.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zM160 281.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zM288 281.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zM416 281.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zM160 409.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zM288 409.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zM416 409.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5z"></path>
          </svg>
          <p className={styles.skills_title}>Frameworks & Libraries</p>
          <ul className={styles.skills_list}>
            <li>React/Next.js</li>
            <li>jQuery</li>
            <li>React-Router</li>
            <li>Framer Motion</li>
            <li>styled-components</li>
          </ul>
        </section>

        <section
          className={styles.skills_cont_child}
          style={{ backgroundColor: "#FFB2EF" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            clipRule="evenodd"
            viewBox="0 0 32 32"
            id="tools"
            className={styles.skills_icon}
          >
            <path
              d="M392.724,15.842l-5.824,5.185c-1.175,1.046 -1.867,2.531 -1.913,4.104c-0.046,1.572 0.562,3.098 1.675,4.21c-0,0 -0,0 -0,0c1.112,1.113 2.634,1.718 4.207,1.672c1.573,-0.046 3.058,-0.738 4.104,-1.913l4.995,-5.611l-7.244,-7.647Zm21.14,14.023c0.739,-0.739 1.15,-1.748 1.136,-2.793c-0.014,-1.046 -0.451,-2.042 -1.21,-2.761c0,0 -16.514,-15.645 -16.514,-15.645c0.111,-0.463 0.169,-0.946 0.169,-1.443c0,-3.435 -2.788,-6.223 -6.222,-6.223c-1.367,-0 -2.632,0.442 -3.659,1.19c-0.274,0.199 -0.428,0.523 -0.41,0.861c0.018,0.338 0.205,0.644 0.498,0.813l3.477,2.008c0.01,0.006 0.018,0.015 0.021,0.027c0.003,0.011 0.001,0.023 -0.005,0.033c0,0 -1.044,1.81 -1.044,1.81c-0.006,0.01 -0.016,0.017 -0.027,0.02c-0.012,0.003 -0.024,0.002 -0.034,-0.004l-3.503,-2.023c-0.292,-0.168 -0.648,-0.178 -0.948,-0.028c-0.301,0.151 -0.506,0.442 -0.545,0.776c-0.029,0.243 -0.044,0.49 -0.044,0.74c-0,3.434 2.788,6.222 6.223,6.222c0.497,0 0.98,-0.058 1.444,-0.169c-0.001,0 15.644,16.514 15.644,16.514c0.719,0.759 1.715,1.196 2.761,1.21c1.045,0.014 2.052,-0.395 2.792,-1.135l-0,0Zm-23.157,-3.158l2,-2c0.39,-0.39 0.39,-1.024 0,-1.414c-0.39,-0.39 -1.024,-0.39 -1.414,-0l-2,2c-0.39,0.39 -0.39,1.024 -0,1.414c0.39,0.39 1.024,0.39 1.414,0Zm10.774,-16.431l4.357,4.128l2.212,-2.212c0,0 2.414,0 2.414,0c0.364,0 0.698,-0.197 0.875,-0.514l3.535,-6.364c0.217,-0.39 0.149,-0.877 -0.167,-1.193l-2.828,-2.828c-0.316,-0.316 -0.803,-0.384 -1.193,-0.167l-6.364,3.535c-0.317,0.177 -0.514,0.511 -0.514,0.875l-0,2.414l-2.327,2.326Z"
              transform="translate(-384)"
            ></path>
          </svg>
          <p className={styles.skills_title}>Tools and Platforms</p>
          <ul className={styles.skills_list}>
            <li>Firebase</li>
            <li>Jenkins</li>
            <li>Sonarqube</li>
            <li>Docker</li>
            <li>Artifactory</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
          </ul>
        </section>
      </section>

      {/**/}
      <div
        className={`${styles.divider} ${styles.round_edge} ${styles.project_divider}`}
      >
        {" "}
        Featured Projects {/*<Link href="">View More</Link>*/}
      </div>
      <section className={`${styles.projects_cont} ${styles.round_edge}`}>
        <section className={styles.project_desc}>
          <p className={styles.project_title}>Videa - Game Log Tracking</p>

          <ul className={styles.project_stacks}>
            <li>React</li>
            <li>React-Router</li>
            <li>Firebase</li>
            <li>IGDB API</li>
            <li>SCSS</li>
            <li>Framer Motion</li>
            <li>styled-components</li>
          </ul>
          <p>
            Improvised version of my first website, Game Released. The website
            now has dynamic game page using React-Router and IGDB API; along
            with user authentication and features like track games and
            user&#39;s dashboard and profiles using Firebase.
          </p>
          <ul className={styles.project_action}>
            <li style={{ backgroundColor: "#FF7A5C" }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15L20 4m-5 0h5v5"
                />
              </svg>
              <a href="https://game-releasev2.vercel.app/" target="_blank">
                Demo Link
              </a>
            </li>
            <li style={{ backgroundColor: "#87ceeb" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                />
              </svg>
              <a href="https://github.com/jjxnn/game_releasev2" target="_blank">
                Github
              </a>
            </li>
          </ul>
          {/* <Link href="" className={styles.project_more}>
            Read More
          </Link> */}
        </section>
        <Image
          src={videa}
          alt="peeps-profile-pic"
          className={styles.project_pic}
        />
      </section>

      <section
        className={`${styles.projects_cont} ${styles.round_edge}`}
        id="project"
      >
        <Image
          src={pockeity}
          alt="peeps-profile-pic"
          className={styles.project_pic}
        />
        <section className={styles.project_desc}>
          <p className={styles.project_title}>Pockeity - Productivity App</p>
          <ul className={styles.project_stacks}>
            <li>React</li>
            <li>Quotable API</li>
            <li>SCSS</li>
            <li>Framer Motion</li>
            <li>styled-components</li>
          </ul>
          <p>
            A productivity application allows user to stay productive throughout
            the day with widgets like pomodoro, note-taking, and ambience audio.
            Along with customizable features such as setting background and
            audio control!
          </p>
          <ul className={styles.project_action}>
            <li style={{ backgroundColor: "#FF7A5C" }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15L20 4m-5 0h5v5"
                />
              </svg>
              <a href="https://pockeity.vercel.app/" target="_blank">
                Demo Link
              </a>
            </li>
            <li style={{ backgroundColor: "#87ceeb" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                />
              </svg>
              <a href="https://github.com/jjxnn/study-app" target="_blank">
                Github
              </a>
            </li>
          </ul>

          {/* <Link href="" className={styles.project_more}>
            Read More
          </Link> */}
        </section>
      </section>

      <section className={`${styles.projects_cont} ${styles.round_edge}`}>
        <section className={styles.project_desc}>
          <p className={styles.project_title}>Housing Assessment Application</p>
          <ul className={styles.project_stacks}>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>MySQL</li>
            <li>Figma & Balsamiq</li>
          </ul>
          <p>
            Demo of the front-end of a full-stack web form filling application
            for the U.S. Army Central. The website streamline the housing
            application process allowing user to create, edit, and store housing
            documentations.
            <br />* Due to privacy reasons, there is no public GitHub repo.
          </p>
          <ul className={styles.project_action}>
            <li style={{ backgroundColor: "#FF7A5C" }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15L20 4m-5 0h5v5"
                />
              </svg>
              <a href="https://demo-haa.onrender.com/" target="_blank">
                Demo Link
              </a>
            </li>
          </ul>
          {/* <Link href="" className={styles.project_more}>
            Read More
          </Link> */}
        </section>
        <Image
          src={haa}
          alt="peeps-profile-pic"
          className={styles.project_pic}
        />
      </section>

      {/**/}
      <div className={`${styles.divider} ${styles.round_edge}`} id="about">
        About Me
      </div>
      <section className={` ${styles.about_me_cont} ${styles.round_edge}`}>
        <p>
          I&#39;m a front-end developer from Lexington, SC! My interest in
          front-end development started when I took a course at my university in
          2021. My first ever website allows me to express my artistic skill and
          improve an user experience. The project also taught me a lot about the
          web! <br />
          Once front-end sparked my interest, I continue to hone my craft as a
          developer by building projects that focuses on responsiveness and
          streamlining user experience! I have interned for{" "}
          <b>BlueCross BlueShield SC</b>, where I was able gain experience in
          DevOps and learned CI/CD. I recently created a website for the{" "}
          <b>U.S. Army Central</b> that streamline the housing application
          process. These valuable experiences allowed me to grow as a developer
          and I&#39;m ready to embark on my next learning journey. <br />
          In my free time, I enjoy baking delicious desserts{" "}
          <span>(my favorite is cheesecake)</span> and play video games. Other
          times, I love to learn new front-end techniques to add to my own
          website!
        </p>
      </section>

      {/**/}
      <section
        className={` ${styles.contact_cont} ${styles.round_edge}`}
        id="contact"
      >
        <p>Don&#39;t be shy to say hello!</p>
        <p className={styles.contact_para}>
          I&#39;m currently open to front-end development positions. If you have
          any opportunities or projects that I would be a great fit for, feel
          free to reach me at <b>jennifernguyen0000@gmail.com</b>. Or drop me a
          message on{" "}
          <a href="https://www.linkedin.com/in/jen-nguyen0805/"
          target="_blank" style={{fontWeight: '700'}}>LinkedIn</a>. I
          will be delighted to talk to you!
        </p>
        <Image
          src={flower}
          alt="flower-accent"
          className={`${styles.flower_accent}`}
        />
        <Image
          src={flower}
          alt="flower-accent"
          className={`${styles.flower_accent}`}
        />
      </section>
    </main>
  );
}
