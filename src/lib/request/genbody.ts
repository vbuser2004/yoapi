import { baseBDDP, baseBDDP_Schema } from '../../types/BasicDataPacket.js';

// Generate body to transmit to API
export const generateBody = (packet: baseBDDP) => {
    // Construct body and add time
    const body = {
        ...packet,
        time: new Date().getTime().toString(),
    };

    const isBDDPRequest = baseBDDP_Schema.partial().safeParse(body);

    if (!isBDDPRequest.success) throw new Error('Invalid Request Body Data');

    return body;
};
