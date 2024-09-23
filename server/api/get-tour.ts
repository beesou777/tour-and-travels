export default defineEventHandler(() => {
  const featureData = [
    {
      "tour_code": "TH - 004",
      "tour_title": "Mystical Nepal Tour",
      "tour_duration": 7,
      "destinations_covered": [
        "Kathmandu",
        "Pokhara",
        "Jomsom"
      ],
      "product_description": "Himalayan Trio as the name suggests it covers two most popular valley tour of the country, Kathmandu and Pokhara. This tour is a fine blend of religion, culture and nature. Kathmandu- the city of temples covers core religious and historically important UNESCO World Heritage sites; where travelers can understand culture and lifestyle of Nepalese people. This tour also covers Pokhara - known as Switzerland of Asia which gives magnificent view of western Himalayan ranges including Mt Fishtail, Annapurna, Dhaulagiri and other mountain peaks, lakes, waterfall, etc. Also Muktinath is a Vishnu temple, sacred to both Hindus and Buddhists. It is located in Muktinath Valley at the foot of the Thorong La mountain pass in Mustang, Nepal. It is one of the world's highest temples. Within Hinduism, it is one of the 108 Divya Desams, and is the only Divya Desam located outside India. Beside the popular Pilgrimage, nature and cultural site tour, during this tour one can be involved in various adventure activity, night life, casinos, discotheques, shopping, etc.",
      "outlined_itinerary": [
        "Day 01: Arrival in Tribhuvan International airport",
        "Day 02: Kathmandu sightseeing tour",
        "Day 03: Drive to Pokhara",
        "Day 04: Fly Jomsom & sightseeing",
        "Day 05: Fly Pokhara & sightseeing tour",
        "Day 06: Drive back Kathmandu",
        "Day 07: International departure"
      ],
      "detailed_itinerary": [
        {
          "day": 1,
          "title": "Arrive in Kathmandu",
          "description": "Once you arrive at the Tribhuvan International Airport in Kathmandu, look out for our representative who will be holding a placard with your name on it. A short drive and you will be in your hotel, our tour officer will help you complete all the check-in procedure and brief you about tour itinerary. In the evening you can head over to Thamel, the main tourist hub where you can have some good time at the bar or a club on own. Overnight stay in Kathmandu."
        },
        {
          "day": 2,
          "title": "Kathmandu City Tour",
          "description": "Today you get to kick-start your cultural discovery! Visit Pashupatinath Temple, Boudhanath Stupa, Patan Durbar Square, Swoyambhunath Stupa, and more. The day is filled with cultural landmarks of Kathmandu. Overnight in Kathmandu."
        },
        {
          "day": 3,
          "title": "Drive to Pokhara",
          "description": "Following breakfast, our adventure begins with a scenic drive to Pokhara (210km, 7-8 hrs drive) offering views of rivers, terrace fields, and captivating views of the Annapurna range. Optional visit to Manakamana Devi Temple by cable car. Overnight in Pokhara."
        },
        {
          "day": 4,
          "title": "Fly to Jomsom & Drive Muktinath",
          "description": "Early morning transfer to airport for flight to Jomsom. Drive to Muktinath for the temple visit. Return to Jomsom. Overnight in Jomsom."
        },
        {
          "day": 5,
          "title": "Fly back to Pokhara & Sightseeing Tour",
          "description": "Fly back to Pokhara, visit Bindabasini Temple, Davis Falls, Mahadev Cave, and Seti Gorge. Stroll the lakeside area in the evening. Overnight in Pokhara."
        },
        {
          "day": 6,
          "title": "Drive back to Kathmandu",
          "description": "After breakfast, drive back to Kathmandu. Rest of the day free at leisure. Overnight in Kathmandu."
        },
        {
          "day": 7,
          "title": "Depart Kathmandu",
          "description": "Our representative will drop you off at the airport three hours prior to flight departure."
        }
      ],
      "tour_costs": {
        "currency": "INR",
        "pricing": {
          "5_star_premium": {
            "2_to_4_pax": 71200,
            "5_to_10_pax": 65300
          },
          "5_star_deluxe": {
            "2_to_4_pax": 53800,
            "5_to_10_pax": 48600
          },
          "4_star_premium": {
            "2_to_4_pax": 47300,
            "5_to_10_pax": 42200
          },
          "4_star_deluxe": {
            "2_to_4_pax": 45600,
            "5_to_10_pax": 40400
          },
          "3_star_premium": {
            "2_to_4_pax": 42400,
            "5_to_10_pax": 37300
          },
          "3_star_deluxe": {
            "2_to_4_pax": 40600,
            "5_to_10_pax": 34500
          }
        }
      },
      "tour_cost_includes": [
        "Special traditional welcome on arrival at International airport",
        "Airport-Hotel-Airport transfers on private vehicle",
        "03 Night Double/Twin sharing accommodation at Kathmandu",
        "02 Night Double/Twin sharing accommodation at Pokhara",
        "01 Night Double/Twin sharing accommodation at Jomsom",
        "Daily breakfast at hotel",
        "Lunch & Dinner at hotel in Jomsom",
        "Sightseeing and transfer as per the itinerary by private A/C vehicle",
        "Jomsom/Muktinath/Jomsom by SIC vehicle",
        "Pokhara/Jomsom/Pokhara by Flight",
        "01 Full day Kathmandu city tour",
        "01 Full day Pokhara city tour",
        "01 Full day Muktinath Darshan",
        "ACAP Permit",
        "Mineral Water on board during sightseeing tour",
        "Local Sim card with 4G facilities returnable",
        "All applicable taxes"
      ],
      "hotels": [
        {
          "category": "5* Premium",
          "kathmandu": "Kathmandu Marriot Hotel",
          "pokhara": "Sarangkot Mountain Lodge",
          "jomsom": "Hotel Lo Mustang"
        },
        {
          "category": "5* Deluxe",
          "kathmandu": "Hyatt Regency Kathmandu/ Dusit Princess Kathmandu",
          "pokhara": "Fishtail Lodge by Annapurna",
          "jomsom": "Hotel Lo Mustang"
        },
        {
          "category": "4* Premium",
          "kathmandu": "Aloft Kathmandu Thamel",
          "pokhara": "Mountain Glory Forest Resort & Spa",
          "jomsom": "Hotel Oms Home"
        },
        {
          "category": "4* Deluxe",
          "kathmandu": "Hotel Everest/ Hotel Barahi Kathmandu",
          "pokhara": "Hotel Barahi Pokhara",
          "jomsom": "Hotel Shaligram"
        },
        {
          "category": "3* Premium",
          "kathmandu": "Hotel Grand",
          "pokhara": "Hotel Aabas Pokhara",
          "jomsom": "Hotel Shaligram"
        },
        {
          "category": "3* Deluxe",
          "kathmandu": "Hotel Simal/Hotel Yu Khang",
          "pokhara": "Hotel Queenspark",
          "jomsom": "Hotel Shaligram"
        }
      ],
      "tour_cost_excludes": [
        "Meals, Licensed holder tour guide during sightseeing",
        "Entrance & monument fees, Manakamana cable car fee",
        "Bar bills, Laundry bills, Tips and all other expenses except mentioned in package includes heading",
        "Baggage and personal expenses",
        "Any other expenses due to political, Act of nature or any other reason which are beyond control of Travelers Himalaya or its associate agents"
      ],
      "notes": [
        "Rate is valid for Indian Passport/Voters ID card and Valid till March 2025.",
        "Airport transfer Supplement charges will be applicable before 8:00 A.M & after 8:00 P.M.",
        "Accommodation in Kathmandu will be Star Category as mentioned. Similar category accommodations will be used in other destinations.",
        "Vehicle will not be at disposal but will perform activities as per the Package Inclusions on point to point basis.",
        "The above program is just the guideline and can be customized as per your requirements."
      ]
    },
  ];

  return featureData;
});
