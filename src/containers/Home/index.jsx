import React, { useState } from "react";

import AddItemIcon from "components/AddItemIcon";
import Lists from "components/Lists";

function Home() {
	const [products, setProducts] = useState([]);

	const handleSubmit = (value) => {
		setProducts(products.concat(value));
	};

	return (
		<>
			<Lists options={products} onDelete={(option) => console.log(`Delete ${option}`)} />

			<AddItemIcon title="Add list" placeholder="List name" onSubmit={handleSubmit} />
		</>
	);
}

export default Home;
