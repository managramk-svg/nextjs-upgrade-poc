import Error from "next/error";

function ErrorPage({ statusCode }: { statusCode: number }) {
  return (
    <p>
      {statusCode ? (
        <Error statusCode={statusCode} />
      ) : (
        "An error occurred on client"
      )}
    </p>
  );
}

ErrorPage.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
