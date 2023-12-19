export function Footer() {
  return (
    <footer className="w-full px-12 py-4 flex justify-between items-center text-foreground border-t-0.5 border-solid border-foreground">
      <div className="w-2/4 flex justify-between">
        <a
          href="mailto: faithamiekhame@gmail.com"
          target="_blank"
          className="text-foreground font-bold text-2xl cursor-pointer"
        >
          <span>faithamiekhame@gmail.com</span>
        </a>
      </div>

      <div className="text-xs text-right tracking-normal">
        <p>&copy; 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
