import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class EnvService {
    private readonly envConfig: { [key: string]: string };

    constructor(filePath: string) {
        let envFile = {}
        this.envConfig = process.env
        try {
            envFile = dotenv.parse(fs.readFileSync(filePath))
        }
        catch (e) {

        }
        finally {
            this.envConfig = Object.assign(this.envConfig, envFile)
        }
    }

    get(key: string): string {
        return this.envConfig[key];
    }
    isProduction(): boolean {
        return this.get('MODE') !== 'DEV'
    }
}