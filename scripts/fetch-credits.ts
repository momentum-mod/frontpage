/**
 * Fetches the credits data from Google Sheets and converts to JSON used by
 * Astro static site generation.
 *
 * This script is *not* intended to be ran in CI; credits updates should be
 * commits to Git and reviewed before merging in case of vandalism.
 */

import * as fs from 'node:fs';
import Papa from 'papaparse';
import { CreditType } from '../src/components/credits/types.ts';

const Sources = {
  [CreditType.TEAM]:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7185y3UAgXH_sHrR98VXNXFoKIeBOhdSgFZS1dR9oi1eTR_rGEVsWXO_5sfidmdk0qlDxjMxKI1aj/pub?gid=0&single=true&output=csv',
  [CreditType.EMERITUS]:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7185y3UAgXH_sHrR98VXNXFoKIeBOhdSgFZS1dR9oi1eTR_rGEVsWXO_5sfidmdk0qlDxjMxKI1aj/pub?gid=1612846965&single=true&output=csv'
};

fs.writeFileSync(
  './src/components/credits/credits.json',
  JSON.stringify(
    Object.fromEntries(
      await Promise.all(
        Object.entries(Sources).map(
          async ([type, url]) =>
            await fetch(url)
              .then((res) => res.text())
              .then((text) => Papa.parse(text, { header: true }).data)
              .then((data) => [type, data])
        )
      )
    ),
    null,
    2
  )
);
