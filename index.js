const { cli, writeToFile } = require('./lib/helpers')

async function app () {
    const shape = await cli()
    return writeToFile(shape)
}

app ()