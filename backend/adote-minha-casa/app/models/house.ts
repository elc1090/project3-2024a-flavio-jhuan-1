import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class House extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cadastred_by_user_id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare pixkey: string

  @column()
  declare address: string

  @column()
  declare city: string

  @column()
  declare state: string

  @column()
  declare file_url: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}