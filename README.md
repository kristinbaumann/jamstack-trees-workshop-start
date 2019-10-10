[![Netlify Status](https://api.netlify.com/api/v1/badges/55a26679-f7fc-4451-be23-df40e7907f74/deploy-status)](https://app.netlify.com/sites/jamstack-trees/deploys)

# JAMstack Trees :evergreen_tree: - Workshop Start

![Screenshot](https://raw.githubusercontent.com/kristinbaumann/jamstack-trees/master/screenshot.png)

## Why and What?

This project exemplarily shows the principle of the JAMstack with the beauty of trees :evergreen_tree: :deciduous_tree: :palm_tree:

See Live Version: https://jamstack-trees.netlify.com/

Definition of **JAMstack**:

> _"Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup."
> Source: https://jamstack.org/_

It is a small site combining content handling (statically rendered and served) and an ecommerce connection (dynamically during runtime).

So you can manage and update static content (here awesome tree images) with Contentful, see the result here: https://jamstack-trees.netlify.com/explore.

You can also (fake) plant a tree by doing a payment via Stripe, see the dynamic ecommerce section here: https://jamstack-trees.netlify.com/plant.

Used tools and services: Github, Gatsby, React, Contentful, GraphQL, Stripe, Netlify ...

## Setup

- Clone this repository: `git clone git@github.com:kristinbaumann/jamstack-trees-workshop-start.git`
- Go into the directory and install node modules: `yarn install`
- To start developing locally, run `gatsby develop`. Your site is on `http://localhost:8000`

The project is built on top of Gatsby's default starter. You can find more documentation here: https://github.com/gatsbyjs/gatsby-starter-default
