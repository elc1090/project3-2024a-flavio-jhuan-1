import vine from '@vinejs/vine'

export const recipientValidator = vine.compile(
    vine.object({
        email: vine.string().email(),
        password: vine.string().minLength(6),
        name: vine.string(),
        state: vine.string(),
        city: vine.string(),
        phone: vine.string(),

    })
)