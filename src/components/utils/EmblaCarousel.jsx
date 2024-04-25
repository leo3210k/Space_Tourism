import React, { useCallback } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './css/base.css'
import './css/embla.css'

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
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((person) => (
            <div className="embla__slide flex flex-col items-center" key={person}>
              <img className='h-56' src={person.src} alt={person.name} />
              <hr className='w-11/12 border-bright_gray'/>
              <div className='flex flex-col items-center mt-16'>
                <span className='font-bellefair text-lg text-white opacity-50 uppercase'>{person.title}</span>
                <span className='font-bellefair text-3xl text-white uppercase'>{person.name}</span>
                <span className='w-5/6 font-barlow text-lg text-center text-tropical_blue mt-4'>{person.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute inset-x-0 top-64">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
