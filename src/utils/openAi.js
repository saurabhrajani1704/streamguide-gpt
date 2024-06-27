import OpenAI from 'openai';
import { } from './constants';

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // This is the default and can be omitted
  });

export default openai;