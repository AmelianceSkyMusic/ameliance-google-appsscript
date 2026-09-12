export const baseURL = process.env.GOOGLE_APPS_SCRIPT_URL;

export function getBaseURL(): string {
	return process.env.GOOGLE_APPS_SCRIPT_URL || baseURL || '';
}
