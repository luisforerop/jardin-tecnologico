import React, { FC, useEffect } from 'react'
import { IDiscount, IPriceRange } from '../ProductCard'
import { useState } from 'react'

type PriceProps = {
  priceRange: IPriceRange
  discounts?: IDiscount[]
}

export const Price: FC<PriceProps> = ({
  priceRange: { max, min },
  discounts,
}) => {
  const [maxMinPrice, setMaxMinPrice] = useState('')
  const [priceWithDiscount, setPriceWithDiscount] = useState('')

  useEffect(() => {
    setMaxMinPrice(`US$${max} ${min ? `- ${min}` : ''}`.trimEnd())
  }, [min, max])

  useEffect(() => {
    if (discounts?.length) {
      const { percentage: mainDiscount } =
        discounts.find(({ type }) => type === 'normal') ?? discounts[0]
      const priceWithDiscount = max - (max * mainDiscount) / 100
      setPriceWithDiscount(`${priceWithDiscount}`)
    }
  }, [discounts, max])

  if (!discounts?.length)
    return (
      <div>
        <span>{maxMinPrice}</span>
      </div>
    )

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
      }}
    >
      <span>{`US$${priceWithDiscount}`}</span>
      <span
        style={{
          fontSize: '12px',
          textDecoration: 'line-through',
        }}
      >
        {`US$${max}`}
      </span>
    </div>
  )
}
