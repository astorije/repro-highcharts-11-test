# Reproduction case for a test issue with Highcharts v11

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## Setup

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Using Highcharts v10, this test runs fine. However, using Highcharts v11, the chart points are not rendered in tests, so the same test fails with:

```
 FAIL  src/App.test.js
  ✕ renders (1285 ms)

  ● renders

    Unable to find role="img" and name "x, 1, 2."

[...]
```

You can run the same test on the [`v11`](https://github.com/astorije/repro-highcharts-11-test/compare/v11) branch to compare the output.
