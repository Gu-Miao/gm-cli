#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const { Command } = require('commander')
const inquirer = require('inquirer')
const download = require('download-git-repo')
const ora = require('ora')
const pkg = require('./package.json')
const { warning, error, success, info, chalk } = require('./log')
const templates = require('./templates.json')
const { tryGitInit, tryGitCommit } = require('./utils')

program = new Command()

// Version of CLI
program.version(`Gm-cli version is ${pkg.version}.`)

// Init project
program
  .command('init <projectName>')
  .description('init project with template')
  .action(async projectName => {
    const appPath = path.join(process.cwd(), projectName)
    if (fs.existsSync(appPath)) {
      error(`Path ${appPath} exists.`)
      return
    }
    try {
      const { framework, template } = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Select framework',
          choices: Object.keys(templates)
        },
        {
          type: 'list',
          name: 'template',
          message: 'Select template',
          choices: answers => {
            return Object.keys(templates[answers.framework])
          },
          when: answers => {
            return Object.keys(templates[answers.framework]).length
          }
        }
      ])
      if (!Object.keys(templates[framework]).length) {
        warning(`There is no ${framework} template yet.`)
        return
      }
      info('Start downloading template...\n')
      const spinner = ora('downloading...').start()
      download(templates[framework][template].url, appPath, { clone: false }, err => {
        spinner.stop()
        if (err) {
          error(err)
        } else {
          success('Template download successfully.\n')
          if (tryGitInit(appPath)) {
            tryGitCommit(appPath)
          }
          console.log('\n    Happy Coding ^_^ \n\n')
        }
      })
    } catch (err) {
      error(err)
    }
  })

// Show all the templates
program
  .command('st')
  .description('show all the template you could use')
  .action(() => {
    for (let framework in templates) {
      console.log(chalk.green(framework) + '\n')
      if (!Object.keys(templates[framework]).length) {
        console.log(chalk.yellow(`There is no ${framework} template yet.\n`))
      } else {
        for (let template in templates[framework]) {
          console.log(chalk.blue(template))
          console.log(`    homepage: ${templates[framework][template].homepage}`)
          console.log(`    author: ${templates[framework][template].author}\n`)
        }
      }
    }
  })

program.parse(process.argv)
