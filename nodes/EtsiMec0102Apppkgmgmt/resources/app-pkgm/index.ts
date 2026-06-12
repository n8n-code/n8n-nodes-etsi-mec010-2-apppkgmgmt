import type { INodeProperties } from 'n8n-workflow';

export const appPkgmDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					]
				}
			},
			"options": [
				{
					"name": "App Packages GET",
					"value": "App Packages GET",
					"action": "Queries information relating to on-boarded application packages in the MEO",
					"description": "queries information relating to on-boarded application packages in the MEO",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app_packages"
						}
					}
				},
				{
					"name": "App Packages POST",
					"value": "App Packages POST",
					"action": "Create a resource for on-boarding an application package to a MEO",
					"description": "Create a resource for on-boarding an application package to a MEO",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app_packages"
						}
					}
				},
				{
					"name": "App Package DELETE",
					"value": "App Package DELETE",
					"action": "Deletes an individual application package resources",
					"description": "Deletes an individual application package resources",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app_packages/{{$parameter[\"appPkgId\"]}}"
						}
					}
				},
				{
					"name": "App Package GET",
					"value": "App Package GET",
					"action": "Queries the information related to individual application package resources",
					"description": "Queries the information related to individual application package resources",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app_packages/{{$parameter[\"appPkgId\"]}}"
						}
					}
				},
				{
					"name": "App Package PATCH",
					"value": "App Package PATCH",
					"action": "Updates the operational state of an individual application package resource",
					"description": "Updates the operational state of an individual application package resources",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app_packages/{{$parameter[\"appPkgId\"]}}"
						}
					}
				},
				{
					"name": "App Pkg ID GET",
					"value": "App Pkg ID GET",
					"action": "Reads the content of the AppD of on-boarded individual application package resources.",
					"description": "Reads the content of the AppD of on-boarded individual application package resources.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app_packages/{{$parameter[\"appPkgId\"]}}/appd"
						}
					}
				},
				{
					"name": "App Pkg GET",
					"value": "App Pkg GET",
					"action": "Fetch the onboarded application package content identified by appPkgId or appDId.",
					"description": "Fetch the onboarded application package content identified by appPkgId or appDId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app_packages/{{$parameter[\"appPkgId\"]}}/package_content"
						}
					}
				},
				{
					"name": "App Pkg PUT",
					"value": "App Pkg PUT",
					"action": "Uploads the content of application package.",
					"description": "Uploads the content of application package.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/app_packages/{{$parameter[\"appPkgId\"]}}/package_content"
						}
					}
				},
				{
					"name": "App DGET",
					"value": "App DGET",
					"action": "Reads the content of the AppD of on-boarded individual application package resources.",
					"description": "Reads the content of the AppD of on-boarded individual application package resources.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onboarded_app_packages/{{$parameter[\"appDId\"]}}/appd"
						}
					}
				},
				{
					"name": "App D ID GET",
					"value": "App D ID GET",
					"action": "Fetch the onboarded application package content identified by appPkgId or appDId.",
					"description": "Fetch the onboarded application package content identified by appPkgId or appDId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onboarded_app_packages/{{$parameter[\"appDId\"]}}/package_content"
						}
					}
				},
				{
					"name": "App D ID PUT",
					"value": "App D ID PUT",
					"action": "Uploads the content of application package.",
					"description": "Uploads the content of application package.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/onboarded_app_packages/{{$parameter[\"appDId\"]}}/package_content"
						}
					}
				},
				{
					"name": "Subscriptions GET",
					"value": "Subscriptions GET",
					"action": "used to retrieve the information of subscriptions to individual application package resource in MEO",
					"description": "used to retrieve the information of subscriptions to individual application package resource in MEO package",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions"
						}
					}
				},
				{
					"name": "Subscriptions POST",
					"value": "Subscriptions POST",
					"action": "Subscribe to notifications about on-boarding an application package",
					"description": "Subscribe to notifications about on-boarding an application package",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subscriptions"
						}
					}
				},
				{
					"name": "Individual Subscription DELETE",
					"value": "Individual Subscription DELETE",
					"action": "Deletes the individual subscription to notifications about application package changes in MEO.",
					"description": "Deletes the individual subscription to notifications about application package changes in MEO.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/subscriptions/{{$parameter[\"subscriptionId\"]}}"
						}
					}
				},
				{
					"name": "Individual Subscription GET",
					"value": "Individual Subscription GET",
					"action": "Used to represent an individual subscription to notifications about application package changes.",
					"description": "Used to represent an individual subscription to notifications about application package changes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions/{{$parameter[\"subscriptionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /app_packages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages GET"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Attribute-based filtering parameters according to ETSI GS MEC 009",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages GET"
					]
				}
			}
		},
		{
			"displayName": "All Fields",
			"name": "all_fields",
			"description": "Include all complex attributes in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "all_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages GET"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Complex attributes of AppPkgInfo to be included into the response",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages GET"
					]
				}
			}
		},
		{
			"displayName": "Exclude Fields",
			"name": "exclude_fields",
			"description": "Complex attributes of AppPkgInfo to be excluded from the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages GET"
					]
				}
			}
		},
		{
			"displayName": "Exclude Default",
			"name": "exclude_default",
			"description": "Indicates to exclude the following complex attributes of AppPkgInfo from the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_default",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages GET"
					]
				}
			}
		},
		{
			"displayName": "POST /app_packages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Pkg Name",
			"name": "appPkgName",
			"type": "string",
			"default": "",
			"description": "Name of the application package to be onboarded.",
			"routing": {
				"send": {
					"property": "appPkgName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Pkg Path",
			"name": "appPkgPath",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "appPkgPath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Pkg Version",
			"name": "appPkgVersion",
			"type": "string",
			"default": "",
			"description": "Version of the application package to be onboarded.\nThe appPkgName with appPkgVersion can be used to uniquely identify the application package.",
			"routing": {
				"send": {
					"property": "appPkgVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages POST"
					]
				}
			}
		},
		{
			"displayName": "App Provider",
			"name": "appProvider",
			"type": "string",
			"default": "",
			"description": "The provider's name of the application package to be onboarded.",
			"routing": {
				"send": {
					"property": "appProvider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Checksum",
			"name": "checksum",
			"type": "json",
			"default": "{}",
			"description": "",
			"routing": {
				"send": {
					"property": "checksum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages POST"
					]
				}
			}
		},
		{
			"displayName": "User Defined Data",
			"name": "userDefinedData",
			"type": "json",
			"default": "{}",
			"description": "'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259'",
			"routing": {
				"send": {
					"property": "userDefinedData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Packages POST"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app_packages/{appPkgId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Package DELETE"
					]
				}
			}
		},
		{
			"displayName": "GET /app_packages/{appPkgId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Package GET"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app_packages/{appPkgId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Package PATCH"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operation State",
			"name": "operationState",
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
					"property": "operationState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Package PATCH"
					]
				}
			}
		},
		{
			"displayName": "GET /app_packages/{appPkgId}/appd",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Pkg ID GET"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Attribute-based filtering parameters according to ETSI GS MEC 009",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Pkg ID GET"
					]
				}
			}
		},
		{
			"displayName": "All Fields",
			"name": "all_fields",
			"description": "Include all complex attributes in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "all_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Pkg ID GET"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Complex attributes of AppPkgInfo to be included into the response",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Pkg ID GET"
					]
				}
			}
		},
		{
			"displayName": "Exclude Fields",
			"name": "exclude_fields",
			"description": "Complex attributes of AppPkgInfo to be excluded from the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Pkg ID GET"
					]
				}
			}
		},
		{
			"displayName": "Exclude Default",
			"name": "exclude_default",
			"description": "Indicates to exclude the following complex attributes of AppPkgInfo from the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_default",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Pkg ID GET"
					]
				}
			}
		},
		{
			"displayName": "GET /app_packages/{appPkgId}/package_content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Pkg GET"
					]
				}
			}
		},
		{
			"displayName": "PUT /app_packages/{appPkgId}/package_content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Pkg PUT"
					]
				}
			}
		},
		{
			"displayName": "PUT /app_packages/{appPkgId}/package_content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App Pkg PUT"
					]
				}
			}
		},
		{
			"displayName": "GET /onboarded_app_packages/{appDId}/appd",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App DGET"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Attribute-based filtering parameters according to ETSI GS MEC 009",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App DGET"
					]
				}
			}
		},
		{
			"displayName": "All Fields",
			"name": "all_fields",
			"description": "Include all complex attributes in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "all_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App DGET"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Complex attributes of AppPkgInfo to be included into the response",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App DGET"
					]
				}
			}
		},
		{
			"displayName": "Exclude Fields",
			"name": "exclude_fields",
			"description": "Complex attributes of AppPkgInfo to be excluded from the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App DGET"
					]
				}
			}
		},
		{
			"displayName": "Exclude Default",
			"name": "exclude_default",
			"description": "Indicates to exclude the following complex attributes of AppPkgInfo from the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_default",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App DGET"
					]
				}
			}
		},
		{
			"displayName": "GET /onboarded_app_packages/{appDId}/package_content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App D ID GET"
					]
				}
			}
		},
		{
			"displayName": "PUT /onboarded_app_packages/{appDId}/package_content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App D ID PUT"
					]
				}
			}
		},
		{
			"displayName": "PUT /onboarded_app_packages/{appDId}/package_content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"App D ID PUT"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"Subscriptions GET"
					]
				}
			}
		},
		{
			"displayName": "POST /subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"Subscriptions POST"
					]
				}
			}
		},
		{
			"displayName": "App Pkg Filter",
			"name": "appPkgFilter",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "appPkgFilter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"Subscriptions POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Callback Uri",
			"name": "callbackUri",
			"type": "string",
			"default": "",
			"description": "The URI of the endpoint for the notification to be sent to.",
			"routing": {
				"send": {
					"property": "callbackUri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"Subscriptions POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subsctiption Type",
			"name": "subsctiptionType",
			"type": "options",
			"default": "AppPackageOnBoarding",
			"description": "'Subscribed notification type'",
			"options": [
				{
					"name": "App Package On Boarding",
					"value": "AppPackageOnBoarding"
				},
				{
					"name": "App Pacakge Operation Change",
					"value": "AppPacakgeOperationChange"
				},
				{
					"name": "App Package Deletion",
					"value": "AppPackageDeletion"
				}
			],
			"routing": {
				"send": {
					"property": "subsctiptionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"Subscriptions POST"
					]
				}
			}
		},
		{
			"displayName": "DELETE /subscriptions/{subscriptionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"Individual Subscription DELETE"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions/{subscriptionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Pkgm"
					],
					"operation": [
						"Individual Subscription GET"
					]
				}
			}
		},
];
