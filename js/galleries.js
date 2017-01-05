// GALLERY 1
jQuery('#gallery1').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/commUnity.png',
            'thumb': 'images/photos/150.png',
            'subHtml': 'Community_project3'
        }, {
            'src': 'images/photos/my-travelblog.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "TravelBlog_project4"
        }, {
            'src': 'images/photos/my-recipe-homecook.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "RecipeApp_project2"
        }, {
            'src': 'images/photos/Saas.project_1.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "Saas side_project"
        }]
    });
});

// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: false,
        download: true,
        counter: true,
        // Videos
        dynamicEl: [
            {
                "src": "http://vimeo.com/70301553",
                "subHtml": "Vimeo"
            },
            { // You Tube videos work only on a server.
                "src": "http://www.youtube.com/embed/efVWyPNd3xw",
                "subHtml": "You Tube"
            }
        ]
    });
});

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/800.png',
            'thumb': 'images/photos/150.png',
            'subHtml': 'Quae expetendis'
        }, {
            'src': 'images/photos/800.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "Lorem ipsum dolor"
        }, {
            'src': 'images/photos/800.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "Legam a expetendis"
        }, {
            'src': 'images/photos/800.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "Magna quamquam"
        }]
    });
});

// GALLERY 4
jQuery('#gallery4').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/800.png',
            'thumb': 'images/photos/150.png',
            'subHtml': 'Tamen excepteur'
        }, {
            'src': 'images/photos/800.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "Iudicem admodum"
        }, {
            'src': 'images/photos/800.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "Enim pariatur"
        }]
    });
});
