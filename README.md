# @n8n-dev/n8n-nodes-etsi-mec010-2-apppkgmgmt

![etsi-mec010-2-apppkgmgmt Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-etsi-mec010-2-apppkgmgmt.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-etsi-mec010-2-apppkgmgmt)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing etsi-mec010-2-apppkgmgmt API integrations by hand.**

Every time you connect n8n to etsi-mec010-2-apppkgmgmt, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to etsi-mec010-2-apppkgmgmt took 5 minutes, not half a day?**

This node gives you **2+ resources** out of the box: **App Pkgm**, **App Pkgm Notifications**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-etsi-mec010-2-apppkgmgmt
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-etsi-mec010-2-apppkgmgmt`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **etsi-mec010-2-apppkgmgmt API** → paste your API key
3. Drag the **etsi-mec010-2-apppkgmgmt** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>App Pkgm</b> (15 operations)</summary>

- Get Queries information relating to on boarded application packages in the MEO
- Post Create a resource for on boarding an application package to a MEO
- Delete s an individual application package resources
- Get Queries the information related to individual application package resources
- Patch Updates the operational state of an individual application package resource
- Get Reads the content of the AppD of on boarded individual application package resources
- Get Fetch the onboarded application package content identified by appPkgId or appDId
- Put Uploads the content of application package
- Get Reads the content of the AppD of on boarded individual application package resources
- Get Fetch the onboarded application package content identified by appPkgId or appDId
- Put Uploads the content of application package
- Get used to retrieve the information of subscriptions to individual application package resource in MEO
- Post Subscribe to notifications about on boarding an application package
- Delete s the individual subscription to notifications about application package changes in MEO
- Get Used to represent an individual subscription to notifications about application package changes

</details>

<details>
<summary><b>App Pkgm Notifications</b> (1 operations)</summary>

- Post Registers a notification endpoint to notify application package operations

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from etsi-mec010-2-apppkgmgmt docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official etsi-mec010-2-apppkgmgmt OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **etsi-mec010-2-apppkgmgmt** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the etsi-mec010-2-apppkgmgmt API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
