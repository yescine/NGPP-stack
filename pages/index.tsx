import Head from "next/head";
import { AwesomeLink } from "../components/AwesomeLink";
import { links } from "../data/links";
import { gql, useQuery } from "@apollo/client";

const AllLinksQ = gql`
  query {
    links {
      id
      title
      url
      imageUrl
      category
      description
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(AllLinksQ);

  if (loading) return <p>...loading</p>;
  if (error) return <p>...someting went wrong{error.message}</p>;

  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.links.map((link) => (
            <AwesomeLink
              id={link.id}
              title={link.title}
              url={link.url}
              description={link.description}
              imageUrl={link.imageUrl}
              category={link.category}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
