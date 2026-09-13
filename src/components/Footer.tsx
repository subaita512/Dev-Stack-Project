function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                DS
              </div>

              <h2 className="text-2xl font-bold">
                <span className="text-black">Dev</span>
                <span className="text-purple-600">Stack</span>
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-6 mt-4 max-w-sm">
              Curated tools, technologies and resources for developers
              building modern software.
            </p>

            <div className="flex gap-5 mt-8 text-sm text-gray-500">
              <a
                href="#"
                className="hover:text-black transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="hover:text-black transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="hover:text-black transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black mb-5">
              Product
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-black">
                Home
              </a>

              <a href="#" className="hover:text-black">
                Technologies
              </a>

              <a href="#" className="hover:text-black">
                Projects
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black mb-5">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-black">
                About
              </a>

              <a href="#" className="hover:text-black">
                Contact
              </a>

              <a href="#" className="hover:text-black">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black mb-5">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-black">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-black">
                Terms and Service
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-sm text-gray-400">
          <p>
            © 2026 DevStack. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;