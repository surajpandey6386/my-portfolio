import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { nav, profile } from '../data/data'
export default function Footer() {
  return (
    <footer className="foot"><div className="wrap foot-in">
      <div><strong>{profile.name}</strong><p className="muted">{profile.title}</p>
        <p className="muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p></div>
      <nav aria-label="Footer">{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
      <div className="social">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
        <a href="#home" aria-label="Back to top"><ArrowUp /></a>
      </div>
    </div></footer>
  )
}
