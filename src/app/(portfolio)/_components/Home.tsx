import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/icons";

export function Home() {
  return (
    <section className="w-screen h-screen relative grid sm:grid-cols-6">
      <div className="col-span-4 relative">
        <p className="w-2/5 h-auto absolute left-56 top-36">
          <span className="mb-3 block uppercase text-xs font-semibold underline decoration-2 underline-offset-8">
            bio
          </span>

          <span className="block text-xs font-medium leading-4">
            A versatile and vibrant Software Engineer dedicated to delivering
            exceptional user experiences through outstanding work.
          </span>
        </p>
      </div>

      <div className="col-span-2 flex justify-center items-center">
        <div className="w-3/4 h-3/4 relative">
          <Image
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1504802318913-d3f9a487448c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            width={500}
            height={500}
            quality={100}
            alt="image"
          />

          <div className="absolute bottom-[-50px] right-0">
            <Link
              href=""
              className="text-xs uppercase font-semibold align-middle cursor-pointer [letter-spacing:-0.4px] text-black"
            >
              get in touch <Icons.arrowDown />
            </Link>
          </div>
        </div>
      </div>

      <div className="h-screen absolute left-[66%] top-0 border-l-0.5 border-solid border-black"></div>
      <div className="absolute w-[66vw] top-[50%] border-b-0.5 border-solid border-black"></div>
    </section>
  );
}
