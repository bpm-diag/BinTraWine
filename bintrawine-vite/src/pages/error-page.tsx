import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import Header from '@/components/header';
import { _default as Layout } from '@/layout';

const ErrorPage = () => {
  const error = useRouteError();

  const renderError = () => {
    if (isRouteErrorResponse(error)) {
      return (
        <div className="place-items-center container">
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                marginBlockEnd: '0',
              }}
            >
              Oops!
            </h2>
            <h1
              style={{
                fontSize: 'clamp(1.5rem, 35vw + 1rem, 15rem)',
                marginBlockEnd: '0',
                lineHeight: '1',
              }}
            >
              {error.status}
            </h1>
            <p>{error.statusText}</p>
            {error.data?.message && (
              <p>
                <i>{error.data.message}</i>
              </p>
            )}
          </div>
        </div>
      );
    }

    if (error instanceof Error) {
      <div className="place-items-center container">
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              marginBlockEnd: '0',
            }}
          >
            Oops! Unexpected Error
          </h2>
          <p>Something went wrong.</p>
          <p>
            <i>{error.message}</i>
          </p>
        </div>
      </div>;
    } else {
      return <h1>Something went wrong.</h1>;
    }
  };

  return (
    <Layout header={(prop) => <Header {...prop} />} footer={() => <h1>Footer</h1>}>
      {renderError()}
    </Layout>
  );
};

export default ErrorPage;
