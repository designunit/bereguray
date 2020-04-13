importScripts('/latlng.js')

const typeLabel = new Map([
	['idea', 'Идея'],
	['problem', 'Пиздец'],
	['nice', 'Милота'],
])

setup(async () => ({
    name: 'Bereguray',
    version: '1.0.0',
    description: 'https://берегурай.рф'
}))

on('install', async event => {
	
})

on('feature.select', async event => {
	const featureId = event.data.featureId
	const layerId = event.data.layerId
	if(!featureId){
		return
	}
	
    const fc = await requestFeatures([featureId])
    
    const feature = fc.features[0]
    const geometryType = feature.geometry.type
    assert(geometryType !== 'Point', new Error('Selected feature is not a point'))
    
	const type = feature.properties['type']
    const data = [
    	{ key: 'Это', value: typeLabel.get(type) },
    	{ key: 'Чо сказал', value: feature.properties['comment']},
    ]

	await showMapPopup(feature.geometry.coordinates, ['kv', { data }])
})
