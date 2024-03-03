# portfolio

## Description

This project is designed to create my personal portfolio that's hosted in [https://cosalpino.com/](https://cosalpino.com/)

## Getting Started

### Prerequisites

List all dependencies and their version needed by the project as :

* IDE used PhpStorm 2023.3 or Webstorm 2023.3
* npm 10.4.0 or later [official doc](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
* node v20.11.0 or later [official doc][https://nodejs.org/en/download]
* git version 2.43.0.windows or later [official doc](https://git-scm.com/)
* OS supported Windows 10

### Configuration

There's no configuration to do on this site.

## Deployment

### On dev environment
Install packages
```shell
npm install
```
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### On integration environment

To deploy the project first copy the project to the proper folder then duplicate the .env.example to .env and 
update it with your environment's values.

## Directory structure
```shell
├───public                  //Web files (routes)
│   ├───documents
│   └───projects
│       ├───Kartthemall
│       ├───portfolio
│       └───stellarmap
└───src                      // externals files
    └───app
        ├───about
        ├───contact
        └───projects
            ├───kartthemall
            ├───meteo
            ├───portfolio
            └───stellarmap
```

## Collaborate

* Workflow
  * [Gitflow](https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20est%20l'un%20des,les%20hotfix%20vers%20la%20production.)
  * [How to commit](https://www.conventionalcommits.org/en/v1.0.0/)
  * [How to use the workflow](https://nvie.com/posts/a-successful-git-branching-model/)

  * Pull requests are open to merge in the develop branch.
  * Release on the main branch we use GitFlow and not with GitHub release.
  * Issues are added to the [github issues page](https://github.com/JuilletMikael/RIA-EggFlix/issues)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

* [jetbrain](/docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/https://www.jetbrains.com/)

## Contact

* If needed you can create an issue on GitHub we will try to respond as quickly as possible.

