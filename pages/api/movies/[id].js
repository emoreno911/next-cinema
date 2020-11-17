import DB from '../../../database/db'

const MovieDetail = async (req, res) => {
  try {
    const { id:movId } = JSON.parse(req.body)
    const db = new DB()
    const movie = await db.getById(movId)

    // Notice: We're using Next.JS response helpers here :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.status(200).json(movie)
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default MovieDetail