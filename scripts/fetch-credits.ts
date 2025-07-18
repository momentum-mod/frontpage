/**
 * Fetches the credits data from Google Sheets and converts to JSON used by
 * Astro static site generation.
 *
 * This script is *not* intended to be ran in CI; credits updates should be
 * commits to Git and reviewed before merging in case of vandalism.
 */

import * as fs from 'node:fs';
import Papa from 'papaparse';
import { type Credit } from '../src/components/credits/credit-types.ts';

const BaseUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7185y3UAgXH_sHrR98VXNXFoKIeBOhdSgFZS1dR9oi1eTR_rGEVsWXO_5sfidmdk0qlDxjMxKI1aj';
// Get from File -> Shared -> Publish to the web
const Gids = {
  Team: 0,
  Emeritus: 1612846965
};

// :)
fs.writeFileSync(
  './src/components/credits/credits.json',
  JSON.stringify(
    Object.groupBy(
      await Promise.all(
        Object.values(Gids).map(
          async (url) =>
            await fetch(`${BaseUrl}/pub?gid=${url}&single=true&output=csv`)
              .then((res) => res.text())
              .then((text) =>
                Papa.parse(text, { header: true })
                  .data.filter((item: Credit) => item.username)
                  .map((item: Credit) => ({
                    id: item.username.replace(' ', ''),
                    ...item
                  }))
              )
        )
      ).then((arr) => arr.flat()),
      ({ type }) => type
    ),
    null,
    2
  )
);
