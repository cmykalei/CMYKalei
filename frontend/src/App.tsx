// Global styles consolidated in index.css; App.css removed
import { Header } from '@/components/ui/Header';


function App() {
  return (
    <div className="app-grid">
      <Header
        greeting="Hi"
        name="Kalei"
        qualification="Bachelor of Computer Science, University of Waikato, NZ"
        disclaimer="Still undergrad, so Memoji placeholder 🤭"
        flex="col"
        size="medium"
      />

      <footer className="footer" role="contentinfo" aria-label="Social links">
        <div className="link-row">
        <a
          href="https://github.com/cmykalei"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub: @cmykalei"
          title="GitHub"
        >
          <img className="inline-icon" src="/github-mark.svg" alt="" aria-hidden="true" width={18} height={18} style={{ marginRight: 6 }} />
          GitHub
        </a>

        <a
          href="https://instagram.com/cmykalei"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram: @cmykalei"
          title="Instagram: @cmykalei"
        >
          <img className="inline-icon" src="/Instagram_Glyph_Black.svg" alt="" aria-hidden="true" width={18} height={18} style={{ marginRight: 6 }} />
          Instagram
        </a>
        </div>
      </footer>
    </div>
  )
}

export default App
