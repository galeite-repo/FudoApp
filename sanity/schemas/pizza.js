export default {
    name: 'pizza',
    title: 'pizza',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'image',
            type: 'image',
            option: {
                hotspot: true
            }
        },
        {
            name: 'title',
            title: 'title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: "title",
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'array',
            of: [{ type: 'number' }]
        },
        {
            name: 'details',
            title: 'details',
            type: 'string'
        }

    ]
}