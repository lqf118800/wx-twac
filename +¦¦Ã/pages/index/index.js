var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();

Page({
    data: {
        imgUrls: [
            '../../image/baner-volunteer.jpg',
            '../../image/baner-volunteer2.jpg',
            '../../image/baner-volunteer3.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iconArray: [
            {
                "iconUrl": '../../image/icon-volunteer.png',
                "iconText": 'volunteer'
            },
            {
                "iconUrl": '../../image/icon-Internship.png',
                "iconText": 'Internship'
            },
            {
                "iconUrl": '../../image/icon-Tour.png',
                "iconText": 'Tours'
            },
            {
                "iconUrl": '../../image/icon-insurance.png',
                "iconText": 'insurance'
            },
            {
                "iconUrl": '../../image/icon-Pass.png',
                "iconText": 'Pass'
            },
            {
                "iconUrl": '../../image/icon-Spirit.png',
                "iconText": 'Spirit of Tas'
            },
            {
                "iconUrl": '../../image/icon-coop.png',
                "iconText": 'cooperation'
            },
            {
                "iconUrl": '../../image/icon-aboutus.png',
                "iconText": 'About Us'
            }
        ],
        itemArray: [
            {
                "itemUrl": '../../image/volunteer4.jpg',
                "itemText": 'Margate Bonfire and Bushcare Day '
            },
            {
                "itemUrl": '../../image/baner-volunteer.jpg',
                "itemText": 'Tahune Airwalk Volunteer'
            },
            {
                "itemUrl": '../../image/volunteer3.jpg',
                "itemText": 'Tree Planting & Richmond'
            },
        ]
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    }
})