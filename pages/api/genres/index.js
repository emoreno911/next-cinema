import DB from '../../../database/db'

const AllGenres = async (req, res) => {
  try {
    const db = new DB()
    const allEntries = await db.getGenres()
    const len = allEntries.length

    // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ len, data: allEntries }))
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end(
      JSON.stringify({ len: 0, data: [], error: 'Something went wrong' })
    )
  }
}

export default AllGenres