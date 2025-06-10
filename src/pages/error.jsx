import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from "antd";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (

    <Result
      status="403"
      title="Oops!"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
}
