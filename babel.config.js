module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    [
      '/node_modules/@babel/plugin-proposal-pipeline-operator',
      {
        proposal: 'minimal',
      },
    ],
  ],
};
