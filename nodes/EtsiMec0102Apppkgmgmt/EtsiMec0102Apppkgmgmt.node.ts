import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { appPkgmDescription } from './resources/app-pkgm';
import { appPkgmNotificationsDescription } from './resources/app-pkgm-notifications';

export class EtsiMec0102Apppkgmgmt implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Etsi Mec010 2 Apppkgmgmt',
                name: 'N8nDevEtsiMec0102Apppkgmgmt',
                icon: { light: 'file:./etsi-mec010-2-apppkgmgmt.svg', dark: 'file:./etsi-mec010-2-apppkgmgmt.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'ETSI GS MEC 010-2: Application lifecycle, rules, requirements via OpenAPI.',
                defaults: { name: 'Etsi Mec010 2 Apppkgmgmt' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevEtsiMec0102ApppkgmgmtApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "App Pkgm",
					"value": "App Pkgm",
					"description": "App Package management"
				},
				{
					"name": "App Pkgm Notifications",
					"value": "App Pkgm Notifications",
					"description": "App Package management notifications"
				}
			],
			"default": ""
		},
		...appPkgmDescription,
		...appPkgmNotificationsDescription
                ],
        };
}
