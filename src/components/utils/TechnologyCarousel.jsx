import React, { useCallback } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./css/base.css";
import styles from "./TechnologyCarousel.module.css";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className={`${styles.embla} relative`}>
      <div className={`${styles.embla__viewport}`} ref={emblaRef}>
        <div className={`${styles.embla__container}`}>
          {slides.map((technology) => (
            <div
              className={`${styles.embla__slide} flex flex-col lg:flex-row items-center`}
              key={technology}
            >
              <img
                className="h-56 md:h-80 md:w-full lg:w-[32.2rem] lg:h-[32.3rem] lg:order-1"
                src={
                  window.innerWidth < "1024"
                    ? technology.src_landscape
                    : technology.src_portrait
                }
                alt={technology.name}
              />
              <div className="flex flex-col items-center lg:items-start md:gap-2 mt-20 md:mt-36 lg:mt-0 lg:ml-32">
                <span className="font-barlow text-sm md:text-base text-tropical_blue tracking-widest uppercase mb-1">
                  THE TERMINOLOGY…
                </span>
                <span className="font-bellefair text-2xl md:text-4xl lg:text-6xl text-white uppercase">
                  {technology.name}
                </span>
                <span className="w-5/6 md:w-3/6 font-barlow text-base md:text-lg text-center lg:text-start text-tropical_blue md:leading-8 mt-3">
                  {technology.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${styles.embla__controls} absolute inset-x-0 top-[15.5rem] md:top-[22.8rem] lg:inset-x-auto lg:top-[6.6rem]`}
      >
        <div className={`${styles.embla__dots}`}>
          {scrollSnaps.map((_, index) => {
            return (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`${styles.embla__dot} font-bellefair md:text-2xl lg:text-3xl`.concat(
                  index === selectedIndex
                    ? ` ${styles.embla__dot_selected}`
                    : ""
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
