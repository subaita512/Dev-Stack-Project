function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="hidden md:flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500  to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                            DS
                        </div>

                        <h1 className="font-bold text-lg">
                            Dev<span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Stack</span>
                        </h1>
                    </div>

                    <ul className="flex gap-6 text-sm">
                        <li className="text-pink-500 font-medium">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <button className="text-sm font-medium">Sign In</button>

                        <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white px-4 py-2 rounded-full text-sm">
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="flex md:hidden items-center justify-between">
                    <button className="text-3xl">☰</button>

                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                            DS
                        </div>

                        <h1 className="font-bold">
                            Dev<span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Stack</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="text-sm">Sign In</button>

                        <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white px-3 py-2 rounded-full text-sm">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;