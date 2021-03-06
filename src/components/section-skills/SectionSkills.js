import './SectionSkills.css';

export default function SectionSkills() {
  return (
    <>
      <section className="section-skills" id="skills">
        <h1>Skills</h1>
        <img className="info-img" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tiesco789&show_icons=true&hide_border=true&theme=tokyonight&hide=java,objective-c&layout=compact" alt="Most Languages Used" />
        <img className="info-img" src="https://github-readme-stats.vercel.app/api?username=Tiesco789&show_icons=true&hide_border=true&theme=tokyonight" alt="Tiesco789's Github Stats" />
        <img className="info-img" src="https://github-readme-stats.vercel.app/api/wakatime?username=@Tiesco&theme=tokyonight&hide_border=true&layout=compact" alt="Wakatime Stats" />
      </section>
    </>
  )
}