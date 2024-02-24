import React from "react";
import products from "./Productsdata";
import { Link } from 'react-router-dom'

function Products() {

    

    return (
        <div className="App">
            {/* <Slider /> */}
            <h1 className="mt-5 mb-5">Products</h1>

            <div className="container">
                <div className="row">
                    {
                        products.map(x => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                                    <div className="card" style={{ width: '16rem' }}>
                            
                                    <Link to={`/${x.id}`}>
                                        <img src={x.image} width={200} height={270} className="card-img-top" alt="..." />
                                    </Link>
                            
                                        <div className="card-body">
                                            {/* <h5 className="card-title">{x.title && x.title.length > 10 ? x.title.slice(0,10) + "..." : x.title}...</h5> */}
                                            {/* <h5 className="card-title">{x.title.slice(0,1)}...</h5> */}
                                            <h5 className="card-title">{x.title.slice(0,1)}...</h5>
                                            <p className="card-text">{x.description && x.description.length > 40 ? x.description.slice(0,70) + "..." : x.description}</p>
                                            <a href="#" className="btn btn-primary">Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products