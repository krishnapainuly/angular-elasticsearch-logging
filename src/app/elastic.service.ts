import { Injectable } from "@angular/core";
import { Client } from '@elastic/elasticsearch';

@Injectable({
    providedIn: 'root'
})
export class ElasticService {
    private client: Client;
    elasticSearchUrl = 'url';
    elasticAPIKeyId = 'key-id';
    elasticKey = 'key';
    indexName = 'search-index';
    constructor() {
        this.client = new Client({
            node: this.elasticSearchUrl,
            auth: {
                apiKey: this.elasticKey
            }
        });
    }

    async logToElasticSearch( message: string, level: string = 'info') { 
        try {
            const response = await this.client.index({
                index: this.indexName,
                body: {
                    timestamp: new Date().toISOString(),
                    message: message,
                    level: level
                }
            });
            console.log('Log successfully sent to Elastic search: ', response);
        } catch (error) {
            console.error('Error sending log to Elasticsearch: ', error);
        }
    }
}
