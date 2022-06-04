import Head from "next/head";
import { AwesomeLink } from "../components/AwesomeLink";
import { links } from "../data/links";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((link) => (
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
