import fs from 'node:fs'
import path2 from 'path'
import deepClone from '@/object/deepClone.js'
import listToTree from '@/array/listToTree.js'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import fse from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

export default fse
