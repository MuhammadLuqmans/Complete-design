import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import GrillsHeader from "../Components/GrillComponents/GrillsHeader";
import GrillsPageLayout from "../Components/GrillComponents/GrillsPageLayout";

const myStyles = makeStyles((theme) => ({
  
}));

const Grills = () => {
  const classes = myStyles()
  
  return (
    <div>
      <GrillsHeader />
      <GrillsPageLayout />
    </div>
  );
};

export default Grills;
