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

on('idle', async event => {
    await toolbar([
        ['AddIdea', {
        	label: 'Добавить идею',
        	icon: 'bulb',
        	color: '#FFD166',
        }],
        ['AddProblem', {
        	label: 'Описать проблему',
        	icon: 'dislike',
        	color: '#F25C63',
        }],
        ['AddNice', {
        	label: 'Whatever',
        	icon: 'like',
        	color: '#4DCCBD',
        }],
    ])

    // await header([])
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

command("AddIdea", async ctx => {
	return AddFeature('idea')
})

command("AddProblem", async ctx => {
	return AddFeature('problem')
})

command("AddNice", async ctx => {
	return AddFeature('nice')
})

async function AddFeature(type) {
	const mobile = await requestState('layout.mobile')
	const info = mobile
		? 'Сделай то да се'
		: 'Кликни по карте'
	const info2 = mobile
		? 'Потом ок'
		: 'что-то произойдет'
	const coord = await requestPoint(info2, info)
	// const coord = await requestPoint('Кликни по карте', 'что-то произойдет')

	const values = await requestInput([
        // ['comment', 'kek'],
        // ['email', ''],

        // ['type', ['select', {}, [
        // 	['option', { value: 'idea', label: 'IDEA' }],
        // 	['option', { value: 'idea', label: 'IDEA' }],
        // 	['option', { value: 'idea', label: 'IDEA' }],
        // ]]],
        ['comment', ['text', {
        	label: 'COMMENT',
	        placeholder: 'Расскажите свою историю...',
	        required: 'Ну напиши хоть что-то',
        	rows: 4,
        }]],
        ['email', ['input', {
        	label: 'EMAIL',
        	placeholder: 'Расскажите свою email...',
        	// pattern: {
         //        value: /^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})?$/i,
         //        message: "invalid email address"
         //    }
        }]],
    ], {
    	title: 'That you think?',
    	submit: 'DO IT',
    	cancel: 'DONT DO IT',
    })

	// const values = {
	// 	type,
	// 	email: '',
	// 	comment: 'kek',
	// }

	const f = {
		type: 'FeatureCollection',
		features: [
			{
	        	type: 'Feature',
		        geometry: {
		            type: 'Point',
		            coordinates: [coord.lng, coord.lat]
		        },
		        properties: {
		            comment: values.comment,
		            email: values.email,
		            type,
		        }
		    }
	    ]
	}

    const ok = await addFeatures(f, {
    	layerId: '5e80dd1969fe7ac1706cc996'
    })

    console.log('RUN COMMAND', coord, f, ok)
}