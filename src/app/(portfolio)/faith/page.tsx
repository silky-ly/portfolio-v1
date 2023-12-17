import { Contact, Home, Projects, Role } from "../_components";

export default function Page() {
  return (
    <main className="relative">
      <Home />

      <Role />

      <Projects />

      <Contact />
    </main>
  );
}
