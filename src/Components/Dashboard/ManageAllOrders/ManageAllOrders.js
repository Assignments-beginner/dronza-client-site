import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ManageAllOrders = () => {
  const [allorders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allorders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this order?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/myorders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingOrders = allorders.filter(
              (orders) => orders._id !== id
            );
            console.log(remainingOrders);
            setAllOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <h3 className="text-center text-uppercase">
        Manage All <strong style={{ color: "#ea3c23" }}>orders</strong>
      </h3>
      <h5 className="text-center text-uppercase mt-3 mb-4">
        Total <strong style={{ color: "#ea3c23" }}>{allorders.length}</strong>{" "}
        orders
      </h5>
      <div>
        <Table bordered hover>
          <thead className="text-uppercase">
            <tr>
              <th className="text-center p-3">SL</th>
              <th className="text-center p-3">Drone Name</th>
              <th className="text-center p-3">Price</th>
              <th className="text-center p-3">Ordered By</th>
              <th className="text-center p-3">Status</th>
              <th className="text-center p-3">Approve / Cancel</th>
            </tr>
          </thead>
          <tbody>
            {allorders.map((orders) => (
              <tr key={orders._id} orders={orders}>
                <td className="text-center"></td>
                <td className="text-center">{orders.singleProductName}</td>
                <td className="text-center">$ {orders.singleProductPrice}</td>
                <td className="text-center">{orders.userName}</td>
                <td className="text-center">{orders.bookedproductStatus}</td>
                <td className="text-center">
                  <div className="d-flex">
                    <Button variant="outline-success w-100 me-2" size="sm">
                      Approve
                    </Button>
                    <Button
                      onClick={() => deleteHandler(orders._id)}
                      variant="danger w-100"
                      size="sm"
                    >
                      Cancel
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

export default ManageAllOrders;
