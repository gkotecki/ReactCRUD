import React from 'react';

class ProductItem extends React.Component {
	constructor(props){
		super(props);
		this.onDelete  = this.onDelete.bind(this);
	}

	onDelete(){
		this.props.onDelete(this.props.name);
	}

  render() {
	const {name, price} = this.props;

    return (
      <div >
        <span>{name}</span>
        {` | `}
        <span>{price}</span>
        {` | `}
        <button onClick={this.onDelete}>Delete</button>
      </div>
    );
  }
}

export default ProductItem;
