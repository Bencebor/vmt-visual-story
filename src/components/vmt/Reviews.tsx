import { Star } from "lucide-react";
import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { Carousel } from "./Carousel";
import { REVIEWS, type Review } from "@/data/site";

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-sm border border-hairline bg-surface p-7 transition-colors duration-500 hover:border-border">
      <div>
        <div
          className="flex gap-1"
          aria-label={`${review.rating} csillag az 5-ből`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              aria-hidden="true"
              className={
                i < review.rating
                  ? "h-4 w-4 fill-primary text-primary"
                  : "h-4 w-4 text-border"
              }
            />
          ))}
        </div>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          {review.text}
        </p>
      </div>
      <footer className="mt-8 border-t border-hairline pt-5">
        <p className="font-display text-sm font-semibold">{review.name}</p>
        {review.company && (
          <p className="mt-0.5 text-xs text-muted-foreground">
            {review.company}
          </p>
        )}
      </footer>
    </article>
  );
}

export function Reviews() {
  return (
    <Section>
      <Reveal>
        <SectionHead
          eyebrow="Vélemények"
          title="Ügyfeleink mondták."
          text="Az alábbi kártyák egyelőre helykitöltők – a valós Google értékelések hamarosan ide kerülnek."
        />
      </Reveal>

      <Reveal delay={100} className="mt-14">
        <Carousel
          ariaLabel="Vélemények"
          itemClassName="w-[80vw] sm:w-[340px] lg:w-[380px]"
        >
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </Carousel>
      </Reveal>
    </Section>
  );
}
