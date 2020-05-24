/**
 * isEmpty
 *
 * Module to check if any value is empty
 *
 * @param value
 */
export function isEmpty(value: any) {
	return (
		value === undefined ||
		value === null ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
		(typeof value === 'string' && value.trim().length === 0) ||
		(typeof value === 'number' && isNaN(value))
	);
}
