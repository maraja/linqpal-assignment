import React from "react";

import {
  Link
} from "react-router-dom";

import CentreContainer from '../Shared/CentreContainer'


const Home = ({}) => {
  return (
    <CentreContainer>
      <h1><Link to="/admin">Admin</Link>{' | '} 
      <Link to="/external">External</Link></h1>
    </CentreContainer>
  )
};

export default Home;
