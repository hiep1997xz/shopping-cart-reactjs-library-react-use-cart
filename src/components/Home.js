import React from 'react'
import data from '../data'
import ItemCart from './ItemCart'

const Home = () => {
  console.log(data.productData)
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <ItemCart
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                key={item.id}
                item={item}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Home
