import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=80",
    alt: "Physiotherapist performing manual therapy on a patient's back",
    caption: "Manual therapy",
    className: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?auto=format&fit=crop&w=1200&q=80",
    alt: "Therapist guiding a patient through rehabilitation exercises with dumbbells",
    caption: "Guided rehab exercise",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1617952986600-802f965dcdbc?auto=format&fit=crop&w=1200&q=80",
    alt: "Patient receiving therapeutic treatment during a home session",
    caption: "Electrotherapy & recovery",
    className: "",
  },
];

export function SessionGallery() {
  return (
    <section className="relative py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            What a session looks like
          </span>
          <h2 className="text-balance mt-3 font-heading text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
            Real techniques, brought to your living room
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[260px]">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.caption}
              delay={i * 0.08}
              className={`group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border sm:aspect-auto sm:h-full ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-foreground backdrop-blur-sm">
                {item.caption}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
