module.exports = leadData => {
    const  {
        name,
        email,
        office,
        id
    } = leadData;

    return`
    <div class="card">
        <h5 class="card-title">Team lead</h5>
        <h6 class="card-subtitle">${name}</h6>
        <p herf="${email}">email: ${email}</p>
        <p>office number: ${office}<br>
        id:${id}</p>
    </div>`;
}