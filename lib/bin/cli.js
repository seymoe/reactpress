#!/usr/bin/env node

const program = require('commander')
const packageJson = require('../../package.json')

program
  .version(packageJson.version)
  .usage(`[comman] [options]`)

// 新建项目命令
program
  .command(`new [rootPath] [starter]`)
  .description(`Create new reactpress project.`)
  .action((rootPath, starter) => {
    console.log(`new命令执行 ${rootPath} ${starter}`)
  })
  .parse(process.argv)

// 帮助命令
program.on(`--help`, () => {
  console.log(`To show subcommand help:
    reactpress [command] -h
  `)
})

program.parse(process.argv)