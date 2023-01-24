import { ProductCardProps } from '../../components'

export const useGetProducts = (): ProductCardProps[] => {
  return [
    {
      title: 'Template para gestión del tiempo',
      discounts: [{ type: 'normal', percentage: 100 }],
      images: [
        'https://in.canon/media/image/2021/09/25/30be26306419482888690cac6adb9de6_product_category_eosr3.png',
      ],
      rangePrice: { max: 10 },
      seemsAcumulated: 10,
      versions: ['Notion', 'pdf', 'fullpack'],
    },
    {
      title: 'Gestión de proyectos',
      description: 'Gestiona tus proyectos usando la metodología canvan.',
      discounts: [{ type: 'normal', percentage: 100 }],
      images: [
        'https://in.canon/media/image/2021/09/25/30be26306419482888690cac6adb9de6_product_category_eosr3.png',
      ],
      rangePrice: { max: 5 },
      seemsAcumulated: 5,
      versions: ['Notion'],
    },
    {
      title: 'Página principal para tu emprendimiento',
      description:
        'Organiza tu empresa y comunica la información más importante a tus colaboradores.',
      discounts: [],
      images: [
        'https://in.canon/media/image/2021/09/25/30be26306419482888690cac6adb9de6_product_category_eosr3.png',
      ],
      rangePrice: { max: 15 },
      seemsAcumulated: 15,
      versions: ['Notion'],
    },
  ]
}
