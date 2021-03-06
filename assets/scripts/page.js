const fallbackData = [
	[[246, 248, 247], [221, 202, 207], [237, 193, 137], [157, 166, 178], [125, 119, 116]],
	[[239, 234, 233], [157, 152, 155], [124, 94, 96], [146, 131, 139], [38, 35, 36]],
	[[233, 236, 235], [86, 159, 187], [97, 120, 120], [70, 105, 143], [19, 26, 40]],
	[[239, 242, 235], [210, 159, 98], [193, 99, 86], [144, 174, 170], [67, 71, 92]],
	[[244, 244, 246], [115, 123, 131], [149, 160, 154], [114, 114, 141], [49, 55, 50]],
	[[250, 249, 249], [185, 174, 166], [235, 118, 28], [154, 142, 108], [42, 51, 38]],
	[[240, 240, 237], [228, 157, 77], [96, 107, 122], [135, 111, 105], [43, 43, 51]],
	[[244, 243, 243], [160, 163, 178], [155, 100, 92], [145, 134, 133], [48, 47, 54]],
	[[239, 230, 223], [224, 130, 102], [194, 41, 33], [180, 131, 91], [53, 41, 38]],
	[[246, 247, 246], [158, 150, 148], [240, 210, 17], [128, 132, 124], [46, 76, 81]],
	[[235, 244, 247], [113, 142, 156], [131, 182, 184], [113, 114, 134], [21, 56, 86]],
	[[244, 247, 247], [147, 153, 137], [147, 227, 241], [120, 116, 118], [57, 56, 61]],
	[[249, 247, 248], [168, 188, 165], [149, 227, 222], [140, 157, 169], [71, 125, 162]],
	[[240, 235, 233], [132, 149, 154], [138, 149, 154], [126, 114, 119], [44, 52, 82]],
	[[249, 248, 247], [143, 118, 132], [154, 151, 145], [132, 123, 115], [45, 39, 50]],
	[[248, 248, 247], [226, 168, 125], [114, 128, 168], [148, 88, 134], [57, 124, 215]],
	[[252, 251, 248], [147, 208, 232], [96, 193, 226], [135, 209, 231], [72, 172, 209]],
	[[250, 251, 250], [241, 208, 206], [242, 191, 190], [192, 174, 185], [162, 142, 139]],
	[[249, 246, 246], [48, 175, 216], [151, 147, 174], [150, 130, 104], [44, 39, 55]],
	[[252, 251, 251], [190, 196, 195], [181, 203, 211], [190, 188, 195], [149, 154, 166]],
	[[236, 231, 225], [186, 135, 83], [186, 155, 107], [214, 81, 61], [67, 63, 76]],
	[[244, 242, 240], [109, 189, 227], [89, 153, 193], [109, 111, 79], [30, 54, 114]],
	[[236, 222, 213], [198, 125, 85], [213, 137, 91], [141, 106, 106], [143, 69, 47]],
	[[247, 244, 246], [210, 170, 149], [160, 166, 192], [171, 116, 123], [33, 102, 160]],
	[[238, 227, 210], [149, 153, 150], [207, 48, 80], [151, 126, 124], [39, 40, 39]],
	[[248, 248, 247], [164, 165, 181], [142, 64, 217], [146, 121, 178], [33, 50, 119]],
	[[236, 224, 217], [169, 154, 116], [138, 114, 54], [124, 122, 104], [24, 34, 28]],
	[[245, 248, 245], [244, 153, 78], [138, 166, 213], [224, 111, 102], [79, 112, 175]],
	[[247, 247, 248], [143, 145, 160], [27, 187, 170], [123, 112, 126], [47, 51, 57]],
	[[238, 234, 231], [178, 178, 167], [125, 82, 71], [163, 130, 108], [64, 30, 28]],
	[[243, 238, 241], [144, 109, 83], [136, 139, 149], [124, 88, 89], [51, 63, 66]],
	[[249, 249, 251], [168, 180, 170], [220, 171, 63], [236, 149, 33], [28, 92, 83]],
	[[250, 249, 247], [81, 156, 182], [112, 204, 224], [164, 133, 72], [44, 74, 116]],
	[[232, 230, 229], [207, 150, 108], [203, 43, 33], [126, 137, 167], [37, 43, 42]],
	[[246, 245, 243], [212, 157, 122], [154, 107, 143], [143, 128, 162], [77, 76, 104]],
	[[247, 249, 249], [240, 174, 48], [242, 221, 127], [205, 132, 124], [167, 53, 65]],
	[[247, 249, 247], [243, 115, 84], [124, 129, 135], [193, 69, 80], [50, 59, 65]],
	[[241, 243, 240], [172, 164, 159], [199, 65, 64], [200, 155, 139], [41, 22, 21]],
	[[212, 229, 235], [168, 177, 158], [168, 113, 65], [212, 147, 78], [46, 49, 48]],
	[[249, 249, 249], [183, 155, 148], [149, 151, 185], [133, 120, 131], [70, 103, 135]],
	[[246, 242, 242], [159, 190, 182], [170, 71, 46], [233, 131, 74], [26, 100, 116]],
	[[247, 246, 242], [213, 195, 166], [213, 154, 120], [200, 174, 165], [168, 111, 101]],
	[[245, 241, 243], [149, 116, 94], [147, 146, 148], [135, 111, 99], [86, 94, 96]],
	[[251, 249, 249], [213, 175, 160], [195, 218, 232], [201, 155, 152], [122, 141, 162]],
	[[216, 226, 232], [147, 136, 125], [175, 80, 88], [143, 123, 104], [72, 41, 45]],
	[[242, 244, 243], [92, 213, 164], [121, 145, 112], [130, 133, 124], [39, 47, 58]],
	[[240, 242, 240], [156, 162, 168], [162, 111, 58], [144, 153, 159], [43, 54, 51]],
	[[237, 237, 236], [129, 128, 133], [165, 179, 136], [117, 104, 110], [58, 62, 71]],
	[[247, 248, 246], [125, 127, 120], [143, 123, 117], [142, 134, 110], [43, 49, 49]],
	[[242, 238, 240], [77, 190, 200], [47, 133, 152], [49, 157, 178], [25, 29, 43]],
	[[250, 249, 249], [146, 108, 92], [127, 122, 149], [116, 99, 109], [34, 32, 47]],
	[[238, 238, 235], [221, 148, 121], [236, 164, 52], [161, 110, 143], [110, 112, 129]],
	[[242, 243, 244], [156, 157, 158], [68, 107, 130], [157, 130, 117], [151, 78, 76]],
	[[250, 249, 248], [198, 173, 155], [168, 159, 188], [160, 106, 135], [51, 62, 88]],
	[[247, 246, 245], [197, 154, 152], [175, 65, 91], [171, 132, 158], [40, 45, 75]],
	[[246, 245, 242], [141, 138, 141], [225, 122, 92], [189, 100, 85], [31, 33, 32]],
	[[239, 236, 232], [115, 87, 64], [106, 114, 123], [128, 62, 54], [42, 38, 46]],
	[[239, 236, 232], [134, 120, 104], [134, 150, 141], [131, 99, 75], [44, 38, 39]],
	[[245, 245, 246], [161, 178, 194], [128, 142, 152], [150, 141, 148], [41, 35, 52]],
	[[242, 236, 223], [209, 171, 146], [204, 164, 164], [96, 150, 136], [239, 122, 106]],
	[[244, 244, 242], [128, 126, 122], [149, 145, 142], [124, 116, 110], [34, 42, 35]],
	[[249, 246, 246], [95, 105, 95], [160, 146, 167], [99, 91, 75], [33, 27, 37]],
	[[246, 244, 243], [204, 123, 62], [143, 136, 104], [90, 164, 102], [48, 54, 51]],
	[[253, 251, 250], [204, 197, 226], [175, 196, 223], [148, 179, 215], [69, 144, 222]],
	[[249, 246, 246], [139, 140, 146], [151, 143, 172], [55, 175, 155], [35, 26, 35]],
	[[245, 250, 244], [237, 143, 101], [181, 141, 177], [192, 77, 84], [43, 31, 42]],
	[[246, 248, 246], [234, 174, 86], [198, 161, 136], [182, 123, 138], [81, 113, 132]],
	[[237, 245, 249], [231, 139, 101], [237, 193, 84], [220, 69, 101], [114, 82, 136]],
	[[246, 247, 248], [79, 218, 214], [52, 114, 157], [143, 139, 132], [20, 35, 51]],
	[[249, 243, 246], [197, 191, 206], [120, 187, 233], [128, 164, 209], [38, 118, 201]],
	[[250, 250, 250], [191, 192, 155], [236, 138, 40], [173, 156, 109], [48, 150, 86]],
	[[247, 243, 210], [242, 199, 174], [248, 176, 129], [211, 143, 161], [221, 44, 83]],
	[[239, 230, 201], [224, 160, 72], [216, 201, 151], [113, 124, 131], [152, 68, 81]],
	[[241, 239, 241], [214, 186, 122], [135, 135, 151], [106, 153, 176], [75, 77, 109]],
	[[250, 250, 250], [141, 132, 164], [135, 175, 211], [123, 139, 157], [35, 78, 106]],
	[[245, 246, 247], [160, 159, 165], [161, 143, 136], [142, 139, 156], [53, 59, 75]],
	[[245, 244, 244], [227, 159, 110], [146, 74, 98], [148, 145, 197], [38, 47, 102]],
	[[245, 244, 245], [93, 179, 215], [53, 113, 182], [65, 75, 88], [51, 54, 61]],
	[[250, 246, 240], [190, 213, 239], [146, 188, 225], [126, 171, 225], [67, 137, 211]],
	[[250, 248, 249], [177, 165, 167], [235, 167, 78], [190, 126, 131], [110, 92, 102]],
	[[244, 245, 240], [127, 126, 121], [174, 165, 140], [130, 119, 116], [89, 91, 101]],
	[[246, 242, 227], [225, 229, 236], [186, 218, 241], [185, 205, 217], [150, 215, 240]],
	[[247, 249, 247], [160, 138, 132], [162, 159, 172], [130, 123, 140], [94, 99, 117]],
	[[247, 247, 247], [242, 200, 181], [181, 168, 141], [61, 138, 187], [92, 87, 100]],
	[[237, 232, 222], [152, 138, 102], [165, 152, 133], [103, 94, 91], [102, 79, 82]],
	[[237, 232, 226], [131, 147, 125], [104, 111, 76], [121, 128, 128], [41, 37, 35]],
	[[250, 249, 249], [123, 135, 151], [129, 121, 154], [229, 28, 134], [29, 19, 41]],
	[[244, 244, 244], [206, 166, 140], [214, 58, 71], [156, 147, 155], [44, 43, 47]],
	[[239, 238, 232], [216, 180, 78], [216, 59, 77], [47, 182, 77], [51, 45, 44]],
	[[249, 247, 246], [180, 150, 90], [161, 159, 167], [162, 76, 82], [64, 67, 97]],
	[[241, 243, 239], [141, 140, 140], [152, 120, 83], [141, 133, 139], [37, 34, 40]],
	[[239, 238, 232], [174, 126, 72], [130, 153, 181], [143, 85, 119], [61, 47, 79]],
	[[249, 249, 249], [114, 183, 184], [169, 164, 177], [205, 138, 126], [85, 97, 118]],
	[[242, 247, 247], [238, 148, 105], [139, 158, 192], [181, 101, 126], [100, 92, 90]],
	[[246, 244, 245], [116, 117, 118], [141, 156, 181], [219, 57, 155], [61, 48, 93]],
	[[244, 243, 243], [144, 136, 127], [155, 157, 164], [131, 131, 141], [69, 77, 79]],
	[[246, 246, 245], [140, 139, 137], [138, 146, 173], [173, 65, 93], [29, 98, 127]],
	[[248, 248, 247], [180, 138, 96], [149, 165, 193], [178, 92, 146], [67, 55, 97]],
	[[249, 249, 249], [227, 201, 115], [237, 103, 100], [239, 178, 36], [76, 119, 71]],
	[[243, 245, 239], [197, 156, 145], [188, 169, 186], [206, 87, 156], [44, 152, 127]]
]

