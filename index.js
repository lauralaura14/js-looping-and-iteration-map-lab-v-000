function lowerCaseDrivers(drivers) {
  const newArrayDrivers = drivers.map(function(driver)) {
    return driver.toLowerCase();
  })
  return newArrayDrivers;
}
