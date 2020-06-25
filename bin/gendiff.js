#!/usr/bin/env node

import program from 'commander';

program
  .description('Compares two configuration files and shows difference')
  .option('-f, --format [type]', 'Output format')
  .version('1.0.0')
  .parse(process.argv)
