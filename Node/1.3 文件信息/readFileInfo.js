const fs = require('fs')
const path = require('path')

fs.readdir(__dirname, (err, files) => {
	let strInfo = ''
	// 记录读取文件个数
	let countFlag = 0

	// 遍历文件数组
	files.forEach(item => {
		const abspathRead = path.join(__dirname, item)

		// 异步
		fs.stat(abspathRead, (err, stats) => {
			if (err) return console.log(err.message)

			const fileInfo = `目录内容:${item}\n文件大小:${stats.size}\n是否是普通文件:${stats.isFile()}\n\n`
			strInfo += fileInfo

			// 每读取一个文件,计数器加1
			countFlag++

			if (countFlag === files.length) {
				const abspathWrite = path.join(__dirname, 'files/writeFileInfo.txt')

				fs.writeFile(abspathWrite, strInfo, err => {
					if (err) return console.log(err.message)

					console.log('写入成功')
				})
			}
		})
	})
})


