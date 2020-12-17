const express = require('express')
const router = express.Router()

router.post('/eligibility-step-results', function (req, res) {
 var answers = req.session.data;
 for (const [question, answer] of Object.entries(answers)) {
  if (answer == 'no') {
   // Redirect if any answer is 'no'
   res.redirect('/eligibility-step-results-no')
  }
 }
 // If all answers are 'yes'
 res.redirect('/eligibility-step-results-yes')
})


module.exports = router
