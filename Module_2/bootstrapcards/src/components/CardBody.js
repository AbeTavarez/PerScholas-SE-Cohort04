import React from 'react'
import Button from './Button'

const CardBody = () => {
  return (
    <div className="card-body">
        <h5 className="card-title">Card 1</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button />
      </div>
  );
};

//export the component
export default CardBody