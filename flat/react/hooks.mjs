import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { PATTERN_ALL } from '../pattern.mjs';

export default [
  {
    files: [PATTERN_ALL],
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended,
    },
  },
];
