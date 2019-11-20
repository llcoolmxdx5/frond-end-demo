import SMERouter from 'sme-router';
import Active from './Active';
import PositionController from '../controller/PositionController';

const router = new SMERouter('main-container')

router.use(Active)

router.route('/index', (req, res, next) => {
  const { params, query, body , url, route } = req
  res.render('index page')
})

router.route('/position/index', PositionController.render.bind(PositionController))

router.route('/position/add', PositionController.addRender.bind(PositionController))

router.route('/position/updata/:id', PositionController.updataRender.bind(PositionController))

router.route('*', (req, res, next) => {
  res.redirect('/index')
})

export default router