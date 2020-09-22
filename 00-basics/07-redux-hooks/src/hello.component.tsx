import * as React from "react";

interface Props {
  username: string;
}

export const HelloComponent = (props: Props) => {
  const { username } = props;

  return <h2 key={username}>Hello {username} !</h2>;
};
