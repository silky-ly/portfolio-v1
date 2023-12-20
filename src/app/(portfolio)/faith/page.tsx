import { Contact, Home, Projects, Role } from "../_components";
import { Cursor } from "@/components/ui";

export default function Page() {
  return (
    <main className="relative">
      <Cursor />
      <Home />

      <Role />

      <Projects />

      <Contact />
    </main>
  );
}
