module.exports = teamData => {
    const { } = teamData

    return `
    <!DOCTYPE html>
    <html lang="en-us">

    <head>
    <meta charset="UTF-8">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
        <link rel="stylesheet" href="./style.css">
        <title>Team-Builder</title>
    </head>

    <body>
    <div class="header">

    </div>
    <div class="container">
    ${teamData}
    </div>
    </body>
    </html>
    `
}