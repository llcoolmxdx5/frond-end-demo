import SMERouter from 'sme-router'

const router = new SMERouter('main-container')

router.route('/index', (req, res, next) => {
  const { params, query, body , url, route } = req
  res.render('index page')
})

router.route('/position', (req, res, next) => {
  res.render('position page')
})

router.route('*', (req, res, next) => {
  res.redirect('/index')
})