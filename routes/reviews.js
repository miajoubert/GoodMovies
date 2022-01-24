const express = require('express');

const { Op } = require('sequelize')
const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Movie, Review, Rating, User } = require('../db/models');
const { requireAuth } = require('../auth');

const router = express.Router();


router.get(`/reviews/:reviewId/edit`,
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.reviewId, 10);

    const review = await Review.findByPk(reviewId)

    res.render('review-edit', { title: "Review", review, csrfToken: req.csrfToken() })
  })
)

const reviewValidators = [
  check('review_title')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a review title.")
    .isLength({ max: 50 })
    .withMessage("Review must not be more that 50 characters long."),
  check('summary')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a review summary.")
]

router.post(`/reviews/:reviewId/edit`,
  csrfProtection,
  requireAuth,
  reviewValidators,
  asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.reviewId, 10);

    const review = await Review.findByPk(reviewId);

    review.review_title = req.body.review_title;
    review.summary = req.body.summary;

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await review.save();
      res.redirect(`/movies/${review.movie_id}`)
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('review-edit', {
        title: "Review",
        review,
        errors,
        csrfToken: req.csrfToken()
      })
    }
  })
)

module.exports = router;
