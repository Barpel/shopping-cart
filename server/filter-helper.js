/**
 * filters an array by property name using the `String.includes` function
   * @param {array} list the array to perform the filtering on
   * @param {string} propertyName the string that represents the property name inside the object to search on (eg: name)
   * @param {string} term the term to include in the search
   * @return {Array} of filtered list items. In case there were no matches, returns an empty array.
   */
function filterByPropertyContent(list, propertyName, term) {
    console.log('filtering by', propertyName);
    return list.filter(item => item[propertyName]?.includes(term));
}

module.exports = {
    filterByPropertyContent,
}