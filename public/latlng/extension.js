importScripts('https://unpkg.com/typograf@6.11.0/dist/typograf.js')
importScripts('https://cdnjs.cloudflare.com/ajax/libs/markdown-it/10.0.0/markdown-it.min.js')
importScripts('/latlng.js')

const typeLabel = new Map([
	['idea', 'Идея'],
	['problem', 'Проблема'],
	['nice', 'Ценность'],
])

setup(async () => ({
    name: 'Bereguray',
    version: '1.0.0',
    description: 'https://берегурай.рф'
}))

on('idle', async event => {
    await toolbar([
        ['AddIdea', {
        	label: 'Предложить идею',
        	icon: 'bulb',
        	color: '#FFD166',
        }],
        ['AddProblem', {
        	label: 'Описать проблему',
        	icon: 'dislike',
        	color: '#F25C63',
        }],
        ['AddNice', {
        	label: 'Описать ценность',
        	icon: 'like',
        	color: '#4DCCBD',
        }],
    ])
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

    const title = typeLabel.get(type)
    const comment = feature.properties['comment']

    const md = new markdownit()
	const raw = md.render([
		`# ${title}`,
		comment
	].join('\n\n'));

    const tp = new Typograf({locale: ['ru', 'en-US']})
    const html = tp.execute(
    	raw
    )

	await showMapPopup(feature.geometry.coordinates, ['html', { html, style: {
		padding: 16,
	}}])
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

command("MoveBack", async ctx => {
	return navigateTo('https://берегурай.рф')
})

async function AddFeature(type) {
	const mobile = await requestState('layout.mobile')
	const info = mobile
		? 'Сделай то да се'
		: 'Укажите точку на карте'
	const info2 = mobile
		? 'Потом ок'
		: 'что-то произойдет'
	const coord = await requestPoint(info2, info)
	// const coord = await requestPoint('Кликни по карте', 'что-то произойдет')

	const values = await requestInput([
        // ['type', ['select', {}, [
        // 	['option', { value: 'idea', label: 'IDEA' }],
        // 	['option', { value: 'idea', label: 'IDEA' }],
        // 	['option', { value: 'idea', label: 'IDEA' }],
        // ]]],
        ['comment', ['text', {
        	label: 'COMMENT',
	        placeholder: 'Расскажите свою историю...',
	        required: 'Ну напишите хоть что-то',
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