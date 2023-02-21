# Eslint Prettier Husky template for React.Js

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](http://prettier.io) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Project initialization

### 1. Use DevContainer
 - [Developing inside a Container](https://code.visualstudio.com/docs/devcontainers/containers)

### 2. Use Local [DEV]

1. [Install NodeJs.18 (LTS)](https://nodejs.org/en/download/)
2. Install Yarn: `npm -g install yarn`
3. Press `Clone` button.
4. Install and run project:

```shell
yarn
yarn start
```

## Notes

### 1. Why is my git pre-commit hook not executable by default?

- Because files are not executable by default; they must be set to be executable.

```shell
  chmod ug+x .husky/*
  chmod ug+x .git/hooks/*
```

### 2. Git commit

```shell
  yarn commit
```

### 3. Project release

```shell
  yarn release:patch // Patch release 0.1.0 -> 0.1.1
  yarn release:minor // Minor release 0.1.1 -> 0.2.0
  yarn release:major // Major release 0.2.0 -> 1.0.0
```
### 4. Project Structure

| Name                        | Description                                             |
| --------------------------- | ------------------------------------------------------- |
| **src/**                    | Source files                                            |
| **src/assets/**             |                                                         |
| **src/context/**            |                                                         |
| **src/data/**               |                                                         |
| **src/entities/**           |                                                         |
| **src/helpers/**            |                                                         |
| **src/hooks/**              |                                                         |
| **src/layouts/**            |                                                         |
| **src/libs/**               |                                                         |
| **src/modules/**            |                                                         |
| **src/pages/**              |                                                         |
| **src/routes/**             |                                                         |
| **src/services/**           |                                                         |
| **src/store/**              |                                                         |
| **src/ui/**                 |                                                         |
| **src/utility-types/**      |                                                         |
| **src/utils/**              |                                                         |
| **src/widgets/**            |                                                         |
| **tests/**                  | Test cases will be placed here                          |
| **tests/unit/**             | Unit Test cases will be placed here                     |
| **tests/e2e/**              | E2E testing                                             |
| **tests/integration/**      | API routes (Integration) Test cases will be placed here |

### 5. PullRequest

  - [ ] This PR implements new feature, fix bug, or some other changes
  - [ ] If PR is not ready to review mark it as Draft
  - [ ] All commits in this PR should be created by `yarn commit` by [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/)
  - [ ] Title of the PR should have issue(s) identifier(s) ("BOX-123 Example title of PR")
