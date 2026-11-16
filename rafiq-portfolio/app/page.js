import Image from "next/image";
import { profile, work, projects, skills, education, certificates, languages } from "../data/profile";
import Workflow from "../components/Workflow";
import Projects from "../components/Projects";
import CommandPalette from "../components/CommandPalette";
import { PaletteButton, ThemeButton, LocalTime, CopyEmail } from "../components/Bits";

const LEVEL = { Native: 100, C2: 92, C1: 78, B2: 62, B1: 48, A2: 32, A1: 18 };

export default function Home() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="brand">{profile.shortName}</a>
          <nav aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-tools">
            <PaletteButton />
            <ThemeButton />
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero-in">
            <div className="hero-copy">
              <p className="status"><span className="pulse" aria-hidden="true" />{profile.status}</p>
              <h1>
                {first}
                <br />
                {rest.join(" ")}
              </h1>
              <p className="role">{profile.role}</p>
              <p className="lede">{profile.intro}</p>
              <div className="actions">
                <a className="btn" href="#projects">See my work</a>
                <a className="btn ghost" href="#contact">Get in touch</a>
              </div>
            </div>
            <Workflow />
          </div>
        </section>

        <section className="band about" aria-labelledby="about-h">
          <div className="wrap about-in">
            <Image src={profile.photo} alt={`${profile.name} in a dark suit, standing outdoors with hills behind him`} width={520} height={520} priority />
            <div>
              <h2 id="about-h">About</h2>
              {profile.about.map((p) => <p key={p}>{p}</p>)}
              <dl className="facts">
                {profile.facts.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="band" id="work" aria-labelledby="work-h">
          <div className="wrap">
            <h2 id="work-h">Work</h2>
            {work.map((w) => (
              <article key={w.title + w.org} className="job">
                <div className="job-side">
                  <h3>{w.title}</h3>
                  <p className="muted">{w.org}, {w.place}<br />{w.when}</p>
                  <p className="big">{w.stat.value}</p>
                  <p className="muted small">{w.stat.label}</p>
                </div>
                <div>
                  <ul className="points">
                    {w.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <ul className="tags">
                    {w.tools.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="band" id="projects" aria-labelledby="proj-h">
          <div className="wrap">
            <h2 id="proj-h">Projects</h2>
            <Projects projects={projects} />
          </div>
        </section>

        <section className="band" id="skills" aria-labelledby="skills-h">
          <div className="wrap">
            <h2 id="skills-h">Skills</h2>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3>{s.group}</h3>
                  <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="education" aria-labelledby="edu-h">
          <div className="wrap">
            <h2 id="edu-h">Education</h2>
            <div className="edu">
              <div className="degree">
                <p className="muted">{education.when}</p>
                <h3>{education.degree}</h3>
                <p>{education.school}</p>
                <p className="big">{education.grade.replace("CGPA ", "")}</p>
                <p className="muted small">CGPA</p>
                <h4>Coursework</h4>
                <ul className="plain">{education.courses.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
              <div>
                <h3 className="sub">Certificates</h3>
                <ul className="rows">
                  {certificates.map(([c, by]) => (
                    <li key={c}><span>{c}</span><span className="muted">{by}</span></li>
                  ))}
                </ul>
                <h3 className="sub">Languages</h3>
                <ul className="langs">
                  {languages.map(([l, lv]) => (
                    <li key={l}>
                      <span>{l}</span>
                      <span className="meter" aria-hidden="true"><span style={{ width: `${LEVEL[lv] ?? 50}%` }} /></span>
                      <span className="muted">{lv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="band contact" id="contact" aria-labelledby="contact-h">
          <div className="wrap">
            <h2 id="contact-h">Let’s automate something</h2>
            <p className="lede">Have a task your team does by hand every day? Send it over.</p>
            <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="actions">
              <CopyEmail />
              {profile.links.linkedin && <a className="btn ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
              {profile.links.github && <a className="btn ghost" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>}
              {profile.links.cv && <a className="btn ghost" href={profile.links.cv} target="_blank" rel="noreferrer">CV</a>}
            </div>
            <p className="muted clock">It’s <LocalTime /> in {profile.location}</p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">{profile.name}, {new Date().getFullYear()}. Built with Next.js, hosted on Vercel.</div>
      </footer>
      <CommandPalette />
    </>
  );
}
