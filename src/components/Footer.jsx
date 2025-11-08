export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} CipherCloud, Inc. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-white">Terms</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-white">Status</a>
        </div>
      </div>
    </footer>
  );
}
