module.exports= engineerData =>{
    const {
        name,
        email,
        github,
        id
    } = engineerData;

    return`
    <div class="card">
        <h5 class="title">Engineer</h5>
        <h6 class="subtitle">${name}</h6>
        <p herf="${email}">email<p>
        <p> Github: ${github} <br>
        ID:${id}</p>
    </div>
    `;
}