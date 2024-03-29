import LogoHTML from "../assets/svg/LogoHTML";
import LogoCSS from "../assets/svg/LogoCSS";
import LogoJS from "../assets/svg/LogoJS";
import LogoReact from "../assets/svg/LogoReact";
import LogoMySQL from "../assets/svg/LogoMySQL";
import LogoNode from "../assets/svg/LogoNode";
import styles from "./Home.module.css";

export const certs = [
  {
    id: 0,
    name: "JavaScript",
    link: "https://ude.my/UC-8eaaafa0-504b-4c88-838b-4c909d3335a1/",
    logo1: LogoJS,
    logoClass: `${styles.anim} ${styles.anchor}`,
    showProgressText: false,
    progressDescription: "Finished",
    progress: 100,
    paused: false,
    starred: false,
  },
  {
    id: 1,
    name: "HTML & CSS",
    link: "https://ude.my/UC-a2ab9a40-ae7e-44e4-8753-bd03b6aaefe9/",
    logo1: LogoHTML,
    logo2: LogoCSS,
    logoClass: `${styles.anim} ${styles.anchor} ${styles.logoContainer}`,
    showProgressText: false,
    progressDescription: "Finished",
    progress: 100,
    paused: false,
    starred: true,
  },
  {
    id: 2,
    name: "React",
    link: "https://ude.my/UC-4f6cc7b2-3dd3-4c62-ba16-9671214e7d6d/",
    logo1: LogoReact,
    logoClass: `${styles.anim} ${styles.anchor}`,
    showProgressText: false,
    progressDescription: "Finished",
    progress: 100,
    paused: false,
    starred: false,
  },
  {
    id: 3,
    name: "MySQL",
    link: "https://ude.my/UC-ce3021d5-6158-42f6-b20a-95d8afcaa43b/",
    logo1: LogoMySQL,
    logoClass: `${styles.anim} ${styles.anchor}`,
    showProgressText: false,
    progressDescription: "Finished",
    progress: 100,
    paused: false,
    starred: false,
  },
  {
    id: 4,
    name: "React",
    link: "https://ude.my/UC-1a7a2936-732f-4826-a792-95a9ba49d4da/",
    logo1: LogoReact,
    logoClass: `${styles.anim} ${styles.anchor}`,
    showProgressText: false,
    progressDescription: "Finished",
    progress: 100,
    paused: false,
    starred: true,
  },
  {
    id: 5,
    name: "Node",
    link: null,
    logo1: LogoNode,
    logoClass: `${styles.anchor} ${styles.paused}`,
    showProgressText: false,
    progressDescription: "In progress",
    progress: 20,
    paused: true,
    starred: false,
  },
];
