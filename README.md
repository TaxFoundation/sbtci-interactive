# SBTCI Interactive

This was the first React app I ever wrote, so the structure and build process are weird. Should redo the whole thing like the [International Index](https://github.com/TaxFoundation/itci-interactive/).

So the way this site works is, the build process spits out static pages for each possible URL for SEO purposes. But each of these pages is the entire app, and further navigating just uses React Router to move around the SPA. Bonkers, yes, but it's worked so far. Rewrite this in Gatsby if you feel bothered enough by it.

## Getting Started

Make sure node/npm are installed.

Clone this repository. Then from the command line in the repo directory:

`yarn install`

`yarn start`

You'll now have the project running at localhost:3000.

## Data Updates

Get the master Excel file from the State Team and run it through the [sbtci-data](https://github.com/TaxFoundation/sbtci-data) scraper. Make sure you also get a copy of the previous year's data that's been backcasted. Then copy the `data.min.json` file it produces here to `src/data` and replace `SBTCI.json` with this new file.

Be sure to also update the year value in several locations--just run `grep -rl "{{the_year}}" ./src` to find all instances.

Update `notable.json` with any new notable changes and `blurbs.json` with any custom twitter sharing text.

## Deploy Changes

This site is hosted on Netlify, which will auto-deploy anything pushed to `master`. Keep updates in a dev branch until ready to publish, then merge via pull request like an upstanding citizen.