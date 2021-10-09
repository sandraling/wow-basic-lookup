import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const App = () => {
    const react: string = "React";
    const typescript: string = "TypeScript";

    return (
        <h1>
            Hello {react} + {typescript}
        </h1>
    );
};

if (document.getElementById('app')) {
    ReactDOM.render(
      <App />, 
      document.getElementById('app')
    );
}