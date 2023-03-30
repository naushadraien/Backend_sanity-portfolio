import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '2bevx7gk',
    dataset: 'production',
    cors: {
      origin: ['https://www.naushadraien.com.np'],
      credentials: true
    }
  }
})
