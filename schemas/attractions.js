export default {
    name: 'attraction',
    type: 'document',
    title: 'Attraction',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'Detail',
            type: 'string',
            title: 'Detail'
        },
        {
            name: 'coverimage',
            type: 'image',
            title: 'Coverimage'
        },
        {
            name: 'latitude',
            type: 'number',
            title: 'Latitude'
        },
        {
            name: 'longitude',
            type: 'number',
            title: 'Longitude'
        }
    ]
}