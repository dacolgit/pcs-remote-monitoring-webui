// Copyright (c) Microsoft. All rights reserved.

// This file is rewritten during the deployment.
// Values can be changed for development purpose.
// The file is public, so don't expect secrets here.

var DeploymentConfig = {
  authEnabled: false,
  authType: 'aad',
  aad : {
    tenant: '00000000-0000-0000-0000-000000000000',
    appId: '00000000-0000-0000-0000-000000000000',
    /* tenant: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    appId: '7b543064-cbde-4b43-a451-b2b050166006',
    audience: '', */
    instance: ''
  }
}
