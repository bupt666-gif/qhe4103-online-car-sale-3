import { FEATURED_CARS } from './homeContent'

function InventoryVisual({ car, variant }) {
  return (
    <figure className={`inventory-runway__media inventory-runway__media--${variant}`}>
      <img
        className={`inventory-runway__image inventory-runway__image--${variant}`}
        src={car.image}
        alt={`${car.title} exterior preview`}
        loading="lazy"
      />
    </figure>
  )
}

export default function CuratedInventory() {
  return (
    <section id="inventory" className="home-band">
      <div className="shell-container">
        <div className="scroll-reveal mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#00a6c8]">Featured Inventory</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">
              Selected to feel like a collection, not a classifieds wall.
            </h2>
          </div>
        </div>

        <div className="inventory-runway scroll-reveal">
          {FEATURED_CARS.map((car, index) => (
            <article key={car.title} className="inventory-runway__item">
              <InventoryVisual car={car} variant={index} />
              <div className="inventory-runway__copy">
                <p className="inventory-runway__meta">{car.meta}</p>
                <h3>{car.title}</h3>
                <p>{car.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
