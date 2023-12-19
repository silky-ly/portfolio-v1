import Cursor from "@/components/ui/Cursor";
import { Contact, Home, Projects, Role } from "../_components";

export default function Page() {
  return (
    // <>
    <main className="relative">
      <Cursor />

      <Home />

      <Role />

      <Projects />

      <Contact />
    </main>
    // </>
  );
}
