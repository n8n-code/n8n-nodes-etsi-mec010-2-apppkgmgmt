import type { INodeProperties } from 'n8n-workflow';

export const appPkgmNotificationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm Notifications"
					]
				}
			},
			"options": [
				{
					"name": "App Pkg Notification POST",
					"value": "App Pkg Notification POST",
					"action": "Registers a notification endpoint to notify application package operations",
					"description": "Registers a notification endpoint to notify application package operations",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/user_defined_notification"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /user_defined_notification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm Notifications"
					],
					"operation": [
						"App Pkg Notification POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Links",
			"name": "_links",
			"type": "json",
			"default": "{\n  \"subscription\": {}\n}",
			"description": "Links to resources related to this resource.",
			"routing": {
				"send": {
					"property": "_links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm Notifications"
					],
					"operation": [
						"App Pkg Notification POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App D ID",
			"name": "appDId",
			"type": "string",
			"default": "",
			"description": "Identifier of this MEC application descriptor. This attribute shall be globally unique.",
			"routing": {
				"send": {
					"property": "appDId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm Notifications"
					],
					"operation": [
						"App Pkg Notification POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Pkg ID",
			"name": "appPkgId",
			"type": "string",
			"default": "",
			"description": "Identifier of the onboarded application package.",
			"routing": {
				"send": {
					"property": "appPkgId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm Notifications"
					],
					"operation": [
						"App Pkg Notification POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "''",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm Notifications"
					],
					"operation": [
						"App Pkg Notification POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification Type",
			"name": "notificationType",
			"type": "options",
			"default": "AppPackageOnBoarded",
			"description": "Discriminator for the different notification types",
			"options": [
				{
					"name": "App Package On Boarded",
					"value": "AppPackageOnBoarded"
				},
				{
					"name": "App Pacakge Enabled",
					"value": "AppPacakgeEnabled"
				},
				{
					"name": "App Pacakge Disabled",
					"value": "AppPacakgeDisabled"
				},
				{
					"name": "App Package Deleted",
					"value": "AppPackageDeleted"
				}
			],
			"routing": {
				"send": {
					"property": "notificationType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm Notifications"
					],
					"operation": [
						"App Pkg Notification POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operational State",
			"name": "operationalState",
			"type": "options",
			"default": "DISABLED",
			"options": [
				{
					"name": "DISABLED",
					"value": "DISABLED"
				},
				{
					"name": "ENABLED",
					"value": "ENABLED"
				}
			],
			"routing": {
				"send": {
					"property": "operationalState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm Notifications"
					],
					"operation": [
						"App Pkg Notification POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscription ID",
			"name": "subscriptionId",
			"type": "string",
			"default": "",
			"description": "Identifier of the subscription related to this notification.",
			"routing": {
				"send": {
					"property": "subscriptionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm Notifications"
					],
					"operation": [
						"App Pkg Notification POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Stamp",
			"name": "timeStamp",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "timeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm Notifications"
					],
					"operation": [
						"App Pkg Notification POST"
					]
				}
			}
		},
];
