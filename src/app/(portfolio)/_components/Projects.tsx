import Link from "next/link";

const projects = [
  {
    title: "shop daisy",
    url: "https://images.unsplash.com/photo-1591785923391-1f2d344b12b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "portfolio",
    url: "",
  },
  {
    title: "e-commerce",
    url: "",
  },
  {
    title: "tic-tac-toe",
    url: "",
  },
];

export function Projects() {
  return (
    <section className="h-screen pt-5 px-12">
      <h4 className="project-heading relative inline-block text-4xl uppercase font-bold [letter-spacing:-0.2px] text-black">
        Interesting Projects{" "}
        <span className="block w-24 h-1 absolute -bottom-1 left-0 transition-width duration-900 bg-black"></span>
      </h4>

      <div className="mt-8 h-auto flex">
        <ul className=" w-2/4 mt-0 list-none">
          {projects.map((project) => (
            <li
              key={project.title}
              className="project-item block my-12 mx-0 select-none"
            >
              <Link
                href=""
                className="project-link text-8xl uppercase font-bold [letter-spacing:-0.1px] text-black"
              >
                <span data-text="shop daisy" className="relative block">
                  {project.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="project-wrapper w-2/4 h-auto bg-indigo-600">
          {/* <div className='project-preview fixed w-0 bg-pink-700 bg-cover bg-no-repeat bg-top overflow-hidden'></div> */}
        </div>
      </div>
    </section>
  );
}
