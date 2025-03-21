const calculateTrucks = (
  tripDuration,
  maintenanceDuration,
  daysInMonth = 30
) => {
  if (tripDuration < 0 || maintenanceDuration < 0 || daysInMonth <= 0) {
    console.error(
      "Invalid input values. All parameters must be non-negative, and daysInMonth must be greater than zero."
    );
    return;
  }

  const trucks = [];

  for (let day = 1; day <= daysInMonth; day++) {
    let assigned = false;

    for (const truck of trucks) {
      const lastTripDay = truck[truck.length - 1] || 0;
      if (day - lastTripDay >= tripDuration + maintenanceDuration) {
        truck.push(day);
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      trucks.push([day]);
    }
  }

  trucks.forEach((schedule, index) => {
    console.log(`Truck ${index + 1}: ${schedule.join(", ")}`);
  });

  console.log(`TOTAL Trucks: ${trucks.length}`);
};

const tripDuration = 3;
const maintenanceDuration = 1;
calculateTrucks(tripDuration, maintenanceDuration);
