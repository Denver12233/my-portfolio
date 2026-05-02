import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="font-syne text-2xl font-bold mb-2">Denver Tandingan</h3>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xs font-light">
              Frontend Developer & UI/UX Designer Intern passionate about crafting premium digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <Link href="/" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-accent-500 transition-colors">Home</Link>
            <Link href="/work" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-accent-500 transition-colors">Work</Link>
            <Link href="/logs" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-accent-500 transition-colors">Logs</Link>
            <Link href="mailto:denver@example.com" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-accent-500 transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-100 dark:border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Denver Tandingan. All rights reserved.
          </p>
           <div className="flex gap-6">
             {/* TODO: Replace with actual GitHub URL */}
             <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="Visit Denver Tandingan's GitHub profile" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-accent-500 transition-colors">
               GitHub
             </a>
             {/* TODO: Replace with actual LinkedIn URL */}
             <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="Visit Denver Tandingan's LinkedIn profile" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-accent-500 transition-colors">
               LinkedIn
             </a>
             {/* TODO: Replace with actual email */}
             <a href="mailto:YOUR_EMAIL@example.com" aria-label="Send an email to Denver Tandingan" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-accent-500 transition-colors">
               Email
             </a>
           </div>
        </div>
      </div>
    </footer>
  );
};
