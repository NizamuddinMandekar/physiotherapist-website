import Image from "next/image";
import { GraduationCap, Hospital, Quote, Target } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

const PARAGRAPHS = [
  "Dr. Akshada Patil (PT) is a qualified physiotherapist who completed her BPTh from YMTCOP Navi Mumbai, affiliated with the prestigious Maharashtra University of Health Sciences (MUHS), Nashik, an NAAC A++ accredited university.",
  "With diverse clinical exposure across reputed healthcare institutions, including National Burns Centre (NBC), Medicover Hospital, Nanesh Hospital, NIEPID, and various recognised clinics, she has gained valuable experience in managing patients across multiple specialities and clinical settings, including both In-Patient Departments (IPD) and Out-Patient Departments (OPD).",
  "Her clinical journey has provided her exposure to patients with various disease conditions, age groups and rehabilitation needs, strengthening her approach towards patient assessment, individualised treatment planning and functional recovery.",
];

const POINTS = [
  {
    icon: GraduationCap,
    title: "BPTh, MUHS",
    description:
      "Graduated from YMTCOP Navi Mumbai, affiliated with MUHS Nashik, an NAAC A++ accredited university.",
  },
  {
    icon: Hospital,
    title: "Hospital-trained",
    description:
      "Clinical experience at National Burns Centre, Medicover, Nanesh Hospital and NIEPID, across IPD and OPD.",
  },
  {
    icon: Target,
    title: "Root-cause focus",
    description:
      "Individualised treatment plans that target the root cause, not just the symptoms, for lasting recovery.",
  },
];

const PHILOSOPHY =
  "Healing begins with understanding. My focus is on identifying the root cause of a problem rather than simply managing its symptoms, helping patients achieve sustainable recovery and regain their quality of life.";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-[22rem]">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="relative aspect-[784/1371] w-full overflow-hidden rounded-[2rem] border border-border shadow-xl">
            <Image
              src="/images/dr-akshada-about-v2.png"
              alt={`${SITE.doctorName} in her clinic scrubs`}
              fill
              sizes="(max-width: 1024px) 80vw, 32vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              About your physiotherapist
            </span>
            <h2 className="text-balance mt-3 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Care that meets you where recovery actually happens at home
            </h2>
          </Reveal>

          <div className="mt-5 max-w-xl space-y-4">
            {PARAGRAPHS.map((text, i) => (
              <Reveal key={i} delay={0.06 + i * 0.06}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={0.1 + i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-surface p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <point.icon size={19} />
                  </span>
                  <p className="mt-3.5 font-heading text-sm font-bold text-foreground">
                    {point.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.34}>
            <figure className="relative mt-5 rounded-2xl border border-border bg-surface p-6 pl-7 shadow-sm">
              <span className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-primary" />
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Quote size={17} />
              </span>
              <figcaption className="mt-3 text-xs font-bold uppercase tracking-widest text-primary">
                Her philosophy
              </figcaption>
              <blockquote className="mt-2 font-heading text-base font-semibold leading-relaxed text-foreground sm:text-lg">
                &ldquo;{PHILOSOPHY}&rdquo;
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
