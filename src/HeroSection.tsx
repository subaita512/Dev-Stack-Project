import hero from "./assets/hero.png";
function HeroSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                        Build Your Ideal{" "}
                        <span className="whitespace-nowrap bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="text-gray-500 mt-5 max-w-xl mx-auto md:mx-0 leading-relaxed">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-7">
                        <button className="btn border-0 text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90">
                            Explore Technologies
                        </button>

                        <button className="btn btn-outline">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={hero}
                        alt="Development Stack"
                        className="w-64 sm:w-72 lg:w-80 h-auto"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;