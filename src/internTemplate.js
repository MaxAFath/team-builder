module.exports = internData => {
    const { name,
        email,
        school,
        id } = internData;

        return `
        <div class="card">
            <h5 class="card-title">Intern</h5>
            <h6 class="card-subtitle">${name}</h6>
            <p><a herf=${email}email</a>><br>
            School:${school}<br>
            ID:${id}</p>
        </div>`;
}