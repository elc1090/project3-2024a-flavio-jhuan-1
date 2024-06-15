/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import RecipientsController from '#controllers/recipients_controller'
import AuthController from '#controllers/auth_controller'
import { middleware } from './kernel.js'
import HousesController from '#controllers/houses_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


router.post('/login', [AuthController, 'authenticate'])

router.get('/recipients', [RecipientsController, 'index'])
router.post('/register', [RecipientsController, 'store'])
router.get('/recipients/:id', [RecipientsController, 'show'])
router.put('/recipients/:id', ([RecipientsController, 'update'])).use(middleware.auth({guards: ['api']}))
router.delete('/recipients/:id', [RecipientsController, 'destroy']).use(middleware.auth({guards: ['api']}))

router.get('/houses', [HousesController, 'index'])
router.post('/houses', [HousesController, 'store']).use(middleware.auth({guards: ['api']}))
router.get('/houses/:id', [HousesController, 'show'])
router.put('/houses/:id', [HousesController, 'update']).use(middleware.auth({guards: ['api']}))
router.delete('/houses/:id', [HousesController, 'destroy']).use(middleware.auth({guards: ['api']}))


// router
//   .get('app', [AppsControler, 'index'])
//   .use(middleware.auth({
//     guards: ['api']
//   }))
