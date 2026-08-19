
# npm Practice

## Project Location

Run the commands below from:

`phase-04-tooling-modules/02-projects/npm-practice`

---

## `npm init`

### Command

```bash
npm init
```


### What does `npm init` do?

It creates a `package.json` file and asks for the initial information needed for the project.

---

## `package.json`

### What is `package.json`?

It describes the project and contains information such as the project's dependencies, development dependencies, scripts, version, author, and license.

---

## Dependencies

Dependencies are packages that the application needs to work at runtime.

Example:

```bash
npm install axios
```

This adds `axios` to the project's `dependencies`.

---

## DevDependencies

Development dependencies are packages used while developing, testing, formatting, linting, or building the project.

Example:

```bash
npm install -D vitest
```

This adds `vitest` to `devDependencies`.

---

## `npm install` vs `npm install <package>`

### Install existing dependencies

```bash
npm install
```

Installs the dependencies already declared in `package.json` and `package-lock.json`.

This is useful after cloning a project that does not contain `node_modules`.

### Install a new package

```bash
npm install <package>
```

Installs a new package and adds it to the project's dependencies.

---

## `npm install -D <package>`

```bash
npm install -D <package>
```

Installs a package as a development dependency.

Example:

```bash
npm install -D vitest
```

---

## `node_modules`

`node_modules` contains the actual packages installed by npm.

We put it in `.gitignore` because it is generated automatically, can become very large, and can be recreated with:

```bash
npm install
```

---

## `package-lock.json`

`package-lock.json` records the exact dependency versions and dependency tree resolved by npm.

It is different from `package.json`:

* `package.json` → declares what the project depends on.
* `package-lock.json` → records what npm actually resolved and installed.

We commit `package-lock.json` so other developers and environments can install a consistent dependency tree.

---

## Basic npm Security

Do not install packages blindly.

Before installing an unfamiliar package, check that it is trustworthy, maintained, and actually needed.

You can check for known vulnerabilities with:

```bash
npm audit
```


