/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

const updateSpots = function(state, appointments, id) {

  // THIS IS NOT THE SOLUTION!!!
  const updatedDays   = [...state.days]

  // return an updated days array
  return updatedDays
};

module.exports = updateSpots;
