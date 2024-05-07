import React, { useCallback } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './css/base.css'
import styles from './CrewCarousel.module.css'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className={`${styles.embla} relative`}>
      <div className={`${styles.embla__viewport}`} ref={emblaRef}>
        <div className={`${styles.embla__container}`}>
          {slides.map((person) => (
            <div className={`${styles.embla__slide} flex flex-col items-center lg:items-start`} key={person}>
              <img className='md:absolute h-56 lg:self-end md:h-[33.25rem] md:-bottom-[40.5rem] lg:-bottom-[38vh]' src={person.src} alt={person.name} />
              <hr className='md:hidden w-10/12 border-bright_gray'/>
              <div className='lg:w-7/12 flex flex-col items-center lg:items-start lg:gap-2 mt-16 md:mt-0 lg:mt-32'>
                <span className='font-bellefair text-base md:text-2xl lg:text-4xl text-white opacity-50 uppercase mb-1'>{person.title}</span>
                <span className='font-bellefair text-2xl md:text-4xl lg:text-6xl text-white uppercase'>{person.name}</span>
                <span className='w-5/6 md:w-4/6 lg:w-5/6 font-barlow text-base md:text-lg text-center lg:text-start text-tropical_blue md:leading-8 mt-3'>{person.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.embla__controls} absolute inset-x-0 top-64 md:top-[14.6rem]`}>
        <div className={`${styles.embla__dots}`}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.embla__dot}`.concat(
                index === selectedIndex ? ` ${styles.embla__dot_selected}` : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
