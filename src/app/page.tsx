import Image from "next/image";

export default function Home() {
  return (
   <div className="container">
    <div id="nav-bar" className="flex justify-between w-full" >
      <h1 className="logo mt-3 text-3xl ml-2.5">Portfoilio</h1>
      <ul className="flex gap-4 md:gap-6 mt-3 text-xl">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Skills</li>
      </ul>
    </div>
    <div className="hero-section">
      <div className="left w-6/12 mt-[20vh] ml-[10vh] text-2xl  "><span>Hello! My name is Kinza Aftab </span><br />I am a dedicated MERN stack developer with experience in building responsive web applications. I am currently enrolled in the Governor IT Initiative, where I have strengthened my skills in front-end technologies like HTML, CSS, JavaScript and I am also learning Next.js to expand my development skills. </div>
      <div className="right"></div>
    </div>
   </div>
  );
}
