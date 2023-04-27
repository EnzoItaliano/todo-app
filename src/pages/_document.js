import { Html, Head, Main, NextScript } from 'next/document'
import { Provider } from 'react-redux';
import store from '../store';

export default function Document() {
  return (
    <Provider store={store}>
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </Provider>
  )
}
