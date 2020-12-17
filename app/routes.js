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

//router.post('/YOUR-PAGE-PATH-HERE', function (req, res) {
  let errorSummary = []
  let errors = {}
  const selectedOption = req.body['are-details']
  if (!selectedOption) {
    const message = '[Select either of these options to proceed]'
    errorSummary = [
      {
        text: message,
        href: '#are-details-conditional'
      }
    ]
    errors['are-details'] = {
      text: message
    }
  }
  if (errorSummary.length > 0) {
    return res.render('/start', { errorSummary, errors })
  } else {
    res.redirect('/[NEXT_QUESTION_PATH]')
  }
});

 Add your routes here - above the module.exports line

module.exports = router
