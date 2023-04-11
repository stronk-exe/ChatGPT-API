import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import { openai } from '../index'

dotenv.config()

const router = express.Router()

router.post('/text', async (req, res) => {
	try
	{
		const { text, activveChatId } = req.body
		res.status(200).json({ text })
	}
	catch (err)
	{
		res.status(500).json({ error: err.message })
	}
})

export default router