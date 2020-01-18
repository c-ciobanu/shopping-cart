import React, { useState } from "react";

import AddItemIcon from "components/AddItemIcon";

function Home() {
	const [products, setProducts] = useState([]);

	const handleSubmit = (value) => {
		setProducts(products.concat(value));
	};

	return (
		<>
			<AddItemIcon title="Add list" placeholder="List name" onSubmit={handleSubmit} />

			{products.map((product) => (
				<p>{product}</p>
			))}
		</>
	);
}

export default Home;
