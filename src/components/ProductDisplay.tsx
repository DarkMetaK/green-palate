import Image from "next/image";

import { ProductDisplayContainer } from "@/styles/components/ProductDisplay";

interface IProductDisplay {
  productLink: string,
  productImage: string,
  productName: string,
  price: number
}

function convertPrice(cents: number) {
  const reais = cents / 100
  return reais.toLocaleString('default', {
    style: 'currency',
    currency: 'BRL'
  })
}

export function ProductDisplay({
  productLink,
  productImage,
  productName,
  price
}: IProductDisplay) {
  return (
    <ProductDisplayContainer href={productLink}>
      <Image
        src={productImage}
        alt=''
        height={200}
        width={260}
      />
      <div>
        <p>{productName}</p>
        <span>{convertPrice(price)}</span>        
      </div>
    </ProductDisplayContainer>
  )
}