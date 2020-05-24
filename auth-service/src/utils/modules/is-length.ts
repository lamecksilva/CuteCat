/**
 * isLength
 *
 * Check the length of a string
 *
 * @param string
 * @param param1
 */
export function isLength(
	string: String,
	{ min, max }: { min: number; max: number }
) {
	const length = string.length;

	if (length >= min && length <= max) {
		return true;
	} else {
		return false;
	}
}
