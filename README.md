# Choreo Workflow Logger

Send Github Action Workflow logs to Azure Logs Analytics

## Inputs

### `domain`

**Required** choreo API Domain

### `component-id`

**Required** Choreo component Id

### `run-id`

**Required** Run ID of the workflow

### `secret`

**Required** Secret code for the webhook

### `sha`

**Required** Commit sha


## Example

```
  build:
    steps:
    - name: choreo Deploy
      uses: choreo-templates/choreo-workflow-logger@v1
      with:
       domain: ${{secrets.DOMAIN}}
       component-id: ${{secrets.APP_ID}}
       run-id: ${{env.RUN_ID}}
       secreet: ${{secrets.TOKEN}}
       sha: ${{github.sha}}
```