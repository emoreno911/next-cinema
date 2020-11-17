// Mock Database, But let's imagine it is one :)
import { data as allData, genres } from './data'

class Database {
  constructor() {}

  async getAll() {
    //const asArray = Object.values(allData)
    await randomDelay()
    return allData
  }

  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(allData, id)) {
      return null
    }

		//const entry = allData[id]
		const entry = allData.find(mov => mov.id === id)
    await randomDelay()
    return entry
	}
	
	async getGenres() {
    await randomDelay()
    return genres
  }
}

// Let's also add a delay to make it a bit closer to reality
const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
	}
)

export default Database