# Next.js Multi Zones
This is a standard next.js [feature](https://nextjs.org/docs/advanced-features/multi-zones) to allow hosting multiple apps based off of 1 root app.

## Demo app structure
There are 2 apps, search and care. Search will be our main **host** app. Both apps will be running on different ports. The Search `next.config.js` has all the interesting code to make this work.

### Demo startup
```bash
yarn start

# if you want better insight into which app is handling each request, run them in 2 terminal windows
yarn --cwd ./care dev
yarn --cwd ./search dev
```