const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const { warning, info, success } = require('./log')

function isInGitRepository(appPath) {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore', cwd: appPath })
    return true
  } catch (e) {
    return false
  }
}

function isInMercurialRepository(appPath) {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore', cwd: appPath })
    return true
  } catch (e) {
    return false
  }
}

function tryGitInit(appPath) {
  try {
    execSync('git --version', { stdio: 'ignore', cwd: appPath })
    if (isInGitRepository(appPath) || isInMercurialRepository(appPath)) {
      return false
    }

    info('Trying to init git repo...\n')
    execSync('git init', { stdio: 'ignore', cwd: appPath })
    success('Git init successfully.\n')
    return true
  } catch (e) {
    warning(`Git repo not initialized: ${e}`)
    return false
  }
}

function tryGitCommit(appPath) {
  try {
    info('Commiting initial changes...\n')
    execSync('git add -A', { stdio: 'ignore', cwd: appPath })
    execSync('git commit -m "Initialize project using gm-cli"', {
      stdio: 'ignore',
      cwd: appPath
    })
    success('Commit successfully.\n')
  } catch (e) {
    warning(`Git commit not created ${e}`)
    console.log(`\nWe couldn't commit in already initialized git repo,`)
    console.log(`maybe the commit author config is not set.`)
    console.log(`In the future, we might supply our own committer`)
    console.log(`like Ember CLI does, but for now, let's just`)
    console.log('remove the Git files to avoid a half-done state.\n')
    info('Removing .git directory...\n')
    try {
      fs.rmSync(path.join(appPath, '.git'))
    } catch {
      // Ignored
    }
  }
}

module.exports = {
  tryGitInit,
  tryGitCommit
}
