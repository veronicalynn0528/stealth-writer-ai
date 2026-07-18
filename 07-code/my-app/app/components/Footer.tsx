export default function Footer() {
  return (
    <footer className="bg-background border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-5 md:px-16 py-12 max-w-[1200px] mx-auto">
        <div className="font-headline-sm text-headline-sm text-primary mb-6 md:mb-0">
          Stealth Writer AI
        </div>
        <div className="flex gap-12 mb-6 md:mb-0">
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/privacy">Privacy</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/terms">Terms</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="mailto:hello@stealthwriter.online">Contact</a>
        </div>
        <div className="font-caption text-caption text-on-surface-variant">
          © 2024 Stealth Writer AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
