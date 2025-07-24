const config = {
  extends: [
    './typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['import', 'unused-imports'],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': [ 'error', 2 ],
    // 模块导入顺序规则
    'import/order': [
        1,
        {
            pathGroups: [
                {
                    pattern: '@/**',
                    group: 'external',
                    position: 'after',
                },
            ],
            alphabetize: { order: 'asc', caseInsensitive: false },
            'newlines-between': 'always-and-inside-groups',
            warnOnUnassignedImports: true,
        },
    ],
    // 自动删除未使用的导入
    // https://github.com/sweepline/eslint-plugin-unused-imports
    'unused-imports/no-unused-imports': 1,
    'unused-imports/no-unused-vars': [
        'error',
        {
            vars: 'all',
            args: 'none',
            ignoreRestSiblings: true,
        },
    ],
  },
};

export default config