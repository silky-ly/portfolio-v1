export function Footer() {
  return (
    <footer className="footer w-full px-12 py-4 flex justify-between items-center border-t-0.5 border-solid border-black">
      <div className="footer-social w-2/4 flex justify-between">
        <a
          href="mailto: faithamiekhame@gmail.com"
          target="_blank"
          className="font-clash font-bold text-2xl cursor-pointer"
        >
          <span className="footer_span">faithamiekhame@gmail.com</span>
        </a>
      </div>

      <div className="footer-copyright font-clash text-xs text-right tracking-normal">
        <p>&copy; 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
