import House from '#models/house'
import type { HttpContext } from '@adonisjs/core/http'

export default class HousesController {
    async index({ response }: HttpContext) {
        const houses = await House.all()
        return response.ok(houses)
        
    }

    async store({ request, response }: HttpContext) {
        const data = request.all()
        console.log(data)
        const house = await House.create(data)
        return response.created(house)
    }

    async show({ params, response }: HttpContext) {
        const house = await House.findOrFail(params.id)
        return response.ok(house)
    }

    async update({ params, request, response }: HttpContext) {
        const data = request.all()
        const house = await House.findOrFail(params.id)
        house.merge(data)
        await house.save()
        return response.ok(house)
    }

    async destroy({ params, response }: HttpContext) {
        const house = await House.findOrFail(params.id)
        await house.delete()
        return response.noContent()
    }
}