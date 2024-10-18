import { callModel } from './api';
import { addCorsHeaders } from './utils';

interface IRequestBody {
	techStack: string[];
	goldCircleWhy: string[];
	goldCircleHow: string[];
	goldCircleWhat: string[];
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const allowOrigin = env.ALLOW_ORIGIN || '*';
		if (request.method === 'OPTIONS') {
			return addCorsHeaders(allowOrigin, new Response(null));
		}
		await new Promise((resolve) => setTimeout(resolve, 3000));

		const data: IRequestBody = await request.json();

		let content = '';
		content += `Tech Stack: ${data.techStack.join(', ')}\n\n`;
		content += `Why: ${data.goldCircleWhy.join(', ')}\n\n`;
		content += `How: ${data.goldCircleHow.join(', ')}\n\n`;
		content += `What: ${data.goldCircleWhat.join(', ')}`;

		const modelResponse = await callModel({ apiKey: env.API_KEY, content });
		const response = new Response(JSON.stringify(modelResponse));
		return addCorsHeaders(allowOrigin, response);
	},
} satisfies ExportedHandler<Env>;
