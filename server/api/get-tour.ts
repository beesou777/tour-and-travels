export default defineEventHandler(() => {
    const featureData = [
        {
            img: "/images/kathmandu.webp",
            title: "Kathmandu",
            price: 5500,
            person: 120,
            location: "Nepal",
            days: 5,
            slug: "Kathmandu",
            slug2: "kathmandu",
            lat: 27.7172,
            lng: 85.3240,
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam distinctio...",
            highlights: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing."
            ],
            included: [
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor."
            ]
        },
        {
            img: "/images/kathmadu2.webp",
            title: "Kathmandu Durbar Square",
            price: 4500,
            person: 80,
            location: "Nepal",
            days: 3,
            slug: "Kathmandu",
            slug2: "kathmandu-durbar-square",
            lat: 27.7104,
            lng: 85.2904,
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam distinctio...",
            highlights: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing."
            ],
            included: [
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor."
            ]
        },
        {
            img: "/images/pokhara2.webp",
            title: "Pokhara Lakeside",
            price: 6500,
            person: 150,
            location: "Nepal",
            days: 7,
            slug: "Pokhara",
            slug2: "pokhara-lakeside",
            lat: 28.2096,
            lng: 83.9856,
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam distinctio...",
            highlights: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                "Lorem ipsum dolor sit, amet consectetur adipisicing.",
                "Lorem ipsum dolor sit, amet consectetur adipisicing."
            ],
            included: [
                "Lorem, ipsum dolor.",
                "Lorem, ipsum dolor.",
                "Lorem, ipsum dolor."
            ]
        },
        {
            img: "/images/pokhara3.webp",
            title: "Sarangkot Sunrise Tour",
            price: 4000,
            person: 60,
            location: "Nepal",
            days: 2,
            slug: "Pokhara",
            slug2: "pokhara-sarangkot-sunrise",
            lat: 28.2386,
            lng: 83.9918,
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam distinctio...",
            highlights: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing."
            ],
            included: [
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor."
            ]
        },
        {
            img: "/images/lumbini.webp",
            title: "Lumbini Pilgrimage",
            price: 7000,
            person: 50,
            location: "Nepal",
            days: 8,
            slug: "Lumbini",
            slug2: "lumbini-pilgrimage",
            lat: 27.6666,
            lng: 83.2500,
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam distinctio...",
            highlights: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing."
            ],
            included: [
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor."
            ]
        },
        {
            img: "/images/lumbini3.webp",
            title: "Birthplace of Buddha Tour",
            price: 7500,
            person: 40,
            location: "Nepal",
            days: 9,
            slug: "Lumbini",
            slug2: "lumbini-birthplace-of-resurrection",
            lat: 27.6666,
            lng: 83.2500,
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam distinctio...",
            highlights: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing."
            ],
            included: [
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor."
            ]
        },
        {
            img: "/images/dhr2.webp",
            title: "Dharan City Exploration",
            price: 6000,
            person: 90,
            location: "Nepal",
            days: 6,
            slug: "Dharan",
            slug2: "dharan-city-exploration",
            lat: 26.8227,
            lng: 87.2729,
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam distinctio...",
            highlights: [
              "Lorem ipsum dolor sit amet, consectetur adipisicinge.",
              "Lorem ipsum dolor sit, amet consectetur adipisicingere.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing.ere"
            ],
            included: [
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor."
            ]
        },
        {
            img: "/images/dh3.webp",
            title: "Dharan Hiking Tour",
            price: 5000,
            person: 70,
            location: "Nepal",
            days: 4,
            slug: "Dharan",
            slug2: "dharan-hiking-tour",
            lat: 26.8227,
            lng: 87.2729,
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam distinctio...",
            highlights: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing."
            ],
            included: [
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor."
            ]
        },
        {
            img: "/images/bh.webp",
            title: "Biratnagar City Tour",
            price: 4000,
            person: 85,
            location: "Nepal",
            days: 3,
            slug: "Biratnagar",
            slug2: "biratnagar-city-tour",
            lat: 26.4483,
            lng: 87.2694,
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam distinctio...",
            highlights: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing."
            ],
            included: [
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor."
            ]
        },
        {
            img: "/images/biratnagar.webp",
            title: "Biratnagar Cultural Experience",
            price: 4500,
            person: 95,
            location: "Nepal",
            days: 5,
            slug: "Biratnagar",
            slug2: "biratnagar-cultural-experience",
            lat: 26.4483,
            lng: 87.2694,
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam distinctio...",
            highlights: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing."
            ],
            included: [
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor.",
              "Lorem, ipsum dolor."
            ]
        },
    ];

    return featureData;
});