const colorThreshold = 105

const url = 'http://colormind.io/api/'

const colors = document.getElementById('colors')
const background = document.getElementById('background')

const textColor = (rgb) => {
	const delta = rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114

	return 255 - delta < colorThreshold ? '#000000' : '#ffffff'
}

const rgbToHex = (rgb) => {
	return rgb
		.map((component) => {
			const hex = component.toString(16)
			return hex.length === 1 ? '0' + hex : hex
		})
		.join('')
}

const renderColors = (array) => {
	for (let color of array) {
		const box = document.createElement('div')
		const text = document.createElement('span')

		box.appendChild(text)

		box.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
		text.style.color = textColor(color)
		text.innerHTML = rgbToHex(color)
		colors.appendChild(box)
	}

	colors.style.opacity = 1
	background.style.opacity = 0

	document.querySelectorAll('#colors > div').forEach((e) => {
		e.addEventListener('click', function(event) {
			const hexString = this.querySelector('span').innerHTML
			navigator.clipboard.writeText(hexString).then(() => {
				// visual feedback for copied to clipboard
			})
		})
	})
}

window.onload = () => {
	const body = {model: Math.random() > 0.5 ? 'ui' : 'default'}

	console.time('fetch')

	fetch(url, {
		method : 'POST',
		body   : JSON.stringify(body)
	})
		.then((res) => res.json())
		.then((data) => {
			console.log('Raw API response ' + body.model + ': ', data)

			renderColors(data.result)

			console.timeEnd('fetch')
		})
		.catch((err) => {
			renderColors(fallbackData[Math.floor(Math.random() * fallbackData.length)])
		})
}
