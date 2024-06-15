import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class SessionController {
  async store({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    console.log(email, password)

    /**
     * Find a user by email. Return error if a user does
     * not exists
     */ 
    const user = await User.verifyCredentials(email, password)
    if (!user) {
      return response.badRequest('Invalid credentials')
    }
    /**
     * Now login the user or create a token for them
     */
  }
}
