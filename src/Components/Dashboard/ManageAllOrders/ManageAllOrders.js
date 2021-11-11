import React from "react";
import { Table } from "react-bootstrap";

const ManageAllOrders = () => {
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
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">Mark</td>
              <td className="text-center">$</td>
              <td className="text-center">@mdo</td>
              <td className="text-center">@mdo</td>
            </tr>            
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
