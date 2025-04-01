function renderNewProductPage(data) {
    if (!data) {
        return "<h1>No product data available</h1>";
    }

    return `
    <h1>${data.name}</h1>
    <p>${data.description}</p>
  `;
}

module.exports = renderNewProductPage;
/**/