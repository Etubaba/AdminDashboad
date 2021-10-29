import React from 'react'
import '../Styles/Orders.css'

export default function Tabledata() {
    return (
        <div>
            <table className='tabula'>
                <tr id="table-heading">
                    <th>item</th>
                    <th>Qty</th>
                    <th>price</th>
                    <th>price total</th>
                </tr>
                <tr>
                    <td id="food-img">
                        <div>
                            <img src="https://gravatar.com/avatar/08d92f9d822d8fc29efda638ef171114?s=400&d=robohash&r=x" alt="food" />
                        </div>
                        <div>
                            MAIN COURSE
                            <p>chicken cury specials with juice</p>
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                            <i className="far fa-star"></i>

                        </div>
                    </td>
                    <td>
                        <p>3x</p>

                    </td>
                    <td>
                        <p>$10.00</p>
                    </td>
                    <td id="x-icon">
                        $10.00
                        <i className="fas fa-times"></i>

                    </td>
                </tr>
                <tr>
                    <td id="food-img">
                        <div>
                            <img src="https://robohash.org/e0a2ad0dd6c910a6cd3409925b7a3e5e?set=set4&bgset=&size=400x400" alt="food" />
                        </div>
                        <div>
                            MAIN COURSE
                            <p>chicken cury specials with juice</p>
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                            <i className="far fa-star"></i>

                        </div>
                    </td>
                    <td>
                        <p>3x</p>

                    </td>
                    <td>
                        <p>$10.00</p>
                    </td>
                    <td id="x-icon">
                        $10.00
                        <i className="fas fa-times"></i>

                    </td>
                </tr>
                <tr>
                    <td id="food-img">
                        <div>
                            <img src="https://robohash.org/e0a2ad0dd6c910a6cd3409925b7a3e5e?set=set4&bgset=&size=400x400" alt="food" />
                        </div>
                        <div>
                            MAIN COURSE
                            <p>chicken cury specials with juice</p>
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                            <i className="far fa-star"></i>

                        </div>
                    </td>
                    <td>
                        <p>3x</p>

                    </td>
                    <td>
                        <p>$10.00</p>
                    </td>
                    <td id="x-icon">
                        $10.00
                        <i className="fas fa-times"></i>

                    </td>
                </tr>

            </table>
        </div>
    )
}
