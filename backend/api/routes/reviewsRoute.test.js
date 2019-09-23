const request = require("supertest");
const server = require("../server");
const db = require("../../config/knexConfig");
const Reviews = require("../models/ReviewModel");

const test_reviews = [
  {
    rating: 2,
    comments: "average at best",
    internet_rating: 2,
    upload_speed: 4,
    download_speed: 7.1,
    secure_wifi: false,
    user_id: 2,
    location_id: 2
  },
  {
    rating: 1,
    comments: "no comment",
    internet_rating: 1,
    upload_speed: 1,
    download_speed: 2,
    secure_wifi: false,
    user_id: 2,
    location_id: 4
  }
];

const singleReview = {
  rating: 1,
  comments: "meh",
  internet_rating: 2,
  upload_speed: 3,
  download_speed: 4,
  secure_wifi: false,
  user_id: 2,
  location_id: 1
};

const updatedInfo = {
  comments: "It was better this time",
  internet_rating: 3
};

const initialize = async () => {
    await db('reviews').truncate()
    await db('reviews').insert(test_reviews)
}

describe('REVIEWS ROUTE', () => {
    describe('/messages', () => {
        describe('GET', () => {
            
        })
    })
})