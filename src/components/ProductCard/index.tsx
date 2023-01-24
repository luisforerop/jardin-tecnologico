import { FC } from 'react'
import { Price } from '../Price'

export interface IPriceRange {
  max: number
  min?: number
}

export interface IDiscount {
  type: 'cupon' | 'normal'
  percentage: number
}

export type ProductCardProps = {
  title: string
  description?: string
  discounts?: IDiscount[]
  rangePrice: IPriceRange
  seemsAcumulated: number
  versions: string[]
  images: string[]
}

export const ProductCard: FC<ProductCardProps> = ({
  images,
  rangePrice,
  seemsAcumulated,
  title,
  versions,
  description,
  discounts,
}) => {
  return (
    <article
      style={{
        display: 'flex',
        backgroundColor: '#FFFFFF',
        padding: '16px',
        gap: '8px',
        maxWidth: '885px',
      }}
    >
      <div
        style={{
          height: '160px',
          width: '160px',
          display: 'flex',
          minWidth: '160px',
        }}
      >
        <img
          src={images[0]}
          alt=""
          style={{ height: '160px', width: '160px', objectFit: 'cover' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '4px',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <h2>{title} </h2>
        {description && <p>{description}</p>}
        {discounts && (
          <div className="discouts">
            {discounts?.map(({ percentage, type }, index) => (
              <span
                key={`${index}-${type}.${percentage}%`}
                style={{
                  display: 'block',
                  padding: '0 8px',
                  color: '#00A650',
                  backgroundColor: '#82DBAD',
                  width: 'fit-content',
                  borderRadius: '4px',
                }}
              >
                {`${percentage}% off`}
              </span>
            ))}
          </div>
        )}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Price priceRange={rangePrice} discounts={discounts} />
          <div>{`Acumula ${seemsAcumulated} seems`}</div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '8px',
          }}
        >
          {versions.map((version, index) => (
            <span key={`${index}-${version}`}>{version}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
