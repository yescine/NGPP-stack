const BackendURL = process.env.BackendURL
  ? `${process.env.BackendURL}/api/graphql`
  : "http://localhost:3000/api/graphql";
export { BackendURL };
