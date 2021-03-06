# @gutianhuang/gm-cli

A cli tool kit for daily use based on commander.

## Install

```bash
npm i @gutianhuang/gm-cli -g
# Or use yarn
yarn global add @gutianhuang/gm-cli
```

## Commands

### `gm-cli init <projectName>`

Create a new project, `process.cwd()/projectName` must not exist.

### `gm-cli st`

Show all the templates:

- h5

| name              | homepage                                   | author                      |
| ----------------- | ------------------------------------------ | --------------------------- |
| html5-boilerplate | https://github.com/h5bp/html5-boilerplate  | h5bp <https://h5bp.org>     |
| component-maker   | https://github.com/Gu-Miao/component-maker | Gu-Miao <1450206741@qq.com> |

- react

| name                       | homepage                                               | author                                          |
| -------------------------- | ------------------------------------------------------ | ----------------------------------------------- |
| react-template-ejected-cra | https://github.com/Gu-Miao/react-template-ejected-cra  | Gu-Miao <1450206741@qq.com>                     |
| react-template-antd-craco  | https://github.com/Gu-Miao/react-template-antd-craco   | Gu-Miao <1450206741@qq.com>                     |
| react-boilerplate          | https://github.com/react-boilerplate/react-boilerplate | react-boilerplate <http://reactboilerplate.com> |

- vue

There is no vue template yet.

- svelte

There is no svelte template yet.

## Options

### `gm-cli -V --version`

Show version of CLI.

### `gm-cli -h --help`

Display help for CLI.

## License

[MIT](./LICENSE)
