import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">
          Description
        </div>
        <div className="description-nav-box fade">
          Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the Internet. It allows businesses and individuals to conduct electronic transactions, including online purchases and payments. E-commerce websites have become increasingly popular as they provide a convenient and efficient way for people to shop without the need to visit physical stores.</p>
        <p>
          E-commerce websites typically display products or services along with detailed sexription images,prices, and any available variations(e.g. sizes,colors).Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
