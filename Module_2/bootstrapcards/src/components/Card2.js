import React from 'react'

const Card2 = () => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img
          src="https://images.unsplash.com/photo-1498712964741-5d33ab9e5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=600"
         className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  )
}

export default Card2