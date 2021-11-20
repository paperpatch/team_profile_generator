function generateManagerHTML(manager) {
  return `
  <div class="col-lg-3 col-md-2">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>
  `
}

function generateEngineerHTML(engineer) {
  return `
  <div class="col-lg-3 col-md-2">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
      </div>
    </div>
  </div>
  `
}

function generateInternHTML(intern) {
  return `
    <div class="col-lg-3 col-md-2">
      <div class="card" style="width: 18rem;">
        <div class="card-header">
          <h5 class="card-title">${intern.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
          </ul>
        </div>
      </div>
    </div>
  `
}

function generateTeam(data) {

  pageData = [];

  for (let i =0; i< data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    // console.log(role);

    if (role === "Manager") {
      pageData.push(generateManagerHTML(employee));
    }

    if (role === "Engineer") {
      pageData.push(generateEngineerHTML(employee));
    }

    if (role === "Intern") {
      pageData.push(generateInternHTML(employee));
    }
  }

  return pageData.join('')
}

const generateHTML = function (data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet">
    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <h1>Team Profile</h1>
    </header>
    <main>
      <div class="container">
        <div class="row justify-content-center">
          ${generateTeam(data)}
        </div>
      </div>
    </main>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </html>
  `
}

module.exports = generateHTML;