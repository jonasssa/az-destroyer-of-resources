// Load the .env file if it exists
// require("dotenv").config();

const { ResourceManagementClient } = require("@azure/arm-resources");
const { DefaultAzureCredential } = require("@azure/identity");
// const credential = new DefaultAzureCredential();

const credential = new DefaultAzureCredential();

const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID

const resourceGroupName = "test2-rg"

const client = new ResourceManagementClient(credential, subscriptionId);

const response = client.resourceGroups.createOrUpdate(resourceGroupName).then(console.log)
console.log(response)
