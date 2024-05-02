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
            <div className={`${styles.embla__slide} flex flex-col items-center`} key={person}>
              <img className='h-56 order-1' src={person.src} alt={person.name} />
              <hr className='md:hidden w-10/12 border-bright_gray'/>
              <div className='flex flex-col items-center mt-16'>
                <span className='font-bellefair text-base text-white opacity-50 uppercase mb-1'>{person.title}</span>
                <span className='font-bellefair text-2xl text-white uppercase'>{person.name}</span>
                <span className='w-5/6 font-barlow text-base text-center text-tropical_blue mt-3'>{person.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.embla__controls} absolute inset-x-0 top-64`}>
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
