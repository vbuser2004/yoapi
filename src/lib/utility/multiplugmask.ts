
/**
 * Set the state of each plug.
 * @param {Array.<number>} plugNumbers - An array of numbers from 1 to 8 indicating which plugs.
 * @returns {number} - The generated plug mask using an 8-plug decimal mask. Returns -1 if any error.
 */  
export default function generatePlugMask(plugNumbers: number[]): number {
    let mask = 0;

    for (const plugNumber of plugNumbers) {
        if (plugNumber >= 1 && plugNumber <= 8) {
            // Calculate the bit position corresponding to the plug number
            const bitPosition = plugNumber - 1;
            
            // Set the bit at the calculated position in the mask
            mask |= 1 << bitPosition;
        } else {
            console.error(`Invalid plug number: ${plugNumber}. Plug numbers should be between 1 and 8.`);
            mask = -1
        }
    }

    return mask;
}