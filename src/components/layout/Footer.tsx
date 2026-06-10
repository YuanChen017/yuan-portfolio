import { FOOTER } from "../../data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>{FOOTER.copyright}</p>
        <p>{FOOTER.builtWith}</p>
      </div>
      <div className="footer-right">
        <button className="footer-back-top" onClick={scrollToTop}>
          {FOOTER.backToTop}
        </button>
      </div>
    </footer>
  );
}
