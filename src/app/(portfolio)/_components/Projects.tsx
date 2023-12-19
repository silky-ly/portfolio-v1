import Link from "next/link";

const projects = [
  {
    title: "shop daisy",
    text: "shop daisy",
    url: "https://images.unsplash.com/photo-1691036562463-a44e242a8ec8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
  },
  {
    title: "portfolio",
    text: "portfolio",
    url: "https://images.unsplash.com/photo-1702472499934-750bfd53dbe1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "e-commerce",
    text: "e-commerce",
    url: "https://images.unsplash.com/photo-1698675773827-c8dd95425962?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
  },
  {
    title: "tic-tac-toe",
    text: "tic-tac-toe",
    url: "https://plus.unsplash.com/premium_photo-1688125414593-391cf90f3103?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
  },
];

export function Projects() {
  return (
    <section className="h-screen pt-5 px-12 text-foreground">
      <h4 className="group relative inline-block text-4xl uppercase font-bold [letter-spacing:-0.2px] cursor-pointer">
        Interesting Projects{" "}
        <span className="block w-24 h-1 absolute -bottom-1 left-0 transition-width duration-700 bg-foreground group-hover:w-4/5"></span>
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
                className="project-link text-8xl uppercase font-bold [letter-spacing:-0.1px] text-foreground"
              >
                <span data-text="shop daisy" className="relative block">
                  {project.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="project-wrapper w-2/4 h-auto bg-indigo-600"></div>
      </div>
    </section>
  );
}
