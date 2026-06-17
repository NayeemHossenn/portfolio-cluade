import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** Two-digit index, e.g. "01". */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

/**
 * The repeating section header: a numbered system tag, a big title,
 * and an optional supporting line. Keeps every section visually anchored.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <Reveal>
        <span className="eyebrow">
          <span className="text-muted">{index}</span>
          <span className="h-px w-8 bg-signal-500/40" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-paper sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
