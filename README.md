# @gutianhuang/gm-cli

A cli tool kit for daily use based on commander.

## Install

```bash
npm i gm-cli -g
# Or use yarn
yarn global add gm-cli
```

## Commands

### `init <projectName>`

Create a new project, `process.cwd()/projectName` must not exist.

### `st`

Show all the templates:

- h5

| name              | homepage                                  | author                  |
| ----------------- | ----------------------------------------- | ----------------------- |
| html5-boilerplate | https://github.com/h5bp/html5-boilerplate | h5bp <https://h5bp.org> |

- react

| name                       | homepage                                              | author                      |
| -------------------------- | ----------------------------------------------------- | --------------------------- |
| react-template-ejected-cra | https://github.com/Gu-Miao/react-template-ejected-cra | Gu-Miao <1450206741@qq.com> |
| react-template-antd-craco  | https://github.com/Gu-Miao/react-template-antd-craco  | Gu-Miao <1450206741@qq.com> |

- vue

There is no vue template yet.

- svelte

There is no svelte template yet.

## Options

### `-V --version`

Show version of CLI.

### `-h --help`

Display help for CLI.

## License

[MIT](./LICENSE)
