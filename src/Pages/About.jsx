const About = () => {
  return (
    <section className="bg-[#16423C] min-h-full w-screen px-6 py-16 text-black font-sans">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tasty Icon"
            className="max-w-2xlmax-w-xs left-96 rounded drop-shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div>
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            About <span className="text-[#C4DAD2]">TastyBytes</span>
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to your new kitchen sidekick. <strong>TastyBytes</strong>
            isn't just another recipe site. It's a flavorful community where
            passion meets the plate. 🍽️✨
          </p>
          <p className="text-md leading-relaxed mb-4">
            Born from the love of home cooking and endless food scrolls, this
            platform lets you create, save, and share recipes that are uniquely
            yours. Whether it's your mom's secret curry, your midnight maggi
            remix, or the pasta you nailed on your third attempt—we want it all.
          </p>
          <p className="text-md leading-relaxed mb-4">
            We blend modern tech with traditional flavors. Simple UI, minimal
            fluff, and maximum taste. Every byte you save here might be your
            next comfort food.
          </p>
          <p className="italic text-sm mt-6 text-white animate-pulse">
            <b>
              "In every recipe, there’s a story. In every story, a memory." 🧡
            </b>
          </p>
        </div>
      </div>

      <div className="mt-20 border-t pt-10 md:flex items-center gap-10 text-black">
        <img
          src="https://avatars.githubusercontent.com/u/173791507?v=4"
          alt="Afrid Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-[#C4DAD2] shadow-lg mb-6 md:mb-0"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Meet the <b className="text-white">Creator</b>
          </h2>
          <p className="text-md mb-2">
            <strong className="text-white font-black">Afrid Shaik</strong>, a
            passionate frontend developer, cofee-lover ☕, and the creative
            brain behind
            <span className="text-[#C4DAD2] font-bold"> TastyBytes</span>.
          </p>
          <p className="text-sm text-black">
            With a keen eye for UI and a heart full of home-cooked nostalgia,
            Afrid turned a simple idea into a tasteful journey. When he's not
            coding, he's probably thinking about biryani, debugging life, or
            designing <br /> something delicious.
          </p>

          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/ShaikAfrid1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#C4DAD2] hover:text-[#91b9a7] transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/afrid-shaik-7169521a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#C4DAD2] hover:text-[#91b9a7] transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
