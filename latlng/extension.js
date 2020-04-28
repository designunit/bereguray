importScripts('https://unpkg.com/typograf@6.11.0/dist/typograf.js')
importScripts('https://cdnjs.cloudflare.com/ajax/libs/markdown-it/10.0.0/markdown-it.min.js')
importScripts('/latlng.js')

const LAYER_ID = '5e80dd1969fe7ac1706cc996'

const typeLabel = new Map([
	['idea', 'Идея'],
	['problem', 'Проблема'],
	['nice', 'Ценность'],
])

setup(async () => {
	// const layerId = await requestLayer({
	// 	geometryTypes: ['Point']
	// })
	return {
	    name: 'Bereguray',
	    version: '1.0.0',
	    description: 'https://берегурай.рф',
	    // options: {
	    // 	layerId,
	    // }
	}
})

on('install', async event => {
    // await overlay([
    // 	['link', {
    // 		href: 'https://берегурай.рф',
    // 	}],
        
    //     ['button', {
    //     	command: 'MoveBack',
    //     	label: '<-',
    //     	color: 'white',
    //     }],
    // ])
})

on('idle', async event => {
    await toolbar([
        ['AddIdea', {
        	label: 'Предложить идею',
        	icon: 'bulb',
        	color: '#FFD166',
        }],
        ['AddNice', {
        	label: 'Описать ценность',
        	icon: 'like',
        	color: '#4DCCBD',
        }],
        ['AddProblem', {
        	label: 'Описать проблему',
        	icon: 'dislike',
        	color: '#F25C63',
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
	return AddFeature({
		type: 'idea',
		title: 'Идея',
		placeholder: 'Опишите свою идею...',
		label: 'Комментарий',
	})
})

command("AddProblem", async ctx => {
	return AddFeature({
		type: 'problem',
		title: 'Проблема',
		placeholder: 'Опишите проблему...',
		label: 'Комментарий',
	})
})

command("AddNice", async ctx => {
	return AddFeature({
		type: 'nice',
		title: 'Ценность',
		placeholder: 'Расскажите свою историю...',
		label: 'Комментарий',
	})
})

command("MoveBack", async ctx => {
	return navigateTo('https://берегурай.рф')
})

async function AddFeature({type, title, placeholder, label}) {
	const mobile = await requestState('layout.mobile')
	const info = mobile
		? 'Сделай то да се'
		: 'Укажите точку на карте'
	const info2 = mobile
		? 'Потом ок'
		: 'что-то произойдет'
	const coord = await requestPoint(info2, info)
	// const coord = await requestPoint('Кликни по карте', 'что-то произойдет')

	const form = await requestInput([
        // ['type', ['select', {}, [
        // 	['option', { value: 'idea', label: 'IDEA' }],
        // 	['option', { value: 'idea', label: 'IDEA' }],
        // 	['option', { value: 'idea', label: 'IDEA' }],
        // ]]],
        ['comment', ['text', {
        	label,
	        placeholder,
	        required: 'Ну напишите хоть что-то',
        	rows: 12,
        }]],
        // ['email', ['input', {
        // 	label: 'EMAIL',
        // 	placeholder: 'Расскажите свою email...',
        // 	// pattern: {
        //  //        value: /^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})?$/i,
        //  //        message: "invalid email address"
        //  //    }
        // }]],
    ], {
    	title,
    	submit: 'Добавить',
    	cancel: 'Отмена',
    })

	const date = new Date()
    const properties = {
		comment: form.comment,
		dateAdded: date.toString(),
        type,
    }

	const f = {
		type: 'FeatureCollection',
		features: [
			{
	        	type: 'Feature',
		        geometry: {
		            type: 'Point',
		            coordinates: [coord.lng, coord.lat]
		        },
		        properties,
		    }
	    ]
	}

    await addFeatures(f, {
    	layerId: LAYER_ID,
    })
}