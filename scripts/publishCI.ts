
import path from 'path'
import { args, publishPkg, step } from './releaseUtils'
import pico from 'picocolors'

async function main() {
  console.log(pico.cyan(`args info: ${JSON.stringify(args)}\n`))

  const tag = args._[0]

  if (!tag) {
    throw new Error('No tag specified')
  }
  console.log(pico.cyan(`tag: ${JSON.stringify(tag)}\n`))

  const versionSeg = tag.lastIndexOf('@')

  if (versionSeg === -1) {
    throw new Error('Tag format error')
  }

  const pkgName = tag.slice(0, versionSeg)

  const version = tag.slice(versionSeg + 1)

  const rawPkgName = pkgName.split('/')[1]

  console.log(pico.cyan(`version info: ${JSON.stringify(version)}\nrawPkgName info: ${JSON.stringify(rawPkgName)}\n`))


  const pkgDir = path.join(__dirname, `../packages/${rawPkgName}`)

  step('Publishing package...')
  const releaseTag = version.includes('beta')
    ? 'beta'
    : version.includes('alpha')
    ? 'alpha'
    : undefined

console.log(pico.cyan(`pkgDir info: ${JSON.stringify(pkgDir)}\n releaseTag info: ${JSON.stringify(releaseTag)}\n`))

  await publishPkg(pkgDir, releaseTag)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})