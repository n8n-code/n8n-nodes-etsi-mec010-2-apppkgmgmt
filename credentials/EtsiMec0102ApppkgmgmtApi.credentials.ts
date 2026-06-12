import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class EtsiMec0102ApppkgmgmtApi implements ICredentialType {
        name = 'N8nDevEtsiMec0102ApppkgmgmtApi';

        displayName = 'Etsi Mec010 2 Apppkgmgmt API';

        icon: Icon = { light: 'file:../nodes/EtsiMec0102Apppkgmgmt/etsi-mec010-2-apppkgmgmt.svg', dark: 'file:../nodes/EtsiMec0102Apppkgmgmt/etsi-mec010-2-apppkgmgmt.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'http://etsi.local',
                        required: true,
                        placeholder: 'http://etsi.local',
                        description: 'The base URL of your Etsi Mec010 2 Apppkgmgmt API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
