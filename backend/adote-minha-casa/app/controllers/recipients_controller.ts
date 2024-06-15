// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user"
import { HttpContext } from "@adonisjs/core/http"
import { recipientValidator } from "#validators/recipient"
import Recipient from "#models/recipient"

export default class RecipientsController {
    async index({ response }: HttpContext) {
        const recipients = await Recipient.all()
        return response.ok(recipients)
    }

    async store({ request, response }: HttpContext) {
        const data = request.all()
        console.log(data)
        const recipientsData = await recipientValidator.validate(data)
        const user = await User.create(
            { email: recipientsData.email, password: recipientsData.password },
          )
        const recipient = await Recipient.create(
            {
                user_id: user.id,
                name: recipientsData.name,
                phone: recipientsData.phone,
                city: recipientsData.city,
                state: recipientsData.state,
            }
        )



        return response.created(recipient)
        
    }

    async show({ params, response }: HttpContext) {
        const recipient = await Recipient.findOrFail(params.id)
        return response.ok(recipient)
    }

    async update({ params, request, response }: HttpContext) {
        const data = request.all()
        const recipient = await Recipient.findOrFail(params.id)
        recipient.merge(data)
        
        await recipient.save()

        return response.ok(recipient)
    }

    async destroy({ params, response }: HttpContext) {
        const recipient = await Recipient.findOrFail(params.id)
        await recipient.delete()

        return response.noContent()
    }
}