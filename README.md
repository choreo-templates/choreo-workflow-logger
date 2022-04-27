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
      uses: choreo-templates/build-deploy-action@v1
      with:
       domain: ${{secrets.DOMAIN}}
       org-id: ${{secrets.ORG_ID}}
       project-id: ${{secrets.PROJECT_ID}}
       token: ${{secrets.TOKEN}}
       image-name: ${{secrets.DOCKER_USER}}/${{ github.event.repository.name }} 
       git-hash: ${{github.sha}}
       env-id: ${{secrets.ENV_ID}}
       app-id: ${{secrets.APP_ID}}
       port-extract-file-path: 'path to file'
```