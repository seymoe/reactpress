#!/usr/bin/env node

var sysPath = require('path')
var fs = require('fs')
var version = process.version
var versionDigit = Number(version.match(/\d+/)[0])
var cliFile = sysPath.join('lib', 'bin', 'cli.js')

var loadReactPress = function (path) {
  require(path)
}

// 全局安装的reactpress
var useGlobalReactPress = function () {
  fs.realpath(__dirname, function (err, real) {
    if (err) {
      throw err
    }
    loadReactPress(sysPath.join(real, '..', cliFile))
  })
}

useGlobalReactPress()