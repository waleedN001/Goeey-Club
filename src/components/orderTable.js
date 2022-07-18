import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function OrdersTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.orders.map(
            (order) => (
              <TableRow
                key={order.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.id}
                </TableCell>
                <TableCell align="left">{order.line_items[0].name}</TableCell>
                <TableCell align="left">
                  {order.line_items[0].quantity}
                </TableCell>
              </TableRow>
            )
            // order.line_items.map((line_item, i) => {
            //   <TableRow
            //     key={order.id}
            //     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            //   >
            //     <TableCell component="th" scope="row">
            //       {order.id}
            //     </TableCell>
            //     <TableCell align="left">{line_item.name}</TableCell>
            //     <TableCell align="left">{line_item.quantity}</TableCell>
            //   </TableRow>;
            // })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
