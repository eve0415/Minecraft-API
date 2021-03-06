import axios from 'axios';
import { MojangStatus } from '../..';
import { mojangStatus } from '../url';

/**
 * Fetch Mojang's server status
 * @returns Returns each service with status color
 * - Green: No problem
 * - Yellow: Some issues
 * - Red: Probably not working properly
 */
export async function getMojangStatus(): Promise<MojangStatus> {
    const res = await axios.get<MojangStatus[]>(mojangStatus);
    return res.data.reduce((result, obj) => {
        Object.keys(obj).forEach(k => {
            result[k] = obj[k];
        });
        return result;
    });
}
