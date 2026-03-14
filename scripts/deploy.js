/**
 * 一键部署脚本: npm run deploy
 * 执行顺序: vite build → package
 */

import { execSync } from 'child_process'

console.log('\n🔨 Step 1/2  执行 vite build...\n')
execSync('npm run build', { stdio: 'inherit' })

console.log('\n📦 Step 2/2  打包 WordPress 主题...')
execSync('node scripts/package.js', { stdio: 'inherit' })
