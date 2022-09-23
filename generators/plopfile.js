module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the COMPONENT name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.styles.ts',
        templateFile: 'templates/component-styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/component-stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/index.ts',
        templateFile: 'templates/injectable-component-index.ts.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: '../src/components/index.ts',
        pattern: `/* PLOP_INJECT_COMPONENT_EXPORT */`,
        template: `export { {{pascalCase name}} } from './{{kebabCase name}}/{{pascalCase name}}';`
      }
    ]
  });
};
