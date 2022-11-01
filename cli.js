#!/usr/bin/env node

import moment from 'moment-timezone';
import fetch from 'node-fetch';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

if (args.h != undefined) {
    console.log('Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE');
    console.log('    -h            Show this help message and exit.');
    console.log('    -n, -s        Latitude: N positive; S negative.');
    console.log('    -e, -w        Longitude: E positive; W negative.');
    console.log('    -z            Time zone: uses tz.guess() from moment-timezone by default.');
    console.log('    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.');
    console.log('    -j            Echo pretty JSON from open-meteo API and exit');
    process.exit(0);
}

// Make a request
const response = await fetch('URL_GOES_HERE');

// Get the data from the request
const data = await response.json();


// Response text
const days = args.d 

if (days == 0) {
  console.log("today.")
} else if (days > 1) {
  console.log("in " + days + " days.")
} else {
  console.log("tomorrow.")
}