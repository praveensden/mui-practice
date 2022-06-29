import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
const tableData = [
  {
    id: 1,
    first_name: "Hendrik",
    last_name: "Mercer",
    email: "hmercer0@hc360.com",
    gender: "Male",
    ip_address: "92.164.146.233",
  },
  {
    id: 2,
    first_name: "Portie",
    last_name: "Coultous",
    email: "pcoultous1@prlog.org",
    gender: "Male",
    ip_address: "89.109.33.129",
  },
  {
    id: 3,
    first_name: "Moise",
    last_name: "Domican",
    email: "mdomican2@arstechnica.com",
    gender: "Male",
    ip_address: "9.0.161.128",
  },
  {
    id: 4,
    first_name: "Joelynn",
    last_name: "Algate",
    email: "jalgate3@nyu.edu",
    gender: "Female",
    ip_address: "125.154.22.183",
  },
  {
    id: 5,
    first_name: "Peri",
    last_name: "Roser",
    email: "proser4@nasa.gov",
    gender: "Female",
    ip_address: "89.27.153.243",
  },
  {
    id: 6,
    first_name: "Debra",
    last_name: "Huton",
    email: "dhuton5@hud.gov",
    gender: "Female",
    ip_address: "41.1.52.254",
  },
  {
    id: 7,
    first_name: "Boycie",
    last_name: "Cordingly",
    email: "bcordingly6@about.com",
    gender: "Male",
    ip_address: "167.26.201.243",
  },
  {
    id: 8,
    first_name: "Vlad",
    last_name: "Gehring",
    email: "vgehring7@xrea.com",
    gender: "Male",
    ip_address: "111.91.64.133",
  },
  {
    id: 9,
    first_name: "Renato",
    last_name: "Rocca",
    email: "rrocca8@netvibes.com",
    gender: "Male",
    ip_address: "178.163.255.21",
  },
  {
    id: 10,
    first_name: "Geneva",
    last_name: "Crother",
    email: "gcrother9@slashdot.org",
    gender: "Non-binary",
    ip_address: "205.183.147.255",
  },
];
interface IMuiTableProps {}

const MuiTable: React.FunctionComponent<IMuiTableProps> = (props) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>IP Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map(
              ({ id, first_name, last_name, gender, email, ip_address }) => {
                return (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{first_name}</TableCell>
                    <TableCell>{last_name}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{gender}</TableCell>
                    <TableCell>{ip_address}</TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MuiTable;
