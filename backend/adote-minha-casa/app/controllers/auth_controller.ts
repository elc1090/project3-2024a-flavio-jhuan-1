// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user"
import { HttpContext } from "@adonisjs/core/http"

export default class AuthController {
    async store({ request, response }: HttpContext) {
        const data = request.only(['email', 'password'])
        const user = await User.create(data)

        return response.created(user)
        
    }
    async authenticate({ request, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])
        console.log(email, password)
    
        /**
         * Find a user by email. Return error if a user does
         * not exists
         */ 
        const user = await User.verifyCredentials(email, password)
        console.log(user)
        const token = await User.accessTokens.create(user)
        return response.ok(token)
        


        /**
         * Now login the user or create a token for them
         */
      }
}