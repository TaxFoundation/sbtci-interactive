# SBTCI Interactive

Make sure you install node/npm and python. Also install yarn with `npm i -g yarn` and AWS CLI with `pip install awscli`. You'll need to configure your AWS credentials with the SBTCI user info in LastPass at `~/.aws/credentials`

## Getting Started

Clone this repository. Then from the command line in the repo directory:

`yarn install`

`yarn start`

You'll now have the project running at localhost:3000.

## Deploy Changes

From the repo directory, run:

`yarn run deploy`

This will build all assets, create static pages for all routes, upload everything to an AWS S3 bucket, and create CloudFront invalidations.