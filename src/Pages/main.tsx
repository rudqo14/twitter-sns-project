import React from 'react';

type MainProps = {
  name: string;
  mark: string;
};

const Main = ({ name, mark }: MainProps) => {
  return (
    <div className='App'>
      Hello, {name} {mark}
    </div>
  );
};

Main.defaultProps = {
  name: 'routes',
  mark: '!',
};

export default Main;
