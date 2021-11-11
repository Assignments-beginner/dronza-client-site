import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageAllOrders = () => {
  const [allorders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allorders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div>
      <h3 className="text-center text-uppercase mb-5">
        Manage All <strong style={{ color: "#ea3c23" }}>orders</strong>
      </h3>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">SL</th>
              <th className="text-center">Drone Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Ordered By</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {allorders.map((orders) => (
              <tr key={orders._id} orders={orders}>
                <td className="text-center">{orders.index}</td>
                <td className="text-center">{orders.singleProductName}</td>
                <td className="text-center">$ {orders.singleProductPrice}</td>
                <td className="text-center">{orders.userName}</td>
                <td className="text-center">{orders.bookedproductStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
