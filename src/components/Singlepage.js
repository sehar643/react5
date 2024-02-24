import React from 'react'
import { useParams } from 'react-router-dom'
import products from './Productsdata'


const Singlepage = () => {

    let newId = useParams()

    let filterData = products.find(x => x.id == newId.pId)

  return (
    <div>
        <h1>Single Detail Page</h1>
        <div className='container'>
            <div className='row'>

                    <div className='col-lg-6'>
                        <img src={filterData.image} width={300} height={300}   />
                    </div>


                    <div className='col-lg-6'>
                        <h3 className='text-warning'>Name: {filterData.category.toUpperCase()}</h3>
                        <hr />
                        <h3>Name: {filterData.title}</h3>
                        <h3>Price: {filterData.price}</h3>
                    </div>
            </div>

        </div>

    </div>
  )
}

export default Singlepage