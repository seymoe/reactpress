#!/usr/bin/env node

const program = require('commander')
const packageJson = require('../../package.json')

program
  .version(packageJson.version)
  .usage(`[comman] [options]`)
  .parse(process.argv)