export const addCorsHeaders = (allowOrigin: string, response: Response) => {
	response.headers.set('Access-Control-Allow-Origin', allowOrigin);
	response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
	response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
	return response;
};
