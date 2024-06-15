import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import { BaseModel, column,  belongsTo  } from '@adonisjs/lucid/orm'

export default class Recipient extends BaseModel {
  @column({ isPrimary: true })
  declare user_id: number

  @column()
  declare name: string

  @column()
  declare state: string

  @column()
  declare city: string

  @column()
  declare phone: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User, {
    localKey: 'user_id',
    foreignKey: 'id',
  })
  declare user: BelongsTo<typeof User>
}