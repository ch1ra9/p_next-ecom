import initDB from "../../helpers/initDB"
initDB()
export default function handler(req, res) {
  res.json({ name: 'John Doe' })
}
