import React from "react";

const Home = (props) => {
  const { user } = props;
  if (!user) return null;
  return <>{JSON.stringify(user)}</>;
};

export default Home;
