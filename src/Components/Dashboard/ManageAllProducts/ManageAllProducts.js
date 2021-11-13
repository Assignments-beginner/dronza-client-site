import React from "react";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://morning-badlands-81993.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h3 className="text-center text-uppercase">
        Manage All <span className="text-danger">Products</span>
      </h3>
      <h5 className="text-center text-uppercase mt-3 mb-4">
        Total <strong className="text-danger">{products.length}</strong> product
      </h5>
      <div>
        <Table bordered hover>
          <thead className="text-uppercase">
            <tr>
              <th className="text-center p-3">Product Name</th>
              <th className="text-center p-3">Price</th>
              <th className="text-center p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} product={product}>
                <td className="text-center">{product.productName}</td>
                <td className="text-center">{product.productPrice}</td>
                <td className="text-center">
                  <div className="text-center">
                    <Button
                      //   onClick={() => deleteHandler(product._id)}
                      variant="danger w-75"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAllProducts;
