#!/usr/bin/env node
import program from 'commander';
import genDiff from '../index.js';

program
  .version('1.0.0')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows difference')
  .option('-f, --format [type]', 'Output formats: standard, plain, json')
  .action((firstConfig, secondConfig) => (
    console.log(genDiff(firstConfig, secondConfig, program.format))
  ))
  .parse(process.argv)
