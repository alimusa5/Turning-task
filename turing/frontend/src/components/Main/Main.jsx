import React, { useEffect, useState } from "react";
import "./main.css";
import Topbar from "../../components/Topbar/Topbar.jsx";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Card, Typography } from "@mui/material";

function Main() {
  const [calldata, setCalldata] = useState([]);
  const [tokendata, setTokendata] = useState("");
  useEffect(async () => {
    axios
      .get("https://frontend-test-api.aircall.io/calls", {
        headers: {
          Authorization: tokendata,
        },
      })
      .then((res) => {
        setCalldata(res.data.nodes);
        console.log(res.data.nodes);
        /*const durations = calldata.map((call) => call.duration);
        console.log(durations);
        console.log(tokendata);*/
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tokendata]);
  useEffect(async () => {
    axios
      .post("https://frontend-test-api.aircall.io/auth/login", {
        username: "Ali Musa",
        password: "123",
      })
      .then((res) => {
        console.log(res.data.access_token);
        console.log("hi call" + calldata);
        setTokendata("Bearer " + res.data.access_token);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <Topbar />
      {/*<div className="homeContainer"></div>*/}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              {/*{exam.subject} Marks, Class {exam.classId.classYear}*/}
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", pb: 1, width: "100%" }}>
          <TableContainer sx={{ overflowX: "scroll" }} component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Call Type</StyledTableCell>
                  <StyledTableCell align="right">Direction</StyledTableCell>
                  <StyledTableCell align="right">Duration</StyledTableCell>
                  <StyledTableCell align="right">From</StyledTableCell>
                  <StyledTableCell align="right">To</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {calldata.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.call_typed}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.direction}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.duration}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.obtainedMarks}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.percentage}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
