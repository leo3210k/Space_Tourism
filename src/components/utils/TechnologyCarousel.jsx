import React, { useCallback } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './css/base.css'
import styles from './TechnologyCarousel.module.css'

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
          {slides.map((technology) => (
            <div className={`${styles.embla__slide} flex flex-col items-center`} key={technology}>
              <img className='h-56' src={technology.src} alt={technology.name} />
              <div className='flex flex-col items-center mt-16'>
                <span className='font-barlow text-sm text-tropical_blue opacity-50 uppercase'>THE TERMINOLOGY…</span>
                <span className='font-bellefair text-2xl text-white uppercase'>{technology.name}</span>
                <span className='w-5/6 font-barlow text-base text-center text-tropical_blue mt-4'>{technology.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.embla__controls} absolute inset-x-0 top-60`}>
        <div className={`${styles.embla__dots}`}>
          {scrollSnaps.map((_, index) => {
            const number = ['1', '2', '3']
            return(
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`${styles.embla__dot} font-bellefair after:content-['${index}']`.concat(
                  index === selectedIndex ? ` ${styles.embla__dot_selected}` : ''
                )}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
