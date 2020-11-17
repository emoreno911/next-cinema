import DB from '@database'

const MovieDetail = async (req, res) => {
  try {
    const db = new DB()
    const movId = req.query.id 

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