function lowerCaseDrivers(drivers) {
  const newArrayDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  })
  return newArrayDrivers;
}

function nameToAttributes(drivers){
    const newNames = drivers.map(function(name){
        return Object.assign({}, {firstName: name.split(" ")[0], lastName: name.split(" ")[1]})
    })
    return newNames;
};
