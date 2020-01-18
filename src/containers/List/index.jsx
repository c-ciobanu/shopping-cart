import React, { useState } from "react";

import FormInput from "components/FormInput";

function List() {
	const [products, setProducts] = useState([]);

	const handleSubmit = (value) => {
		setProducts(products.concat(value));
	};

	return (
		<>
			<FormInput onSubmit={handleSubmit} placeholder="Add item" />

			{products.map((product) => (
				<p>{product}</p>
			))}
		</>
	);
}

export default List;
