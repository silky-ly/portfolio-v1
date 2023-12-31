import Link from "next/link";

const socials = [
  {
    title: "linkedIn",
    href: "https://www.linkedin.com/faith-amiekhame",
    icon: "",
  },
  {
    title: "Github",
    href: "https://www.github.com/silky-ly",
    icon: "",
  },
  {
    title: "Twitter",
    href: "https://www.twitter.com/daisy_sultry",
    icon: "",
  },
];

export function Contact() {
  return (
    <section className="h-screen relative">
      <div className="h-1/5 w-1/6 absolute top-16 left-12">
        <span className="mb-4 block text-xs uppercase font-semibold underline underline-offset-8 decoration-2">
          contact
        </span>

        <div className="flex flex-col gap-3 justify-between">
          {socials.map((social) => (
            <Link
              key={social.title}
              href={social.href}
              target="_blank"
              className="text-xl font-bold capitalize"
            >
              {social.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
