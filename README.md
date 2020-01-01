# Gatsby Browser Globals Example

This repository demonstrates the use of a browser global (`_`) in the Gatsby starter application.

There are two steps required to add this to your existing Gatsby app:

1. Add the `_` global to Gatsby's Webpack configuration via the [`provide`](https://webpack.js.org/plugins/provide-plugin/) plugin.

    In this example, a local plugin `gatsby-plugin-browser-globals` was created and configured via `gatbsy-config.js`.

    ```
    // gatsby-config.js
    {
      resolve: 'gatsby-plugin-browser-globals',
      options: {
        globals: {
          _: 'lodash'
        }
      }
    }
    ```

1. Override the default ESLint configuration as described in [the Gatsby docs](https://www.gatsbyjs.org/docs/eslint/#how-to-use-eslint). 

    First, run `yarn add --dev eslint-config-react-app` to install the `react-app` ESLint configuration.

    Then, copy the following into an `.eslintrc` file:

    ```
    {
      "globals": {
        "_": true
      },
      "extends": "react-app"
    }
    ```

Now, you can use `_` without explicitly importing it into your application. (See `pages/index.js` for an example.)