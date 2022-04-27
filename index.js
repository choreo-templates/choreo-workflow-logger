const axios = require('axios').default;
const core = require('@actions/core');
const github = require('@actions/github');

try {
    const componentId = core.getInput('component-id');
    const runId = core.getInput('run-id');
    const secret = core.getInput('secret');
    const gitHash = core.getInput('sha');
    const domain = core.getInput('domain');


    console.log(`Sending Request to Choreo CICD....`);
    const body = {
        component_id: componentId,
        run_id: runId,
        secret: secret,
        sha: gitHash,
    }

    let WebhhookURL = `${domain}/actions/logs/analytics`;

    axios.post(WebhhookURL, body).then(function (response) {
        core.setOutput("azure-webhook-status", "success");
        console.log("azure-webhook-status", "success");
    }).catch(function (error) {
        core.setOutput("azure-webhook-status", "failed");
        if (error.response) {
            core.setFailed(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
            core.setFailed(error.message);
        }
    });

} catch (error) {
    core.setOutput("azure-webhook-status", "failed");
    core.setFailed(error.message);
    console.log("azure-webhook-status", "failed");
    console.log(error.message);
}
