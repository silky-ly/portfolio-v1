import Parallax from "@/utils/Parallax";

export function Role() {
  return (
    <section className="py-24">
      <Parallax baseVelocity={-5}>SOFTWARE ENGINEER</Parallax>
      <Parallax baseVelocity={5}>FRONTEND ENGINEER</Parallax>
    </section>
  );
}
