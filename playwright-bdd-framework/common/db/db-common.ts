import { Client } from "pg";
import config from "../../config/config.json";

export class DbCommons {

    async getData(query: string): Promise<Array<Record<string, unknown>>> {
        const dbconfig = new Client({
            host: config.db.host,
            port: config.db.port,
            user: config.db.username,
            password: config.db.password,
            database: config.db.database,
        });

        await dbconfig.connect();

        const result = await dbconfig.query(query);

        await dbconfig.end();

        return result.rows;
    }
}