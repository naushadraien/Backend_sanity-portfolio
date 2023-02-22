export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        //object
        {
            name: 'name',
            title: 'Name',
            type: 'string'  
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'  
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            //object
            options: {
                hotspot: true,
            }  
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'  
        },
    ],
}