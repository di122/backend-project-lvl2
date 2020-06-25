#!/usr/bin/env node

import program from 'commander';

program
  .version('1.0.0')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows difference')
  .option('-f, --format [type]', 'Output formats: standard, plain, json')
  .parse(process.argv)
