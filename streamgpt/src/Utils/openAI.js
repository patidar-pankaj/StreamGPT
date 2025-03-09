import OpenAI from 'openai';
import { OpenAI_Key } from './Constants';

const openAI = new OpenAI({
  apiKey: OpenAI_Key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openAI;