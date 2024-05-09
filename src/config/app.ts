import * as pathUtil from 'node:path' 

const appRoot = process.cwd()

export const config = {
  graphRoot: pathUtil.join(appRoot, 'graph/pages')
}
